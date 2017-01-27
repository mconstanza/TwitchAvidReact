import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import StreamLink from './StreamLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SearchHelpers from '../utils/searchHelpers';

class StreamsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentWillMount = () =>{

        if(this.props.params && this.props.params.query) {
          console.log('this has params')

            if(this.props.params.query == "following" && this.props.user) {
                this.props.getFollowed(this.props.token);
            }

            else {
                this.props.getStreams({type: 'game', query: this.props.params.query});
                console.log('getting streams')
            }
        }
        else {
          console.log('no params; getting streams')
          SearchHelpers.getFeaturedStreams(function(streams){
            this.setState({streams: streams})
          }.bind(this))
        }
    }

    componentWillReceiveProps(nextProps) {
      if(this.props.params && nextProps.params.query != this.props.params.query){

        if(nextProps.params.query == "following") {
            nextProps.getFollowed(nextProps.token);
        }
        else {
            nextProps.getStreams({type: 'game', query: nextProps.params.query});
        }
      }
    }


    streamsList = () => {
      // if the user is searching
        if (this.props.searchStreams.length > 0 && this.props.searching){
          const streams = this.props.searchStreams.map((stream) =>
          <li><StreamLink addStreamToCanvas={this.props.addStreamToCanvas} stream={stream}/></li>);
          return (
              <ul>{streams}</ul>
          )
        }

        else if (this.props.streams.length > 0) {
            const streams = this.props.streams.map((stream) =>
            <li><StreamLink addStreamToCanvas={this.props.addStreamToCanvas} stream={stream}/></li>);
            return (
                <ul>{streams}</ul>
            )
        }
        else if (this.state.streams) {
          console.log('mapping state streams')
          const streams = this.state.streams.map((stream) =>
          <li><StreamLink addStreamToCanvas={this.props.addStreamToCanvas} stream={stream.stream}/></li>);
          return (
              <ul>{streams}</ul>
            )
        }

    }

    render() {

        return (

            <div id="streamListDiv">
                <div className="streamList">
                    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                        {this.streamsList()}
                    </ReactCSSTransitionGroup>
                </div>
            </div>

        )

    }
}

module.exports = StreamsList;
