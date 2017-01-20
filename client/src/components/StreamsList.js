import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import StreamLink from './StreamLink';

class StreamsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldHide: false,
            isToggleOn: true
        };
        this.onClick = this.onClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onClick() {
        console.log("onclick");
        if (!this.state.shouldHide) {
            this.setState({shouldHide: true})
        } else {
            this.setState({shouldHide: false})
        }
        this.handleClick();
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
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
                <button onClick={this.onClick}>{this.state.isToggleOn
                        ? <i className="fa">&#xf102;</i>
                        : <i className="fa">&#xf103;</i>}</button>
                <div className={this.state.shouldHide
                    ? 'hidden'
                    : ''}>
                    <div className="streamList">
                        {this.streamsList()}
                    </div>
                </div>

            </div>
        )

    }
}

module.exports = StreamsList;
