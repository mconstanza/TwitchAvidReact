import Twitch from '../config/Twitch';

var helpers = {
  buildQuery: function(headers) {
    let header = [];

    for(let key in headers) {
       header.push(key + '=' + headers[key]); 
    }

    return header.join('&');
  },

  getToken: function(params, callback) {
    return function() {
      fetch("https://api.twitch.tv/kraken/oauth2/token?" + params, {
        method: "POST"
      })
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
    }
  }

  getTwitchUser: function(accessToken, callback) {
    return function() {
      
    }
  }

}

module.exports = helpers;