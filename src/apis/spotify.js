import axios from 'axios';

const client_id = "f7601cac702b49db92c02678ab6c5177";
const client_secret = "78ba61007cf64462aa84551f740d6202";
// const redirect_uri = 'http://localhost:3000/redirect';
const redirect_uri = 'https://spotifyditto.app/redirect/';
const AUTHORIZE = "https://accounts.spotify.com/authorize";
const querystring = require('query-string');
const baseURI = 'https://api.spotify.com/v1'

//---------------------------------------------------------------------------------------   
//              User Auth & Access Token Request
// 
// used vanilla js 
// will implement using axios
export function requestAuthorization() {
  let url = AUTHORIZE;
  url += "?client_id=" + client_id;
  url += "&response_type=code";
  url += "&redirect_uri=" + encodeURI(redirect_uri);
  url += "&scope=user-read-private user-read-email user-top-read user-read-recently-played playlist-read-private user-library-read";
  window.location.href=url;
}

//an authocode is provided in the redirect URI after user authorization
export function handleRedirect() {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('code');
  let response = getToken(code);
  return response;
}

//we call getToken with the authcode and make a post request to /api/token endpoint
//in the response we get an access token we can use to retrieve data from spotify api. 
async function getToken(code) {
  const headers = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
    }
  }
  const data = {
    grant_type: 'authorization_code',
    redirect_uri: redirect_uri,
    code: code,
  }

  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    querystring.stringify(data),
    headers,
  )
  return response.data;
}
//
//            End User Auth & Access Token Request
//---------------------------------------------------------------------------------------

export async function getUserProfile(token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const enp = '/me'
  const response = await axios.get(
    baseURI + enp,
    headers,
  )
  return response.data;
}

export async function getUserRecents(token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = '/me/player/recently-played';
  const response = await axios.get(
    baseURI + endp,
    headers,
  )
  return response.data;
}


export async function getUserPlaylists(token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = '/me/playlists';
  const response = await axios.get(
    baseURI + endp,
    headers,
  )
  return response.data
}

export async function getArtists(token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = '/artists?ids=4MbRfFtyXLbOnccfjBE69n,2VYFboeFi8XZOLuEYLf1Z2,7zxS4o4zmwxJNe5UvC2Fx5,4cUkGQyhLFqKHBtL58HYVp,2RqrWplViWHSGLzlhmDcbt,7CCrWKLbAto1EXI2eoG9Vu'  
  const response = await axios.get(
    baseURI + endp,
    headers,
  )
  return response.data
}
// https://open.spotify.com/episode/5QX81LIqjZhNXpeYFv8Sct?si=84ca643a507c4177
// https://open.spotify.com/artist/1qrGI2pz0Ezer8Wcrl1xhj?si=saYI_WNmQGKmbwsA5FTmFA
//https://open.spotify.com/artist/4MbRfFtyXLbOnccfjBE69n?si=a3922c63085e45ef
// https://open.spotify.com/artist/2VYFboeFi8XZOLuEYLf1Z2?si=e153a8a440c345ac
//https://open.spotify.com/artist/7zxS4o4zmwxJNe5UvC2Fx5?si=RHwvMfGYS6CjFx-zjTymZQ
//https://open.spotify.com/artist/4cUkGQyhLFqKHBtL58HYVp?si=Cdd2ftcjSx-r1dTifVIElA
// https://open.spotify.com/artist/2RqrWplViWHSGLzlhmDcbt?si=539da6ea100f45f8
// https://open.spotify.com/artist/7CCrWKLbAto1EXI2eoG9Vu?si=c6e30b8b984849b3

export async function getRnbAlbums(token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = '/albums?ids=392p3shh2jkxUxY2VHvlH8,69g3CtOVg98TPOwqmI2K7Q,3mH6qwIy9crq0I9YQbOuDf,3MP8mUHuQlYrGUkrEG4qpJ,070rEVRV6FWywkncMWLhs6,21XMv0TCsnhWPt7MNVvkzD'
  const response = await axios.get(
    baseURI + endp,
    headers,
  )
  return response.data;
}

// https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8?si=49b36bba67744723
// https://open.spotify.com/album/69g3CtOVg98TPOwqmI2K7Q?si=d6e4a714ff834693
// https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf?si=fe10523c654f4e33
// https://open.spotify.com/album/3MP8mUHuQlYrGUkrEG4qpJ?si=c973b030494d4969
// https://open.spotify.com/album/070rEVRV6FWywkncMWLhs6?si=64ef23d189f14240
// https://open.spotify.com/album/21XMv0TCsnhWPt7MNVvkzD?si=e4cc2c9b55c4439d