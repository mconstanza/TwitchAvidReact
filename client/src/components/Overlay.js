import React, { Component } from 'react';
import {Button} from 'react-foundation'

class Overlay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity_back: 0,
      opacity_buttons: 0
    };
  }

  onMouseEnter() {
    this.setState({opacity_back: 0.6, opacity_buttons: 1.0});
  }

  onMouseLeave() {
    this.setState({opacity_back: 0, opacity_buttons: 0})
  }

  render() {
    let background = {
      backgroundColor: "black",
      opacity: this.state.opacity_back,
      transition: "opacity 700ms",
      height: "65px",
      width: "65px",
      zIndex: 1,
      position: "absolute",
      top: "0px",
      right: "0px",
      borderRadius: "50%"
    }

    let buttons = {
      opacity: this.state.opacity_buttons,
      transition: "opacity 500ms",
      backgroundColor: "transparent",
      fontSize: "28px",
      paddingRight: "0px",
      paddingLeft: "0px"
    }

    return (
      <div className="Overlay" style={background} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
        <Button className="streamDelete" style={buttons} onClick={()=>this.props.removeStream(this.props.streamId)}>X</Button>
      </div>
    )

  }
}

module.exports = Overlay;
