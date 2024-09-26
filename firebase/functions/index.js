const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const querystring = require('query-string');

// used for Spotify OAuth2.0 
const redirect_uri = 'https://us-central1-spotify-82254.cloudfunctions.net/spotifyAccessTokenCB';
exports.requestSpotifyUserAuth = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const scope = 'streaming user-read-private user-read-email user-top-read user-read-recently-played playlist-read-private user-library-read';
  let qString = querystring.stringify({
    response_type: 'code',
    client_id: functions.config().spotify.client_id,
    scope: scope,
    redirect_uri: redirect_uri,
  });
  res.send({authUrl: 'https://accounts.spotify.com/authorize?' + qString});
});


exports.spotifyAccessTokenCB = functions.https.onRequest((req, res) => {
  const axios = require('axios').default;
  res.set('Access-Control-Allow-Origin', '*');
  const code = req.query.code;

  async function getToken(code) {
    const buf = Buffer.from(functions.config().spotify.client_id + ':' + functions.config().spotify.client_secret, 'utf8')
    const qString = querystring.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirect_uri
    })
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.post['Authorization'] = 'Basic ' + buf.toString('base64');
    const response = await axios.post('https://accounts.spotify.com/api/token?'+ qString)
    return response.data;
  }
  getToken(code).then((x) => {
    let params = {access_token: x.access_token, token_type:x.token_type}
    res.redirect('https://spotifyditto.netlify.app/callback?' + querystring.stringify(params));
  }).catch(function (error) {
    res.send(error);
  })
})

// for non auth users
exports.clientCredentialsAuth = functions.https.onRequest((req, res) => {
  const axios = require('axios').default;
  res.set('Access-Control-Allow-Origin', '*');

  async function getToken() {
    const buf = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`, 'utf8')
    const qString = querystring.stringify({
      grant_type: 'client_credentials',
    })
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.post['Authorization'] = 'Basic ' + buf.toString('base64');
    const response = await axios.post('https://accounts.spotify.com/api/token?'+ qString);
    return await response.data;
  }
  getToken().then((x) => {
    let params = {access_token: x.access_token, token_type:x.token_type}
    res.send({url: 'http://localhost:3000/non-auth-callback?' + querystring.stringify(params)});
  }).catch(function (error) {
    res.send(error);
  })
});

// http://localhost:3000
// https://spotifyditto.netlify.app