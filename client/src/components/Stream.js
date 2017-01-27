import React, {Component} from 'react';
import Overlay from './Overlay';
import Overlay2 from './Overlay2';
import helpers from '../utils/helpers';

class Stream extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isFollowing: false
        };

      if(this.props.user && this.props.user.name && this.props.token) {
        helpers.checkFollowStatus(this.props.token, this.props.user.name, this.props.channel, function(response) {
          if(response.channel)
            this.setState({isFollowing: true})
        }.bind(this))
      }
    }

    followHandler = (isFollowing, token, user, channel) => {
      if(isFollowing) {
        helpers.unfollowChannel(token, user, channel, function(response) {
          console.log(response);
          if(response.ok && response.status == 204)
            this.setState({isFollowing: false})
        }.bind(this))
      }
      else {
        helpers.followChannel(token, user, channel, function(response) {
          if(response.channel)
            this.setState({isFollowing: true})
        }.bind(this))
      }
    }

    render() {

      var url = "https://player.twitch.tv/?channel=" + this.props.channel
      var shouldMute = false;
      console.log(this.props.streamsize);
      if (this.props.streamSize){
      return (
        <div className={"streamContainer"}>
          <Overlay2 showChat={this.props.showChat} user={this.props.user} token={this.props.token} followHandler={this.followHandler} isFollowing={this.state.isFollowing} streamId={this.props.stream._id} stream={this.props.stream} removeStream={this.props.removeStream} selected={this.props.selected} position={this.props.position} setChatChannel={this.props.setChatChannel}/>
            <div className="playingStream" key={this.props.stream._id} id={this.props.stream._id}>
              <iframe
                src={url}
                frameBorder="0"
                scrolling="no"
                allowFullScreen="true"
                muted ={shouldMute}>
              </iframe>
          </div>
        </div>
      )
    }else{
      return(
         <div className={"streamContainer"}>
          <Overlay showChat={this.props.showChat} user={this.props.user} token={this.props.token} followHandler={this.followHandler} isFollowing={this.state.isFollowing} streamId={this.props.stream._id} stream={this.props.stream} removeStream={this.props.removeStream} selected={this.props.selected} position={this.props.position} setChatChannel={this.props.setChatChannel}/>
            <div className="playingStream" key={this.props.stream._id} id={this.props.stream._id}>
              <iframe
                src={url}
                frameBorder="0"
                scrolling="no"
                allowFullScreen="true"
                muted ={shouldMute}>
              </iframe>
          </div>
        </div>
      )
    }
  }
}
module.exports = Stream;
