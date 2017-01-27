import React, { Component } from 'react';
class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let chatChannel = "https://www.twitch.tv/" + this.props.currentChatChannel + "/chat";
    return (
      <div className="chat" >
        <iframe
        frameBorder="0"
        scrolling="no"
        id="chat_embed"
        src={chatChannel}
        height="800px"
        width="200px">
        </iframe>
      </div>
    )
  }
}

module.exports = Chat;
