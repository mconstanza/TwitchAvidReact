import express from 'express';
import Twitch from '../config/Twitch';
const router = express.Router();

import Users from '../models/Users';

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
});

router.
router.get('/:id/favorites', function(req, res) {
	Users.findById(req.params.id, 'favorites', function(err, user) {
		if(err) throw err;
		res.send(user.favorites);
	})
});

router.post('/:id/favorites', function(req, res) {
	let recentFavorite = req.body.favorite;
	Users.findByIdandUpdate(req.params.id, {$push: {favorites: recentFavorite}}, {new: true}, function(err, user) {
		if(err) throw err;
		res.send(user);
	})
});

router.get('/:id/history', function(req, res) {
	Users.findById(req.params.id, 'viewHistory', function(err, user) {
		if(err) throw err;
		res.send(user.viewHistory);
	})
});

router.post('/:id/history', function(req, res) {
	let recentHistory = req.body.history;
	Users.findByIdandUpdate(req.params.id, {$push: {viewHistory: recentHistory}}, {new: true}, function(err, user) {
		if(err) throw err;
		res.send(user);
	})
});

module.exports = router;