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

    render() {
        return (
            <div className="user">
              <p>Username: {this.state.user.display_name}</p>
              <p>{this.state.user.logo}</p>
              <p>Bio: {this.state.user.bio}</p>
              <Subscription userId={this.state.user._id} />

            </div>
        )

    }
}

module.exports = User;