import React, {Component} from 'react';
import Twitch from '../../config/Twitch';
import {Button} from 'react-foundation';

import SearchHelpers from '../../utils/searchHelpers';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ""
        };
      }

    searchHandler = (event) => {
      this.setState({searchTerm: event.target.value});

      SearchHelpers.searchGames(this.state.searchTerm, function(games){
        console.log('Games: ', games)
        this.props.setSearchGames(games)
      }.bind(this));

      SearchHelpers.searchChannels(this.state.searchTerm, function(channels){
        this.props.setSearchChannels(channels)
      }.bind(this));

      SearchHelpers.searchStreams(this.state.searchTerm, function(streams){
        console.log('Streams: ', streams)
        this.props.setSearchStreams(streams)
      }.bind(this));

    }

    render() {
        return (
            <div className="searchBar">
              <form className="searchform" ref="form">
                <input onChange={this.searchHandler} name="search" placeholder="Find me streams!" value={this.state.searchTerm}/>
              </form>
              <Button className="searchform" id="searchButton">Search</Button>
            </div>
        )

    }
}

module.exports = Search;
