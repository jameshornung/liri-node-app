//captures the user input on the command line
var input = process.argv[2];

//TWITTER==============================================================================
//variables required for twitter call
var keys = require('./keys.js');
var twitter = require('twitter');
var parameters = {screen_name: 'jamesellis1981', count: 20};
var twitterURL = 'https://api.twitter.com/1.1/search/tweets.json&q=jamesellis'
var client = new twitter(keys.twitterKeys);
//if user input is my-tweets this will post the text only from my last 20 tweets
if(input == 'my-tweets'){
	client.get('statuses/user_timeline', parameters, function(err, tweets, response){
		if(!err){
			for(i=0;i<20;i++)
			console.log(tweets[i].text);
		}
	})
};

//SPOTIFY===============================================================================
//variable required for spotify call
var spotify = require('spotify');
var song = process.argv[3];


if(input='spotify-this-song'){
	spotify.search({type: 'track', query: song}, function(err,data){
		if(!err){
			console.log(data);
		}
	})
};

