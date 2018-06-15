const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res, next) => {
   res.render('index');
  });

//   app.get('/artists', (req, res, next) => {
//     let artistSearch = req.query.artist
  

// app.get('/',(req,res,next) => {

// }



var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = '13b75b7968304d36ac0c441de78ac256',
    clientSecret = 'dd5d8979dd8b4662994b0a2f8627d7e4';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});

app.listen(3000, () => console.log('app listening on port 3000!'))