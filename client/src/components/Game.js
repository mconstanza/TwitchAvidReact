import React, { Component } from 'react';


import {Link} from 'react-router';


class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickGame = (gameParam) => {

    window.location = '/streams/' + gameParam.game.name + '/';
  }

  // onClick={() => this.clickGame(this.props.game)} cut from div below
  render() {
    var link = "/streams/" + this.props.game.name;
    return (
      <Link to={link} ><div key = {this.props.key} className="game" >
        <img className="gameImage" src={this.props.game.box.medium}/>
        <p className="gameTitle">{this.props.game.name}</p>
      </div>
    </Link>
    )

  }
}

module.exports = Game;
