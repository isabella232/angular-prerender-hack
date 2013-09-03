
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var prerenderer = require('connect-prerenderer');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(prerenderer());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get(/^\/members\/.*/, function(req, res) { res.sendfile('public/notindex.html'); });

app.get('/api/v1/members/abcde', function(req, res) {
        res.json({
            id: 'abcde',
            firstName: 'Francisco',
            lastName: 'MacDonald',
            title: 'President',
            avatarUrl: 'http://services.manta-r1.com/api/claim-this-profile/image-mgr/view/201307253UpNKB8Z6Q/110x110/img.jpg'
        });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
