var db = require('./config/db');
var User = require('./models/user');
User.remove({})
	.then(function(){
		console.log('Remove Successful');
		process.exit();
	})
	.catch(function(err){
		console.log(err);
		process.exit();
	});