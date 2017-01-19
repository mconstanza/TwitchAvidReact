import express from 'express';
import Twitch from '../config/Twitch';
import helpers from '../utils/helpers';

const router = express.Router();

import Users from '../models/Users';

router.post('/authorize', function(req, res) {
	var headers = {
		response_type: "code",
		client_id: Twitch.clientID,
		redirect_uri: "http://localhost:3000",
		scope: "user_read channel_read",
		force_verify: "true"
	};

	var params = helpers.buildQuery(headers);

	console.log(params);
	res.redirect("https://api.twitch.tv/kraken/oauth2/authorize?" + params);
});

// Return all users in DB
router.get('/all', function(req, res) {
	Users.find({}, function(err, docs) {
		if(err) throw err;
		res.send(docs);
	})
});

// Return user and adds new user if does not exist
router.post('/user', function(req, res) {
	Users.findOneAndUpdate(
		{username: req.body.username}, 
		{$setOnInsert: {username: req.body.username, email: req.body.email}}, 
		{setDefaultsOnInsert: true, upsert: true, new: true}, 
		function(err, user) {
			if(err) throw err;
			res.send(user);
	})
});

// Return user's favorites
router.get('/:username/favorites', function(req, res) {
	Users.findOne({username: req.params.username}, 'favorites', function(err, user) {
		if(err) throw err;
		res.send(user.favorites);
	})
});

// Add new favorite
router.post('/:username/favorites', function(req, res) {
	let recentFavorite = req.body.favorite;
	Users.findOneAndUpdate(
		{username: req.params.username}, // condition
		{$push: {favorites: recentFavorite}}, // update
		{sort: {dateViewed: 'desc'}, new: true}, // options
		function(err, user) { // callback
			if(err) throw err;
			res.send(user);
	})
});


// Returns view history 
router.get('/:username/history', function(req, res) {
	Users.findOne({username: req.params.username}, 'viewHistory', function(err, user) {
		if(err) throw err;
		res.send(user.viewHistory);
	})
});

// Add recently viewed content
router.post('/:username/history', function(req, res) {
	let recentHistory = req.body.history;
	Users.findOneAndUpdate(
		{username: req.params.username}, 
		{$push: {viewHistory: recentHistory}}, 
		{new: true}, 
		function(err, user) {
			if(err) throw err;
			res.send(user);
	})
});

module.exports = router;