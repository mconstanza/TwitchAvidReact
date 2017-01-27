import React, {Component} from 'react';
import Link from 'react-router';
import SearchHelpers from '../../utils/searchHelpers';
import { browserHistory } from 'react-router';

import {Button} from 'react-foundation';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }

    searchHandler = (event) => {
      var query = event.target.value;
      this.props.setSearchQuery(query);
    }

    clickHandler = () => {
      this.props.setSearchQuery("")
    }

    render() {

        return (
            <div id="searchDiv">
                <input id="searchBar" onChange={this.searchHandler} id="sInput" placeholder="Find me streams!" value={this.props.query}/>
                <button id="searchClearButton" onClick={this.clickHandler}>Clear</button>
            </div>

        )
    }
}

module.exports = Search;
