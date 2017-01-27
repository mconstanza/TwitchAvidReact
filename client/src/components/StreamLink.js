import React, { Component } from 'react';

class StreamLink extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div onClick={() => this.props.addStreamToCanvas(this.props.stream)} key = {this.props.stream._id} className="streamLink">
        <img className="streamLinkImg" src={this.props.stream.preview.medium} />
          <div className="streamCard">
            <p className="channelStatus">{this.props.stream.channel.status}</p>
            <p className="channelName">{this.props.stream.viewers} viewers on <b> {this.props.stream.channel.name} </b></p>
          </div>
      </div>
    )

  }
}

module.exports = StreamLink;
