import mongoose from 'mongoose';


var userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	email: {type: String, required: true},
	favorites: [ String ],
	viewHistory: [
		{
			channel: {type: String, required: true},
      game: {type: String, required: true},
			dateViewed: {type: Date, required: true}		
		}
	]
});

var Users = mongoose.model("Users", userSchema);

module.exports = Users;