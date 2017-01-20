import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import StreamLink from './StreamLink';

class ChannelList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    channelList = () => {
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

            <div id="channelListDiv">
                <div className="streamList">
                    {this.streamsList()}
                </div>
            </div>
        )

    }
}

module.exports = ChannelList;
