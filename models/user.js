var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	
	id: String,
	access_token: String,
	name: String,
	email: String,
	repos: String,
	avatar:String
});

var User = mongoose.model('User', userSchema);

module.exports = User;