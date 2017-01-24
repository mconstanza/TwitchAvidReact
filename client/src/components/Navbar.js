import React, {Component} from 'react';
import {Link} from 'react-router';
import {Menu, MenuItem, MenuText, Button, Sizes} from 'react-foundation';
import Search from './search/Search';
import ToggleButton from './ToggleButton';
import User from './User';

import Helpers from '../utils/helpers';
import SearchHelpers from '../utils/searchHelpers';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null,
          // isToggleOn: false
        };
    }
    activeNavTabHandler = (page) => {
      this.props.setActivePage(page);
    }

    activeNavTab = () => {
      if (this.props.isActive == "home"){
        return (
          <div>
          <MenuItem onClick={()=>this.activeNavTabHandler("home")} isActive><Link to="/">Home</Link></MenuItem>
          <MenuItem onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
          <MenuItem onClick={()=>this.activeNavTabHandler("favorites")}><a>Favorites</a></MenuItem>
        </div>
        )
      }
      else if (this.props.isActive == "games"){
        return (
          <div>
          <MenuItem onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
          <MenuItem onClick={()=>this.activeNavTabHandler("games")} isActive><Link to="/games">Games</Link></MenuItem>
          <MenuItem onClick={()=>this.activeNavTabHandler("favorites")} ><a>Favorites</a></MenuItem>
        </div>
        )
      }
      else if (this.props.isActive == "favorites"){
        return (
          <div>
          <MenuItem onClick={()=>this.activeNavTabHandler("home")} isActive><Link to="/">Home</Link></MenuItem>
          <MenuItem onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
          <MenuItem onClick={()=>this.activeNavTabHandler("favorites")} isActive><a>Favorites</a></MenuItem>
        </div>
        )
      }
    }

    render() {
        return (
          <div className="side-nav">
            <ul style={this.style}>

              <MenuText id="navLogo">Twitch Avid</MenuText>
              <User user={this.props.user} token= {this.props.token}/>
              <Button id="connectTwitchBtn" size={Sizes.SMALL} onClick={!this.props.token ? Helpers.authorize : Helpers.logout}>{this.props.token ? 'Sign Out' : 'Connect with Twitch'}</Button>

              <Search setSearchStreams={this.props.setSearchStreams}
                setSearchGames={this.props.setSearchGames}
                setSearchQuery={this.props.setSearchQuery}
                setSearchFocus={this.props.setSearchFocus}
                query={this.props.query}
                toggleSearching={this.props.toggleSearching}/>

              {this.activeNavTab()}

          </ul>
           </div>

      )
    }
  }
module.exports = Navbar;
