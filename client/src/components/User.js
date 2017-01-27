import React, {Component} from 'react';

import Twitch from '../config/Twitch';
import helpers from '../utils/helpers'

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null
        };

        if(!this.props.user && this.props.token) 
          this.getUserInfo(this.props.token);

    }

    componentWillReceiveProps(nextProps) { // Will not execute on  refresh (when unmounted)
      if(!nextProps.user && nextProps.token)
        this.getUserInfo(nextProps.token);
    }

    getUserInfo(token) {
      helpers.getUserTwitchAPI(token, function(user) {
        helpers.getLocalUser({name: user.name}, function(user) {
          console.log(user);
        })
        this.props.setCurrentUser(user);
      }.bind(this));

    }

    userLogged() {
      if(this.props.user) {
        return (
        <div>
          <p >Welcome, {this.props.user.display_name}!</p>
          {/*<img src={this.props.user.logo}/>
                    <p>Bio: {this.props.user.bio}</p>*/}
        </div>)
      } else {
        return(<p>Not Logged In</p>)
      }
    }

    render() {
        return (
            <div className="user">
              <div>{this.userLogged()}</div>
            </div>
        )

    }
}

module.exports = User;