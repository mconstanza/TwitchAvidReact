import React, { Component } from 'react';
import helpers from "../utils/helpers";

class Channel extends Component {

  constructor(props) {
    super(props);
    this.state = {
        channel: {},
        stream: {}
    };

    helpers.getChannel(this.props.channel.channel, function(data) {
        this.setState({channel: data});
    }.bind(this));

  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.channel.channel != this.state.channel.name) {
        helpers.getChannel(nextProps.channel.channel, function(data) {
            this.setState({channel: data});
        }.bind(this));
    }

    if(nextState.channel.name) {
        helpers.getStream(nextState.channel.name,function(stream) {
            this.setState({stream: stream});
        }.bind(this));
    }
  }

  render() {

    return (
      <div className="streamLink">
        <img className="channelLogo" src={this.state.channel.logo} onClick={() => this.props.addStreamToCanvas(this.props.stream)}/>
        <p className="channelName"> {this.state.channel.display_name} </p>
        <p className="channelName"> {"Played " + this.props.channel.game} </p>
        <p className={this.state.stream.stream ? "online" : "offline"}> <i>{this.state.stream.stream ? "Online" : "Offline"}</i></p>
      </div>
    )

  }
}

module.exports = Channel;
