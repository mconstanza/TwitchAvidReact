import React, {Component} from 'react';

import Twitch from '../config/Twitch';

import Game from './Game';

class GameList extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        console.log(json.top);
        this.setState({games: json.top})
      })
    }

    gamesList = () => {
        if (this.state.games) {
            const games = this.state.games.map((game) =>
              <li><Game key={game.game._id} game={game}/></li>
          );
          return (<ul>{games}</ul>)
        }

    }


    componentWillMount() {
      this.getTopGames();     

    }

    render() {
        return (
            <div className="gameList">
              <form method="POST" action="/authorize"><button type="submit">Test</button></form>
              {this.gamesList()}

            </div>
        )

    }
}

module.exports = GameList;
