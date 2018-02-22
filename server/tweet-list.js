var Twitter = require('twitter');
 

module.exports = function(screen_name) {
var client = new Twitter({
  consumer_key: 'hYhmNWm1AUZ6m2gR991N98oyL',
  consumer_secret: 'phaP7RbvloTUR4DXQwPHRFIieYdWBXtJpqXDOy6w4BDKqjqJIJ',
  access_token_key: '2320649376-KPJogkZTi6VPvxZKGeCsgfqUSaAMQCIShBvSDFY',
  access_token_secret: 'dXznUEVZ0AyMo0t5zeOWBbUHYA5yCZBPDvULvTem2nJ7x'
});
 
var params = {screen_name: screen_name};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
}