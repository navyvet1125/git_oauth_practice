var express = require('express');
var router = express.Router();
var rootController = require('../controllers/root');
router.route('/logout')
	.get(rootController.logout);


router.route('/')
	.get(rootController.root);



module.exports = router;