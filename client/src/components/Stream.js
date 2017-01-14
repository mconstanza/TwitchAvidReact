import React, {Component} from 'react';
// import Script from 'react-load-script'
// import Twitch from '../config/Twitch';

// import TwitchStreams from '../config/TwitchStreams';

// var twitchStreams = require('twitch-get-stream')(Twitch.clientID)

class Stream extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
      this.getVideoLinks();
    }

    getVideoLinks = () => {
    //   TwitchStreams.get(this.props.channel, Twitch.clientID)
    //   .then(function(streams){
    //     console.log(streams)
    //     this.setState({videoURL: streams[0].url})
    //   })
    fetch('/'+ this.props.channel+ '/streams')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({videoURL: json.best})
    })

    }

    render() {
      // if (this.state.videoURL){
        return (
          <div id={this.props.stream._id}>
            <video src={this.state.videoURL} ></video>
          </div>
      )
    // }

    }
  }
module.exports = Stream;
