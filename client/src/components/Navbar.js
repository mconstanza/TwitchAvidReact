import React, {Component} from 'react';
import {Link} from 'react-router';
import {Menu, MenuItem, MenuText} from 'react-foundation';
import Search from './Search';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    activeNavTabHandler = (page) => {
      this.props.setActivePage(page);
    }
    activeNavTab = () => {
      if (this.props.isActive == "games"){
        return (
          <Menu className="mainNav">
            <MenuText>Twitch Avid</MenuText>
            <MenuItem onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("games")} isActive><Link to="/games">Games</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("favorites")}><a>Favorites</a></MenuItem>
            <form method="POST" action="/authorize"><button type="submit">Connect with <span style="color=#6441a4;"> Twitch</span></button></form>
          </Menu>
        )
      } else if (this.props.isActive == "home"){
        return (
          <Menu className="mainNav">
            <MenuText>Twitch Avid</MenuText>
            <MenuItem onClick={()=>this.activeNavTabHandler("home")} isActive><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("favorites")}><a>Favorites</a></MenuItem>
            <form method="POST" action="/authorize"><button type="submit">Connect with Twitch</button></form>
          </Menu>
        )
      } else if (this.props.isActive == "favorites"){
        return (
          <Menu className="mainNav">
            <MenuText>Twitch Avid</MenuText>
            <MenuItem onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("favorites")} isActive><a>Favorites</a></MenuItem>
            <form method="POST" action="/authorize"><button type="submit">Connect with Twitch</button></form>
          </Menu>
        )
      }
    }
    render() {
        return (
          <div className="Navbar">
             {this.activeNavTab()}
             <Search setSearchQuery={this.props.setSearchQuery}/>
        </div>
      )
    }
  }
module.exports = Navbar;
