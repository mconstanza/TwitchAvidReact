import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import Channel from './Channel';

class HistoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        
        if(this.props.user)
            this.props.getHistory();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user && !this.props.user)
            this.props.getHistory();
    }

    channelList = () => {
        if (this.props.history) {
            const channels = this.props.history.map((channel) => {
             return (<li><Channel addStreamToCanvas={this.props.addStreamToCanvas} channel={channel}/></li>);
            })
            return (
                <ul>{channels}</ul>
            )
        }

    }

    render() {

        return (

            <div id="historyListDiv">
                <div className="streamList">
                    {this.props.user ? this.channelList() : <p>You must be connected with Twitch to manage your history</p>}
                </div>
            </div>
        )

    }
}

module.exports = HistoryList;
