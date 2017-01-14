import React, {Component} from 'react';

import {FlexVideo} from 'react-foundation';

class Stream extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
      var url = "http://player.twitch.tv/?channel=" + this.props.channel
        return (
          <div className="streamContainer">
            <div className="playingStream" key={this.props.stream._id} id={this.props.stream._id} isWidescreen>
              <iframe
                src={url}
                frameBorder="0"
                scrolling="no"
                allowFullScreen="true">
              </iframe>
          </div>
        </div>
      )
    }
  }
module.exports = Stream;
