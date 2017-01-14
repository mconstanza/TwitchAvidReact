import React, {Component} from 'react';

import Twitch from '../config/Twitch';
import OtherUser from './OtherUser';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getUserInfo() {
      var userName = (user name from form?);
      fetch('https://api.twitch.tv/kraken/users/' + userName, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': Twitch.clientID
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({otherUser: json})
      })
    }

    componentWillMount() {
      this.getUserInfo();
    }

    userProfile() {
      if(this.state.otherUser) {
        const userList = this.state.otherUser.map((otherUser) =>
          <li>OtherUser key={otherUser._id} otherUser={otherUser}</li>
          );
        return (<ul>{userList}</ul>)
      } else {
        return(<p>User Not Found</p>)
      }
    }

    render() {
        return (
            <div className="otherUserList">
              <div>{this.userProfile()}</div>
            </div>
        )

    }
}

module.exports = UsersList;