import React, {Component} from 'react';

import Twitch from '../config/Twitch';
import Subscription from './Subscription';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getUserInfo() {
      var token = (OAuth toaken from user login);
      fetch('https://api.twitch.tv/kraken/user', {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': Twitch.clientID,
          'Authorization': OAuth + token
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({user: json})
      })
    }

    componentWillMount() {
      this.getUserInfo();
    }

    userLogged() {
      if(this.state.user) {
        return (
          <p>Username: {this.state.user.display_name}</p>
          <img src={this.state.user.logo}/>
          <p>Bio: {this.state.user.bio}</p>)
      } else {
        return(<p>Not Logged In</p>)
      }
    }

    render() {
        return (
            <div className="user">
              <div>{this.userLogged()}</div>
              <Subscription userId={this.state.user._id} />
            </div>
        )

    }
}

module.exports = User;