import Twitch from '../config/Twitch';

var searchHelpers = {

  getStreams(search, callback) {
    // search is an object with type and query properties
    // 'type' can be 'game', 'channel', 'all', 'followed', 'featured'
    // 'query' can be the name of a 'game', 'stream', 'channel',

      var baseUrl = 'https://api.twitch.tv/kraken/streams/'

      if (search.type == 'game') {
        var type = '?game='
      }
      else if (search.type == 'channel'){
        var type = '?channel='
      }

      var url = baseUrl + type;

      fetch(url + search.query, {
          method: 'GET',
          headers: {
              'Accept': 'application/vnd.twitchtv.v5+json',
              'Client-ID': Twitch.clientID
          }
      }).then(response => response.json()).then(json => {
          console.log(json.streams);
          callback(json.streams)
      })
  },
  getFeaturedStreams(callback) {

      fetch('https://api.twitch.tv/kraken/streams/featured', {
          method: 'GET',
          headers: {
              'Accept': 'application/vnd.twitchtv.v5+json',
              'Client-ID': Twitch.clientID
          }
      }).then(response => response.json()).then(json => {
        console.log('featured streams:', json.featured)
          callback(json.featured)
      })
  },
// search and list streams by game

    searchGames(game, callback){

      console.log("Searching for: ", game)

      fetch('https://api.twitch.tv/kraken/search/games?query=' + game, {
          method: 'GET',
          headers: {
              'Accept': 'application/vnd.twitchtv.v5+json',
              'Client-ID': Twitch.clientID
          }
      }).then(response => response.json()).then(json => {
          console.log(json.games);
          callback(json.games)
      })
    },
// search and list channels
    searchChannels(channel, callback){
      fetch('https://api.twitch.tv/kraken/search/channels?query=' + channel, {
          method: 'GET',
          headers: {
              'Accept': 'application/vnd.twitchtv.v5+json',
              'Client-ID': Twitch.clientID
          }
      }).then(response => response.json()).then(json => {
          console.log(json.channels);
          callback(json.channels)
      })
    },
// search and list streams
    searchStreams(stream, limit='25', callback) {
      fetch('https://api.twitch.tv/kraken/search/streams?query=' + stream + '&limit=' + limit, {
          method: 'GET',
          headers: {
              'Accept': 'application/vnd.twitchtv.v5+json',
              'Client-ID': Twitch.clientID
          }
      }).then(response => response.json()).then(json => {
          callback(json.streams)
      })
    }

}

module.exports = searchHelpers;
