var passport = require('passport');

require('../config/passport-git')(passport);

var controller ={};
controller.callback = passport.authenticate('github', {successRedirect: '/', failureRedirect:'/'});

controller.github = passport.authenticate('github', {scope: 'email'});
module.exports = controller;