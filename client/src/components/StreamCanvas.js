import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 

import Stream from './Stream';

// import TwitchVideoEmbed from './TwitchVideoEmbed';

class StreamCanvas extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    displayStreams = () => {
        const streams = this.props.streams.map((stream, index) =>
        // <li className="streamLi">
          <Stream selected={this.props.selected} position={index} key={stream._id} stream={stream} channel={stream.channel.name} video={stream._id} removeStream={this.props.removeStream}/>
        // {/* </li> */}
        )
    // return <ul>{streams}</ul>
    return streams
  }



  render() {
    var streams = this.displayStreams();
    var main = streams.shift();
    var others = streams;

        // {this.props.streams &&
        //   this.displayStreams()
        // }
    return (
      <div className="streamCanvas">
       <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        <div className="mainStream">{main}</div>
        <div className="otherStreams">{others}</div> 
      </ReactCSSTransitionGroup>
      </div>
      )


  }
}

module.exports = StreamCanvas;
