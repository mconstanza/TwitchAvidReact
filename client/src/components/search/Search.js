import React, {Component} from 'react';
import {Button, Sizes } from 'react-foundation';

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

      SearchHelpers.searchStreams(this.state.searchTerm, 5, function(streams){
        console.log('Streams: ', streams)
        this.props.setSearchStreams(streams)
      }.bind(this));

    }

    render() {
        return (
            <div className="searchBar">
                <input onChange={this.searchHandler} placeholder="Find me streams!" value={this.state.searchTerm}/>
              <Button size={Sizes.TINY} className="searchform" id="searchButton">Search</Button>
            </div>
        )

    }
}

module.exports = Search;
