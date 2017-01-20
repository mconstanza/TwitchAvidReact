import React, {Component} from 'react';
import {Link} from 'react-router';
import {Menu, MenuItem, MenuText} from 'react-foundation';
import Search from './search/Search';
import User from './User';

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
    // toggleConnect(){
    //   if(this.props.token){
    //     this.setState({isToggleOn: true});
    //   } else {
    //     this.setState({isToggleOn: false});
    //   }
    // }
    activeNavTab = () => {
      if (this.props.isActive == "games"){
        return (
          <Menu className="mainNav">
            <MenuText>Twitch Avid</MenuText>
            <MenuItem onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("games")} isActive><Link to="/games">Games</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("favorites")}><a>Favorites</a></MenuItem>
            {/*<form method="POST" action="/authorize"><button type="submit">Connect with Twitch</button></form>*/}
            {/*IC*/}
            <form method="POST" action="/authorize"><button type="submit">{this.props.token ? 'Sign Out' : 'Connect with Twitch'}</button></form>
            <User user={this.props.user} token= {this.props.token}/>
            <Search setSearchStreams={this.props.setSearchStreams}
            setSearchChannels={this.props.setSearchChannels}
            setSearchGames={this.props.setSearchGames}
            setSearchQuery={this.props.setSearchQuery}
          query={this.props.query}/>
          </Menu>
        )
      } else if (this.props.isActive == "home"){
        return (
          <Menu className="mainNav">
            <MenuText>Twitch Avid</MenuText>
            <MenuItem onClick={()=>this.activeNavTabHandler("home")} isActive><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("favorites")}><a>Favorites</a></MenuItem>
            {/*<form method="POST" action="/authorize"><button type="submit">Connect with Twitch</button></form>*/}
            {/*IC*/}
            <form method="POST" action="/authorize"><button type="submit">{this.props.token ? 'Sign Out' : 'Connect with Twitch'}</button></form>
            <User user={this.props.user} token= {this.props.token}/>
            <Search setSearchStreams={this.props.setSearchStreams}
            setSearchChannels={this.props.setSearchChannels}
            setSearchGames={this.props.setSearchGames}
            setSearchQuery={this.props.setSearchQuery}
          query={this.props.query}/>
          </Menu>
        )
      } else if (this.props.isActive == "favorites"){
        return (
          <Menu className="mainNav">
            <MenuText>Twitch Avid</MenuText>
            <MenuItem onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></MenuItem>
            <MenuItem onClick={()=>this.activeNavTabHandler("favorites")} isActive><a>Favorites</a></MenuItem>
            {/*<form method="POST" action="/authorize"><button type="submit">Connect with Twitch</button></form>*/}
            {/*IC*/}
            <form method="POST" action="/authorize"><button type="submit">{this.props.token ? 'Sign Out' : 'Connect with Twitch'}</button></form>
            <User user={this.props.user} token= {this.props.token}/>
            <Search setSearchStreams={this.props.setSearchStreams}
            setSearchChannels={this.props.setSearchChannels}
            setSearchGames={this.props.setSearchGames}
            setSearchQuery={this.props.setSearchQuery}
          query={this.props.query}/>
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
