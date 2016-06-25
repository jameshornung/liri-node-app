//captures the user input on the command line
var input = process.argv[2];

//variables for spotify
var spotify = require('spotify');
var song = '';

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
}
//SPOTIFY===============================================================================
else if(input =='spotify-this-song'){
	for(i=3;i<process.argv.length;i++){
		var song = song + '+' + process.argv[i];
	}
	spotify.search({type: 'track', query: song}, function(err,data){
		if(!err){
			console.log('Artist: ' + data.tracks.items[0].artists[0].name);
			console.log('Album Name: ' + data.tracks.items[0].album.name);
			console.log('Song Name: ' + data.tracks.items[0].name);
			console.log('Preview Link: ' + data.tracks.items[0].preview_url);
		}
	})
}
else if(input == 'movie-this'){

},

