import React, { Component } from 'react';
import {Button} from 'react-foundation'

class Overlay extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className="Overlay">
        <Button onClick={()=>this.props.removeStream(this.props.streamId)}>Delete</Button>
      </div>
    )

  }
}

module.exports = Overlay;
