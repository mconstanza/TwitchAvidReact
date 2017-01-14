import express from 'express';
import Twitch from '../config/Twitch';
const router = express.Router();

function urlencoded(params) {
	let header = [];

    for(let key in params) {
      header.push(key + '=' + params[key]); 
    }

    return header.join('&');
}

router.post('/authorize', function(req, res) {
	var headers = {
		response_type: "code",
		client_id: Twitch.clientID,
		redirect_uri: "http://localhost:3000",
		scope: "user_read channel_read",
		force_verify: "true"
	};

	var params = urlencoded(headers);

	console.log(params);
	res.redirect("https://api.twitch.tv/kraken/oauth2/authorize?" + params);
	//res.redirect('http://google.com');
})

module.exports = router;