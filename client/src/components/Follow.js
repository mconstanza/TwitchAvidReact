import React, { Component } from 'react';

import Twitch from '../config/Twitch';

class Follow extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div key = {this.props.key} className="follow">
        <a href={this.props.follow.channel.url}>{this.props.follow.channel.display_name}</a>
        <img src={this.props.follow.channel.logo}/>
      </div>
    )

  }
}

module.exports = Follow;