import express from 'express';
import Twitch from '../config/Twitch';
const router = express.Router();

import Users from '../models/Users';

function buildQuery(params) {
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

	var params = buildQuery(headers);

	console.log(params);
	res.redirect("https://api.twitch.tv/kraken/oauth2/authorize?" + params);
});

// Return user and adds new user if does not exist
router.post('/user', function(req, res) {
	Users.findOneAndUpdate({username: req.body.username}, {$setOnInsert: {username: req.body.username, email: req.body.email}}, {setDefaultsOnInsert: true, upsert: true}, function(err, user) {
		if(err) throw err;
		res.send(user);
	})
});

// Return all user's favorites
router.get('/:id/favorites', function(req, res) {
	Users.findById(req.params.id, 'favorites', function(err, user) {
		if(err) throw err;
		res.send(user.favorites);
	})
});

// Add new favorite
router.post('/:id/favorites', function(req, res) {
	let recentFavorite = req.body.favorite;
	Users.findByIdAndUpdate(req.params.id, {$push: {favorites: recentFavorite}}, {new: true}, function(err, user) {
		if(err) throw err;
		res.send(user);
	})
});

// Returns view history 
router.get('/:id/history', function(req, res) {
	Users.findById(req.params.id, 'viewHistory', function(err, user) {
		if(err) throw err;
		res.send(user.viewHistory);
	})
});

// Add recently viewed content
router.post('/:id/history', function(req, res) {
	let recentHistory = req.body.history;
	Users.findByIdAndUpdate(req.params.id, {$push: {viewHistory: recentHistory}}, {new: true}, function(err, user) {
		if(err) throw err;
		res.send(user);
	})
});

module.exports = router;