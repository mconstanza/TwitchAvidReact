import React, { Component } from 'react';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let chatChannel = "http://www.twitch.tv/" + {this.props.channel} + "/chat";
    return (
      <div className="chat" >
        <iframe 
        frameborder="0"
        scrolling="no"
        id="chat_embed"
        src={chatChannel}
        height="100%"
        width="100%">
        </iframe>
      </div>
    )

  }
}

module.exports = Chat;
