import React, {Component} from 'react';

class Stream extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
      var url = "http://player.twitch.tv/?channel=" + this.props.channel
        return (
          <div id={this.props.stream._id}>
            <iframe
              src={url}
              height="300px"
              width='100%'
              frameborder="0"
              scrolling="no"
              allowfullscreen="true">
            </iframe>
          </div>
      )
    }
  }
module.exports = Stream;
