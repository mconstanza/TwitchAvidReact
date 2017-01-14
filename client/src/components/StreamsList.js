import React, { Component } from 'react';
import Twitch from '../config/Twitch';
import StreamLink from './StreamLink';

class StreamsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getGameStreams() {
    var game = this.props.params.query;
    fetch('https://api.twitch.tv/kraken/streams/?game=' + game, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': Twitch.clientID
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.streams);
      this.setState({streams: json.streams })
    })
  }

  componentWillMount() {
    this.getGameStreams();
  }

  streamsList = () => {
      if (this.state.streams) {
          const streams = this.state.streams.map((stream) =>
            <li><StreamLink addStreamToCanvas={this.props.addStreamToCanvas} key={stream.channel._id} stream={stream}/></li>
        );
        return (<ul>{streams}</ul>)
      }

  }

  render() {

    return (
      <div className="streamList">
        {this.streamsList()}

      </div>
    )

  }
}

module.exports = StreamsList;
