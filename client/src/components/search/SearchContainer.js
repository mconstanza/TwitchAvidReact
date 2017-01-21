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

//       width: '80%',
//       position: 'absolute',
//       top: '0px',
//       left: '215px',
//       marginRight:'40px',

      width: '75%',
      maxHeight: '75%',
      position: 'absolute',
      top: '0px',
      left: '255px',

      backgroundColor: 'white',
      zIndex: '1001',
      overflow: 'hidden'
    }

    render() {
      if(this.props.games || this.props.streams || this.props.channels){
        return (
          <div id="searchContainer" style={this.style}>
            <StreamsList addStreamToCanvas= {this.props.addStreamToCanvas} streams={this.props.streams}/>
            <GameList limit={8} games={this.props.games}/>
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
