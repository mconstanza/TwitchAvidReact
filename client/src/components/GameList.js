import React, {Component} from 'react';
import Twitch from '../config/Twitch';

import Game from './Game';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class GameList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          games: []
        };
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
        this.setState({games: json.top})
      })
    }

    gamesList = () => {
        if (this.props.games) {
            const games = this.props.games.map((game) =>
              <li><Game key={game._id} game={game}/></li>
          );
          return (<ul className="gamesList">{games}</ul>)
        }

        else {
          const games = this.state.games.map((game) =>
            <li><Game key={game.game._id} game={game.game}/></li>
        );
        return (<ul className="gamesList">{games}</ul>)
      }
    }

    componentWillMount(){
      this.getTopGames();
    }

    render() {
        return (
            <div>
              <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                {this.gamesList()}
              </ReactCSSTransitionGroup>
            </div>
          
        )
    }
}

module.exports = GameList;
