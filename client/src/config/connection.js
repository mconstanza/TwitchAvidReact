import mongoose from 'mongoose';

mongoose.connect("mongodb://heroku_s8llz6jn:hg7bu95ebfjiih7nc9cf8nf3hm@ds145188.mlab.com:45188/heroku_s8llz6jn", function(err) {
	if(err) throw err;
	console.log('database connected');
});
