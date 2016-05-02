var User = require('../models/user');
var GithubStrategy = require('passport-github').Strategy;

var passportGithub = function(passport){
	passport.serializeUser( function(user,done){
		done(null,user._id);
	});
	passport.deserializeUser(function(id,done){
		User.findById(id, function(err,user){
			// console.log('deserializing user: ' + user);
			done(err, user);
		});
	});

	passport.use('github', new GithubStrategy({
		clientID: process.env.GITHUB_API_KEY,
		clientSecret: process.env.GITHUB_API_SECRET,
		callbackURL: "http://127.0.0.1:3000/auth/github/callback",
		enableProof: true,
		profileFields: ['name', 'email']
	}, function(access_token, refresh_token, profile, done){
		process.nextTick(function(){
			console.log(profile);
			User.findOne({'id': profile.id})
				.then(function(user){
					if(user){
						return user;
					}
					else{
						var newUser = new User();
						newUser.id =profile.id;
						newUser.access_token =access_token;
						newUser.name =profile._json.name;
						newUser.email =profile._json.email;
						newUser.repos =profile._json.repos_url;
						newUser.avatar =profile._json.avatar_url;
						return newUser.save();
					}
				})
				.then(function(user){
					return done(null,user);
				})
				.catch(function(err){
					throw err;
				});

		});
	}));
};

module.exports = passportGithub;