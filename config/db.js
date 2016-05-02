var mongoose = require('mongoose');
var mongoURL = process.env.MONGO_URL || 'mongodb://localhost/github-oauth-practice';

mongoose.connect(mongoURL);

module.exports = mongoose;