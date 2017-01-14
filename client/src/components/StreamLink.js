import React, { Component } from 'react';

class StreamLink extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div key = {this.props.key} className="streamLink" onClick={() => this.props.addStreamToCanvas(this.props.stream)}>
        <img src={this.props.stream.preview.medium}/>
        <p>{this.props.stream.channel.name}</p>
      </div>
    )

  }
}

module.exports = StreamLink;
