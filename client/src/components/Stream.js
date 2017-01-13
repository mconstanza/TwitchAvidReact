import React, { Component } from 'react';

import Twitch from '../config/Twitch';

class Stream extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  clickStream = (gameParam) => {
    // window.location = '/streams' + gameParam.game.name + '/';
  }

  render() {

    return (
      <div key = {this.props.key} className="stream" onClick={this.clickStream}>
        <img src={this.props.stream.preview.medium}/>
        <p>{this.props.stream.channel.name}</p>
      </div>
    )

  }
}

module.exports = Stream;
