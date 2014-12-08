
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

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
