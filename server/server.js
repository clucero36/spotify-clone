import express, { json } from 'express';
import cors from 'cors';
import { stringify } from 'query-string';
import fetch from 'node-fetch';
const port = process.env.PORT || 5000;

let app = express();
app.use(cors());
app.use(json());

const redirect_uri = 'https://spotifyditto.netlify.app/callback';
const scope = 'user-read-private user-read-email user-top-read user-read-recently-played playlist-read-private user-library-read';

app.listen(port, () => {
  console.log(`Spotify server listening on port ${port}`)
});

// request user authorization
// once accepted we are sent to redirect_uri & prepare access token request
app.get('/userlogin', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  let qString = stringify({
    response_type: 'code',
    client_id: "f7601cac702b49db92c02678ab6c5177",
    scope: scope,
    redirect_uri: redirect_uri,
  })

  res.send({authUrl: 'https://accounts.spotify.com/authorize?' + qString});
});


// callback endpoint
// we are given a code in uri if user auth is accepted
// with access code we send a post request to spotify api in exchange
// for an access token. 
// if access token is acquired we send token to client in the url.
app.get('/callback', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const code = req.query.code;
  async function getToken(code) {
    const buf = Buffer.from('f7601cac702b49db92c02678ab6c5177' + ':' + '78ba61007cf64462aa84551f740d6202', 'utf8')
    const qString = stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirect_uri
    })
    const response = await fetch('https://accounts.spotify.com/api/token?'+qString, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + buf.toString('base64'),
      },
    })
    return await response.json();
  }
  getToken(code).then((x) => {
    res.redirect('https://spotifyditto.netlify.app/callback?' + stringify(x));
  })
});
