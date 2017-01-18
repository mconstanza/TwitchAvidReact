import mongoose from 'mongoose';


var userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	email: {type: String, required: true},
	favorites: [ String ],
	viewHistory: [
		{
			streamer: {type: String, required: true},
			date: {type: Date, required: true}		
		}
	]
});

var Users = mongoose.model("Users", userSchema);

module.exports = Users;