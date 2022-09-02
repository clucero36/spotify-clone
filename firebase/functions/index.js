const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const querystring = require('query-string');

const redirect_uri = 'https://us-central1-spotify-82254.cloudfunctions.net/spotifyAccessTokenCB';
exports.requestSpotifyUserAuth = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const scope = 'user-read-private user-read-email user-top-read user-read-recently-played playlist-read-private user-library-read';
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
    res.redirect('https://spotifyditto.netlify.app/user?' + querystring.stringify(params));
  }).catch(function (error) {
    res.send(error);
  })
})