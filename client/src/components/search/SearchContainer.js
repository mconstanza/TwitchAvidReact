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

    containerStyle = {

      width: '75%',
      maxHeight: '75%',
      position: 'absolute',
      top: '0px',
      left: '255px',
      backgroundColor: 'white',
      zIndex: '1001',
      overflow: 'hidden',
      border: 'solid 3px #1b0028',
      borderRadius: '10px'
    }

    topPanelStyle = {

    }

    render() {
      if(this.props.games || this.props.streams){
        return (
          <div id="searchContainer" style={this.containerStyle}>
            <div id="searchContainerTopPanel" style={this.topPanelStyle}/>
            <StreamsList addStreamToCanvas= {this.props.addStreamToCanvas} streams={this.props.streams}/>
          </div>
        )
      }
    }
}

module.exports = SearchContainer;
