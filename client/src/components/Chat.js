import React, { Component } from 'react';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="chat" >
        <iframe 
        frameborder="0"
        scrolling="no"
        id="chat_embed"
        src="http://www.twitch.tv/{CHANNEL}/chat"
        height="200px"
        width="200px">
        </iframe>
      </div>
    )

  }
}

module.exports = Chat;
