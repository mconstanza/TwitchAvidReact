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
      fetch("https://api.twitch.tv/kraken/oauth2/token?" + params, {
        method: "POST"
      })
      .then((response) => response.json())
      .then((data) => {
        callback(data)
      })
  },

  getUserTwitchAPI: function(accessToken, callback) {
    return function() {
      fetch("https://api.twitch.tv/kraken/user", {
	    method: "GET",
	    headers: {
	      "Client-ID": Twitch.clientID,
	      "Authorization": "OAuth " + accessToken
	    }
	  })
	  .then(response => response.json())
	  .then((user) => {
      	callback(user);
      })
  	}
  },

  getLocalUser: function(user, callback) {
  	return function() {
  	  var params = new URLSearchParams();
      params.append('username', user.name);
      params.append('email', user.email);
      fetch('/user', {
        method: "POST",
        body: params
      })
      .then((response) => response.json())
      .then((user) => {	
  	  	callback(user);
  	  })
 	}
  }
}  

module.exports = helpers;