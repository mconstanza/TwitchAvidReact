module.exports = {

  clientID: 'q7gfsp00jrsw5bkiz4shl9vir6vdvn',
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
}
