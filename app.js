var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var logger = require('morgan');
var bodyParser = require('body-parser');
var db = require('./config/db');
var passport = require('passport');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var rootRoutes = require('./routes/root');
var githubRoutes = require('./routes/github');


app.use(cookieParser());
app.use(expressSession({secret: 'mySecretKey', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));



app.use('/', rootRoutes);
app.use('/auth/github', githubRoutes);

app.listen(port, function(){
	console.log('Listening on localhost:'+port);
});