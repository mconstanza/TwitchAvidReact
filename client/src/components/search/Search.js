import React, {Component} from 'react';
import Link from 'react-router';
import SearchHelpers from '../../utils/searchHelpers';
import { browserHistory } from 'react-router';


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

    render() {

        return (
            <div className="searchBar">
                <input onChange={this.searchHandler} id="sInput" placeholder="Find me streams!" value={this.props.query}/>
            </div>
        )
    }
}

module.exports = Search;
