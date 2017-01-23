import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import Channel from './Channel';

class HistoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.props.getHistory();
    }


    channelList = () => {
        if (this.props.history) {
            const channels = this.props.history.map((channel) =>
            <li><Channel addStreamToCanvas={this.props.addStreamToCanvas}/></li>);
            return (
                <ul>{channels}</ul>
            )
        }

    }

    render() {

        return (

            <div id="historyListDiv">
                <div className="streamList">
                    {this.channelList()}
                </div>
            </div>
        )

    }
}

module.exports = ChannelList;
