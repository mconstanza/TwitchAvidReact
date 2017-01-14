import express from 'express';
import Twitch from '../config/Twitch';
const router = express.Router();

router.post('/authorize', function(req, res) {
	var headers = {
		response_type: "code",
		client_id: Twitch.clientID,
		redirect_uri: "http://localhost:3000",
		scope: "user_read channel_read",
		force_verify: "true"
	};

	var params = function() {
		let header = [];

		for(let key in headers) {
			header.push(key + '=' + headers[key]); 
		}

		return header.join('&');
	}();

	console.log(params);
	res.redirect("https://api.twitch.tv/kraken/oauth2/authorize?" + params);
	//res.redirect('http://google.com');
})

module.exports = router;