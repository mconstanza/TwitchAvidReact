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
    var link = "/streams/" + this.props.game.game.name;
    return (
      <Link to={link} ><div key = {this.props.key} className="game" >
        <img src={this.props.game.game.box.medium}/>
        <p>{this.props.game.game.name}</p>
      </div>
    </Link>
    )

  }
}

module.exports = Game;
