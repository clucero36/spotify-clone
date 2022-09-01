const functions = require('firebase-functions');
const admin = require('firebase-admin');
const querystring = require('query-string');
const axios = require('axios').default;
admin.initializeApp();


exports.userAuth = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const redirect_uri = 'http://localhost:5000/callback'
  const scope = 'user-read-private user-read-email user-top-read user-read-recently-played playlist-read-private user-library-read';
  let qString = querystring.stringify({
    response_type: 'code',
    client_id: "f7601cac702b49db92c02678ab6c5177",
    scope: scope,
    redirect_uri: redirect_uri,
  })

  res.send({authUrl: 'https://accounts.spotify.com/authorize?' + qString});
})


exports.callBack = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const redirect_uri = 'http://localhost:5000/callback';
  const code = req.query.code;
  
  const buf = Buffer.from('f7601cac702b49db92c02678ab6c5177' + ':' + '78ba61007cf64462aa84551f740d6202', 'utf8')
  const qString = querystring.stringify({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirect_uri
  })
  console.log('https://accounts.spotify.com/api/token?' + qString);
  axios.post('https://accounts.spotify.com/api/token?'+ qString, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + buf.toString('base64'),
    }
  }).then((x) => {
    let params = {access_token: x.access_token, token_type:x.token_type}
    res.send({token: 'https://spotifyditto.netlify.app/user?' + querystring.stringify(params)});
  }).catch(function (error) {
    console.log(error);
  })
})