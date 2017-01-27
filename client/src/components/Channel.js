import React, { Component } from 'react';

import StreamStatus from './StreamStatus';
import helpers from "../utils/helpers";

class Channel extends Component {

  constructor(props) {
    super(props);
    this.state = {
        channel: {}
    };

    helpers.getChannel(this.props.channel.channel, function(data) {
        this.setState({channel: data});
    }.bind(this));

  }

  componentWillReceiveProps(nextProps) {
    helpers.getChannel(nextProps.channel.channel, function(data) {
        this.setState({channel: data});
    }.bind(this));
  }

  render() {

    return (
      <div className="channelLink">
        <img className="historyChannelLogo" src={this.state.channel.logo} onClick={() => this.props.addStreamToCanvas(this.props.stream)}/>
        <p className="historyChannelName"> {this.state.channel.display_name} </p>
        <p className="historyGameName"> {"Played " + this.props.channel.game} </p>
        <StreamStatus addStreamToCanvas={this.props.addStreamToCanvas} channel={this.state.channel}/>
      </div>
    )

  }
}

module.exports = Channel;
