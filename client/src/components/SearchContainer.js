import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import StreamsList from './StreamsList';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div>
              {this.props.query &&
                <StreamsList query={this.props.query}/>
              }
            </div>
        )

    }
}

module.exports = SearchContainer;
