var express = require('express');
var bodyParser = require('body-parser');
var tweetList =require('./tweet-list')
var app 	= express();

app.get('/', function(req, res) {
	res.status(200).sendFile(__dirname + '../my-app/public/index.html');
});
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/get_tweets',  function(req, res) {
	var screen_name = req.body.handle;

	var tweets = tweetList(res, screen_name);
})

var server = app.listen(3000, function() {
	console.log('Our application is running at http://localgost:3000');
})