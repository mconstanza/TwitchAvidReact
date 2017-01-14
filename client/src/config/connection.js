import mongoose from 'mongoose',

mongoose.connect("mongodb://heroku_kpd2pz33:u0dr2k7rdm33oqk6r8p9dj0j3n@ds163718.mlab.com:63718/heroku_kpd2pz33", function(err) {
	if(err) throw err;
	console.log('database connected');
});
