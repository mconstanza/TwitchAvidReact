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
  }

  //     else if(this.props.query) {
  //
  //       var game = this.props.query;
  //       console.log(this.props.query)
  //       fetch('https://api.twitch.tv/kraken/search/streams?query=' + game, {
  //           method: 'GET',
  //           headers: {
  //               'Accept': 'application/vnd.twitchtv.v5+json',
  //               'Client-ID': Twitch.clientID
  //           }
  //       }).then(response => response.json()).then(json => {
  //           console.log(json.streams);
  //           this.setState({streams: json.streams})
  //       })
  //     }
  // }


}

module.exports = searchHelpers;
