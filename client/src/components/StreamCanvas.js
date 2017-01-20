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
        const streams = this.props.streams.map((stream) =>
        // <li className="streamLi">
          <Stream key={stream._id} stream={stream} channel={stream.channel.name} video={stream._id} removeStream={this.props.removeStream}/>
        // {/* </li> */}
    )
    // return <ul>{streams}</ul>
    return streams
  }

  render() {

    return (
      <div className="streamCanvas">
       <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {this.props.streams &&
          this.displayStreams()
        }
        </ReactCSSTransitionGroup>
      </div>)

        }
    }

    module.exports = StreamCanvas;
