import React, {Component} from 'react';
import Overlay from './Overlay'
class Stream extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

      var url = "http://player.twitch.tv/?channel=" + this.props.channel
      return (
        <div className={"streamContainer"}>
          <Overlay streamId={this.props.stream._id} stream={this.props.stream} removeStream={this.props.removeStream} selected={this.props.selected} position={this.props.position} setChatChannel={this.props.setChatChannel}/>
            <div className="playingStream" key={this.props.stream._id} id={this.props.stream._id}>
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
