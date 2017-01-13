import React, { Component } from 'react';

import Twitch from '../config/Twitch';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickGame = (gameParam) => {

    window.location = '/streams/' + gameParam.game.name + '/';
  }

  render() {

    return (
      <div key = {this.props.key} className="game" onClick={() => this.clickGame(this.props.game)}>
        <img src={this.props.game.game.box.medium}/>
        <p>{this.props.game.game.name}</p>
      </div>
    )

  }
}

module.exports = Game;
