import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import StreamLink from './StreamLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class StreamsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        if(this.props.params){

        if(this.props.params.query == "following") {
            console.log("Goto Following")
            this.props.getFollowed(this.props.token);
        }
        else {
            console.log("Goto Stream")
            this.props.getStreams({type: 'game', query: this.props.params.query});
        }

      }
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.params.query != this.props.params.query){

        if(nextProps.params.query == "following") {
            console.log("Goto Following")
            nextProps.getFollowed(nextProps.token);
        }
        else {
            console.log("Goto Stream")
            nextProps.getStreams({type: 'game', query: nextProps.params.query});
        }

      }
    }


    streamsList = () => {

        if (this.props.streams) {
            const streams = this.props.streams.map((stream) =>
            <li><StreamLink addStreamToCanvas={this.props.addStreamToCanvas} stream={stream}/></li>);
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
