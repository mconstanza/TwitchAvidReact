import React, {Component} from 'react';
import Overlay from './Overlay'
class Stream extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: false
        };
    }

    selectedHandler(position) {
      this.setState({selected: true});
    }


    render() {
      var selected = this.props.position ? "otherStreams" : "mainStream";

      var url = "http://player.twitch.tv/?channel=" + this.props.channel
        return (
          <div className={"streamContainer" + " " + selected}>
          <Overlay streamId={this.props.stream._id} removeStream={this.props.removeStream} selected={this.props.selected} position={this.props.position}/>
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
