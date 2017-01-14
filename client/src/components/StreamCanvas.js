import React, {Component} from 'react';

import Stream from './Stream';

// import TwitchVideoEmbed from './TwitchVideoEmbed';

class StreamCanvas extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    displayStreams = () => {
        const streams = this.props.streams.map((stream) =>
        <li>
          <Stream key={stream._id} stream={stream} channel={stream.channel.name} video={stream._id}/>
        </li>
    )
    return <ul>{streams}</ul>
  }

  render() {

    return (
      <div className="streamCanvas">
        {this.props.streams &&
          this.displayStreams()
        }
      </div>)

        }
    }

    module.exports = StreamCanvas;
