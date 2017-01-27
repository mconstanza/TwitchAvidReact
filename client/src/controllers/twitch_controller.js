import express from 'express';
import Twitch from '../config/Twitch';
import helpers from '../utils/helpers';

const router = express.Router();

import Users from '../models/Users';

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

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
		if(err) res.send(err);
		res.send(docs);
	})
});

// Return user and adds new user if does not exist
router.post('/user', function(req, res) {
	Users.findOne({name: req.body.name}, function(err, foundUser) {
		if(err) res.send(err)
		if(!foundUser) {
			Users.create(req.body, function(err, createdUser) {
				if(err) res.send(err);
				res.send(createdUser);
			})
		}
		res.send(foundUser);
	})
});

// Return user's favorites
router.get('/:username/favorites', function(req, res) {
	Users.findOne({name: req.params.username}, 'favorites', function(err, user) {
		if(err)
			res.send(err);
		else
			res.send(user);
	})
});

// Add new favorite
router.post('/:username/favorites', function(req, res) {
	let recentHistory = req.body;
	console.log(recentHistory);
	Users.findOne({name: req.params.username}, function(err, user) {
		if(err) res.send(err);
		else if(!user) res.send(user);
		else {
			user.favorites.push(recentFavorite);
			user.save(function(err, doc) {
				if(err) res.send(err);
				res.send(doc);
			})
		}
	})
});


// Returns view history
router.get('/:username/history', function(req, res) {
	Users.findOne({name: req.params.username}, 'viewHistory', function(err, user) {
		if(err)
			res.send(err);
		else
			res.send(user);
	})
});

// Add recently viewed content
router.post('/:username/history', function(req, res) {
	let recentHistory = req.body;

	Users.findOne({name: req.params.username}, function(err, user) {
		if(err) res.send(err);
		else if(!user) res.send(user)
		else {
			let historyArr = user.viewHistory;
			let dupeChannel = false;
			for(var i = 0; i < historyArr.length; i++) {
				if(historyArr[i].channel === recentHistory.channel) {
					historyArr[i].dateViewed = recentHistory.dateViewed;
					console.log("should update date");
					dupeChannel = true;
					break;
				}
			}
			if(!dupeChannel)
				user.viewHistory.push(recentHistory);

			user.save(function(err, doc) {
				if(err) res.send(err);
				res.send(doc);
			})
		}
	})
});

module.exports = router;
