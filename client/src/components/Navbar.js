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
          <div className="linkList">
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("home")} isActive><Link to="/">Home</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("favorites")}><Link to="/streams/following">Following</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("history")}><Link to="/history">History</Link></MenuItem>
        </div>
        )
      }
      else if (this.props.isActive == "games"){
        return (
          <div className="linkList">
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("games")} isActive><Link to="/games">Games</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("favorites")} ><Link to="/streams/following">Following</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("history")}><Link to="/history">History</Link></MenuItem>
        </div>
        )
      }
      else if (this.props.isActive == "favorites"){
        return (
          <div className="linkList">
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("favorites")} isActive><Link to="/streams/following">Following</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("history")}><Link to="/history">History</Link></MenuItem>
        </div>
        )
      }
      else if (this.props.isActive == "history"){
        return (
          <div className="linkList">
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("favorites")}><Link to="/streams/following">Following</Link></MenuItem>
          <MenuItem className= "glow" onClick={()=>this.activeNavTabHandler("history")} isActive><Link to="/history">History</Link></MenuItem>
        </div>
        )
      }
    }

    render() {
        var TAVreal = '/TAVreal.png';
        return (
          <div className="side-nav">
            <ul style={this.style}>

              <MenuText id="navLogo">Twitch Avid <img id="navLogoImg" src={TAVreal}/> </MenuText>
              <User setCurrentUser={this.props.setCurrentUser} user={this.props.user} token= {this.props.token}/>
              <Button id="connectTwitchBtn" size={Sizes.SMALL} onClick={!this.props.token ? Helpers.authorize : Helpers.logout}>{this.props.token ? 'Sign Out' : 'Connect with Twitch'}</Button>

              <Search setSearchStreams={this.props.setSearchStreams}
                setSearchGames={this.props.setSearchGames}
                setSearchQuery={this.props.setSearchQuery}
                setSearchFocus={this.props.setSearchFocus}
                removeSearchFocus={this.props.removeSearchFocus}
                query={this.props.query}
                toggleSearching={this.props.toggleSearching}/>

              {this.activeNavTab()}

          </ul>
           </div>

      )
    }
  }
module.exports = Navbar;
