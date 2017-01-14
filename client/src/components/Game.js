import React, { Component } from 'react';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickGame() {

  }

  render() {

    return (
      <div key = {this.props.key} className="game" onClick={this.clickGame}>
        <img src={this.props.game.game.box.medium}/>
        <p>{this.props.game.game.name}</p>
      </div>
    )

  }
}

module.exports = Game;
