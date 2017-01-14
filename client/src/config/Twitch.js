module.exports = {

  clientID: 'q0ojsiq3xgiqjopism2gu3z35py99jg',
  secret: 'siz6y50ij7pkqfsjaosk451kj090bp',

  getTopGames() {
    fetch('https://api.twitch.tv/kraken/games/top', {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': this.clientID
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.top);
      return json.top
    })
  }

  // init(callback) {
  //   Twitch.init({clientId: this.clientID}, function(error, status) {
  //       if (error) {
  //         console.log(error);
  //       }
  //       if (status.authenticated) {
  //         callback();
  //       }
  //   })
  // },

  // login() {
  //   var headers = {
  //     response_type: "token",
  //     client_id: this.clientID,
  //     redirect_uri: "http://localhost:8080",
  //     scope: "user_read channel_read user_subscriptions",
  //     force_verify: "true"
  //   }

  //   var url = "https://api.twitch.tv/kraken/oauth2/authorize?";// + decodeURIComponent($.param(headers));
  //   window.location.href = url;

  // }
}
