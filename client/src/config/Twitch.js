module.exports = {

  clientID: 'q0ojsiq3xgiqjopism2gu3z35py99jg',
  secret: 'u53m567w17e8mjlebvuzgb4tjpqd9x',

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
}
