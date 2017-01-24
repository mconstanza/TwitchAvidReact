import React, {Component} from 'react';
import {Button, Sizes, ButtonGroup } from 'react-foundation';


import SearchHelpers from '../../utils/searchHelpers';


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

                <input onFocus={()=> this.props.setSearchFocus(true)} onBlur={()=>this.props.setSearchFocus(false)} onChange={this.searchHandler} id="sInput" placeholder="Find me streams!" value={this.props.query}/>

            </div>
        )

    }
}

module.exports = Search;
