import React, {Component} from 'react';
import Twitch from '../config/Twitch';
import {Button} from 'react-foundation';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ""
        };
      }

    searchHandler = (event) => {
      this.setState({searchTerm: event.target.value});
      this.props.setSearchQuery(event.target.value);
    }

    render() {
        return (
            <div>
              <form ref="form">
                <input onChange={this.searchHandler} name="search" placeholder="Find me streams!" value={this.state.searchTerm}/>
              </form>
              <Button id="searchButton">Search</Button>

            </div>
        )

    }
}

module.exports = Search;
