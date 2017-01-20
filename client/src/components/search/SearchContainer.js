import React, {Component} from 'react';
import Twitch from '../../config/Twitch';
import StreamsList from '../StreamsList';
import GameList from '../GameList';

import SearchHelpers from '../../utils/searchHelpers';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
      }

    style = {
      width: '90%',
      position: 'absolute',
      top: '0px',
      left: '210px',
      backgroundColor: 'white',
      zIndex: '1001'
    }

    render() {
      if(this.props.games || this.props.streams || this.props.channels){
        return (
          <div id="searchContainer" style={this.style}>
            <StreamsList addStreamToCanvas= {this.props.addStreamToCanvas} streams={this.props.streams}/>
            <GameList games={this.props.games}/>
          </div>
        )
      }
      else {
        return (
          <div style={this.style}>

          </div>
        )
      }
    }
}

module.exports = SearchContainer;
