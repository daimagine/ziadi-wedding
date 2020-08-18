
// Dependencies requirements, Express 4
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require("mongoose");
var stylus		   = require('stylus');
var app            = express();
var routes		   = require('./routes');

app.set('port', (process.env.PORT || 5000));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.use(stylus.middleware(
  { src: __dirname + '/public' , compile: compile }
));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', routes.index);
app.post('/message', routes.message);


var mongoose = require('mongoose');
// var mongoURL = 'mongodb://mongouser:mongouser@dbh23.mongolab.com:27237/orchestra_8604bff8_e0cb6';
// var mongoURL = 'mongodb://ziadimongo:ziadimongo@ds055584.mongolab.com:55584/heroku_8zn3bc0h';
var mongoURL = 'mongodb+srv://daimagine:imagine123@daimagine.qabdt.mongodb.net/daimagine.ziadi?retryWrites=true&w=majority';

mongoose.connection.on("connected", function(ref) {
	console.log("Connected to mongo");

	app.listen(app.get('port'), function() {
	  console.log("Node app is running at localhost:" + app.get('port'));
	});
});
 
// If the connection throws an error
mongoose.connection.on("error", function(err) {
	console.error('Failed to connect to mongo on startup ', err);
});
 
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose default connection to mongo disconnected');
});

var gracefulExit = function() { 
	mongoose.connection.close(function () {
		console.log('Mongoose default connection with mongo is disconnected through app termination');
		process.exit(0);
	});
}
 
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

try {
	var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
 
	mongoose.connect(mongoURL);
	console.log("Trying to connect to DB " + mongoURL);
} catch (err) {
	console.log("Sever initialization failed " , err.message);
}
