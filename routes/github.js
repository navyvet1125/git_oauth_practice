var express = require('express');
var router = express.Router();
var githubController = require('../controllers/github');

router.route('/')
	.get(githubController.github);

router.route('/callback')
	.get(githubController.callback);



module.exports = router;