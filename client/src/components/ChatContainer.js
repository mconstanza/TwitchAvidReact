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

  toggleBox = () => {
    this.setState({
      shouldShowBox: !this.state.shouldShowBox
    });
  };

  render() {
    return (
      <div className="chatDiv">
       <button
        className="toggle-btn"
        onClick={this.toggleBox}>Chat
      </button>
       <ReactCSSTransitionGroup
          transitionName="chat"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
        {this.state.shouldShowBox && <Chat currentChatChannel={this.props.currentChatChannel}/>}
      </ReactCSSTransitionGroup>
      </div>
    )

  }
}

module.exports = ChatContainer;