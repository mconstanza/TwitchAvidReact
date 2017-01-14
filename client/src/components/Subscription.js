import React, { Component } from 'react';

import Twitch from '../config/Twitch';
import Follow from './Follow';

class Subscription extends Component {

  constructor(props) {
        super(props);
        this.state = {
        };
    }

    getSubscriptions()) {
      var id = this.props.userId;
      fetch('https://api.twitch.tv/kraken/users/' + id + '/follows/channels&limit=10', {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': Twitch.clientID
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log(json.follows);
        this.setState({follows: json.follows})
      })
    }

    followsList = () => {
        if (this.state.follows) {
            const follows = this.state.follows.map((follow) =>
              <li><Follow key={follow.channel._id} follow={follow}/></li>
          );
          return (<ul>{follows}</ul>)
        }

    }

    componentWillMount() {
      this.getSubscriptions();
    }

    render() {
        return (
            <div className="subscription">
              {this.followsList()}

            </div>
        )

    }
}

module.exports = Subscription;