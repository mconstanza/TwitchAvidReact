import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import StreamLink from './StreamLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class StreamsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    componentWillMount() {
      if (this.props.params){
        this.props.getStreams({type: 'game', query: this.props.params.query});
      }

    }

    componentDidUpdate() {

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
                        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                            {this.streamsList()}
                        </ReactCSSTransitionGroup>
                    </div>
            </div>
        )

    }
}

module.exports = StreamsList;
