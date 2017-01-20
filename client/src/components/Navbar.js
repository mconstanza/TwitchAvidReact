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
        };
    }
    activeNavTabHandler = (page) => {
      this.props.setActivePage(page);
    }

    style = {
      maxWidth: '20%'
    }

    activeNavTab = () => {
      if (this.props.isActive == "games"){
        return (
          <ul style={this.style} className="side-nav">
            <MenuText>Twitch Avid</MenuText>
        
            <Search setSearchStreams={this.props.setSearchStreams}
            setSearchChannels={this.props.setSearchChannels}
            setSearchGames={this.props.setSearchGames}
            setSearchQuery={this.props.setSearchQuery}
          query={this.props.query}/>
            <li onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></li>
            <li onClick={()=>this.activeNavTabHandler("games")} isActive><Link to="/games">Games</Link></li>
            <li onClick={()=>this.activeNavTabHandler("favorites")}><a>Favorites</a></li>
            {/*<form method="POST" action="/authorize"><button type="submit">Connect with Twitch</button></form>*/}
            {/*IC*/}
            <form method="POST" action="/authorize"><button type="submit">{this.props.token ? 'Sign Out' : 'Connect with Twitch'}</button></form>
            <User user={this.props.user} token= {this.props.token}/>
        </ul>
        )
      } else if (this.props.isActive == "home"){
        return (
          <ul className="side-nav" style={this.style} >
            <MenuText>Twitch Avid</MenuText>
            <Search setSearchStreams={this.props.setSearchStreams}
            setSearchChannels={this.props.setSearchChannels}
            setSearchGames={this.props.setSearchGames}
            setSearchQuery={this.props.setSearchQuery}
          query={this.props.query}/>
            <li onClick={()=>this.activeNavTabHandler("home")} isActive><Link to="/">Home</Link></li>
            <li onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></li>
            <li onClick={()=>this.activeNavTabHandler("favorites")}><a>Favorites</a></li>
            {/*<form method="POST" action="/authorize"><button type="submit">Connect with Twitch</button></form>*/}
            {/*IC*/}
            <form method="POST" action="/authorize"><button type="submit">{this.props.token ? 'Sign Out' : 'Connect with Twitch'}</button></form>
            <User user={this.props.user} token= {this.props.token}/>

        </ul>
        )
      } else if (this.props.isActive == "favorites"){
        return (
          <ul className="side-nav" style={this.style} >
            <MenuText>Twitch Avid</MenuText>
            <Search setSearchStreams={this.props.setSearchStreams}
            setSearchChannels={this.props.setSearchChannels}
            setSearchGames={this.props.setSearchGames}
            setSearchQuery={this.props.setSearchQuery}
          query={this.props.query}/>
            <li onClick={()=>this.activeNavTabHandler("home")}><Link to="/">Home</Link></li>
            <li onClick={()=>this.activeNavTabHandler("games")}><Link to="/games">Games</Link></li>
            <li onClick={()=>this.activeNavTabHandler("favorites")} isActive><a>Favorites</a></li>
            {/*<form method="POST" action="/authorize"><button type="submit">Connect with Twitch</button></form>*/}
            {/*IC*/}
            <form method="POST" action="/authorize"><button type="submit">{this.props.token ? 'Sign Out' : 'Connect with Twitch'}</button></form>
            <User user={this.props.user} token= {this.props.token}/>

        </ul>
        )
      }
    }
    render() {
        return (
          <div className="side-nav">
             {this.activeNavTab()}
           </div>
      )
    }
  }
module.exports = Navbar;
