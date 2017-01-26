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
    var style = {
      marginLeft: "10px",
      cursor: "pointer"
    }

    var status, viewable;
    if(this.state.stream == null) status = "";
    else if(this.state.stream.stream) status = "Online";
    else status = "Offline";
    if(status == "Online") viewable =  <i onClick={() => this.props.addStreamToCanvas(this.state.stream.stream)} style={style} className="fa fa-eye" aria-hidden="true"></i>; 


    return (

        <p> 
          <i className={status == "Online" ? "online" : "offline"}>{status}</i>
          {viewable}
        </p>
    )

  }
}

module.exports = StreamStatus;
