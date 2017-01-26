import React, { Component } from 'react';
import helpers from "../utils/helpers";

class StreamStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {
        stream: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.channel.name) {
      helpers.getStream(nextProps.channel.name, function(data) {
          this.setState({stream: data});
      }.bind(this));
    }
  }

  render() {
    var status;
    if(this.state.stream == null) status = "";
    else if(this.state.stream.stream) status = "Online";
    else status = "Offline";


    return (
        <p className={status == "Online" ? "online" : "offline"}> 
          <i>{status}</i>
        </p>
    )

  }
}

module.exports = StreamStatus;
