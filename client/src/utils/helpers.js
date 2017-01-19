import Twitch from '../config/Twitch';

var helpers = {

  buildQuery: function(headers) {
    let header = [];

    for(let key in headers) {
       header.push(key + '=' + headers[key]); 
    }

    return header.join('&');
  },

  getToken: function(code, callback) {
    var headers = {
      client_id: Twitch.clientID,
      client_secret: Twitch.secret,
      redirect_uri: "http://localhost:3000",
      grant_type: "authorization_code",
      code: code
    };

    var params = helpers.buildQuery(headers);  

    fetch("https://api.twitch.tv/kraken/oauth2/token?" + params, {
      method: "POST"
    })
    .then((response) => response.json())
    .then((data) => {
      callback(data)
    })
  },

  getUserTwitchAPI: function(accessToken, callback) {
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
  },

  getLocalUser: function(user, callback) {
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
  },

  getHistory: function(username, callback) {
    fetch('/' + username + '/history', {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      callback(data)
    })
  },

  postHistory: function(username, content, callback) {
    var params = this.buildQuery(content);
    fetch('/' + username + '/history', {
      method: "POST",
      body: params
    })
    .then((response) => response.json())
    .then((data) => {
      callback(data)
    })
  },

  getFavorites: function(username, callback) {
    fetch('/' + username + '/favorites', {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      callback(data)
    })
  }

  postHistory: function(username, content, callback) {
    var params = this.buildQuery(content);
    fetch('/' + username + '/favorites', {
      method: "POST",
      body: params
    })
    .then((response) => response.json())
    .then((data) => {
      callback(data)
    })
  }    
}


module.exports = helpers;