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

          {
            let smallStream = false;
            if (index > 0){
              smallStream = true;
            }
          // <li className="streamLi">
          return <Stream showChat={this.props.showChat} streamSize={smallStream} user={this.props.user} token={this.props.token} selected={this.props.selected} position={index} key={stream._id} stream={stream} channel={stream.channel.name} video={stream._id} removeStream={this.props.removeStream} setChatChannel={this.props.setChatChannel}/>
          // {/* </li> */}
          }
        )

    return streams
  }



  render() {
    var streams = this.displayStreams();
    var view = streams.length > 1 ? "mainStream": "oneStream";

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
        <div className={view}>{main}</div>
        <div className="otherStreams">{others}</div>
      </ReactCSSTransitionGroup>
      </div>
      )


  }
}

module.exports = StreamCanvas;
