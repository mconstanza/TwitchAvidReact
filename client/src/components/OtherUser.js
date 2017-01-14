import React, { Component } from 'react';

import Twitch from '../config/Twitch';

class OtherUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div key={this.props.key} className="otherUser">
        <img src={this.props.otherUser.logo}/>
        <p>{this.props.otherUser.display_name}</p>
        <p>{this.props.otherUser.bio}</p>
      </div>
    )

  }
}

module.exports = OtherUser;
