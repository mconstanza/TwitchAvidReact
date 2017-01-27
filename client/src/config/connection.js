import mongoose from 'mongoose';

mongoose.connect("mongodb://heroku_n1g7kqk3:77i6igp969035jirr48l0h9h96@ds133279.mlab.com:33279/heroku_n1g7kqk3", function(err) {
	if(err) throw err;
	console.log('database connected');
});

// mongoose.connect("mongodb://localhost:27017/twitchavid", function(err) {
// 	if(err) throw err;
// 	console.log('database connected');
// });
