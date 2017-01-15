import React, {Component} from 'react';
import {Link} from 'react-router';
import {Menu, MenuItem} from 'react-foundation';


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
             <Menu>
              <MenuItem onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
              <MenuItem onClick={()=>this.activeNavTabHandler("games")} isActive><Link to="/games">Games</Link></MenuItem>
              <MenuItem onClick={()=>this.activeNavTabHandler("favorites")}><a>Favorites</a></MenuItem>
            </Menu>
        )
      } else if (this.props.isActive == "home"){
        return (
          <Menu>
            <MenuItem onClick={()=>this.activeNavTabHandler("home")} isActive><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("favorites")}><a>Favorites</a></MenuItem>
          </Menu>
        )
      } else if (this.props.isActive == "favorites"){
        return (
          <Menu>
            <MenuItem onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("favorites")} isActive><a>Favorites</a></MenuItem>
          </Menu>
        )
      }
    }
    render() {
        return (
          <div className="Navbar">
             {this.activeNavTab()}
        </div>
      )
    }
  }
module.exports = Navbar;
