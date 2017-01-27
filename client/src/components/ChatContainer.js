import React, { Component } from 'react';
import Chat from './Chat';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ChatContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shouldShowBox: true
    };
  }

  // toggleBox = () => {
  //   this.setState({
  //     shouldShowBox: !this.state.shouldShowBox
  //   });
  // };

  render() {
    return (
      <div className="chatDiv">
        <Chat showChat={this.props.showChat} currentChatChannel={this.props.currentChatChannel}/>
      </div>
    )

  }
}

module.exports = ChatContainer;
