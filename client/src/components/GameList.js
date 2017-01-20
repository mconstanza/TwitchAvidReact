import React, {Component} from 'react';
import Twitch from '../config/Twitch';

import Game from './Game';

class GameList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          shouldHide: false,
          isToggleOn: true
        };
        this.onClick = this.onClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onClick() {
      console.log("onclick");
        if(!this.state.shouldHide){
          this.setState({
            shouldHide: true
          })
        }else{
          this.setState({
            shouldHide: false
          })
        }
      this.handleClick();
    }
    handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
      }));
    }
    getTopGames() {
      fetch('https://api.twitch.tv/kraken/games/top', {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': Twitch.clientID
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log(json.top);
        this.setState({games: json.top})
      })
    }

    gamesList = () => {
        if (this.props.games) {
          console.log(this.props.games)
            const games = this.props.games.map((game) =>
              <li><Game key={game._id} game={game}/></li>
          );
          return (<ul className="gamesList">{games}</ul>)
        }

    }


    componentWillMount() {
      // this.getTopGames();
    }

    render() {
        return (
            <div>

              <button onClick={this.onClick} >{this.state.isToggleOn ? <i className="fa">&#xf102;</i> : <i className="fa">&#xf103;</i>}</button>
              <div className={this.state.shouldHide ? 'hidden' : ''}>
                {this.gamesList()}
              </div>

            </div>
        )

    }
}

module.exports = GameList;
