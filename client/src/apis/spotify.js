import axios from 'axios';

const baseURI = 'https://api.spotify.com/v1';

export async function getUserProfile(token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = '/me'
  const response = await axios.get(
    baseURI + endp,
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

export async function getUsersSavedTracks(token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = '/me/tracks?limit=50'
  const response = await axios.get(
    baseURI + endp,
    headers,
  )
  return response.data;
}


// Spotify has insane algorithms implemented to view reccomended content
// I grabbed some content ids & retrieved them manually. 
// * SPOTIFY ARTISTS * //
// https://open.spotify.com/episode/5QX81LIqjZhNXpeYFv8Sct?si=84ca643a507c4177
// https://open.spotify.com/artist/1qrGI2pz0Ezer8Wcrl1xhj?si=saYI_WNmQGKmbwsA5FTmFA
// https://open.spotify.com/artist/4MbRfFtyXLbOnccfjBE69n?si=a3922c63085e45ef
// https://open.spotify.com/artist/2VYFboeFi8XZOLuEYLf1Z2?si=e153a8a440c345ac
// https://open.spotify.com/artist/7zxS4o4zmwxJNe5UvC2Fx5?si=RHwvMfGYS6CjFx-zjTymZQ
// https://open.spotify.com/artist/4cUkGQyhLFqKHBtL58HYVp?si=Cdd2ftcjSx-r1dTifVIElA
// https://open.spotify.com/artist/2RqrWplViWHSGLzlhmDcbt?si=539da6ea100f45f8
// https://open.spotify.com/artist/7CCrWKLbAto1EXI2eoG9Vu?si=c6e30b8b984849b3
// * SPOTIFY ALBUMS * //
// https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8?si=49b36bba67744723
// https://open.spotify.com/album/69g3CtOVg98TPOwqmI2K7Q?si=d6e4a714ff834693
// https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf?si=fe10523c654f4e33
// https://open.spotify.com/album/3MP8mUHuQlYrGUkrEG4qpJ?si=c973b030494d4969
// https://open.spotify.com/album/070rEVRV6FWywkncMWLhs6?si=64ef23d189f14240
// https://open.spotify.com/album/21XMv0TCsnhWPt7MNVvkzD?si=e4cc2c9b55c4439d

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

// client-credentials requests
export async function getFeaturedPlaylists(token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = '/browse/featured-playlists?limit=14'
  const response = await axios.get(
    baseURI + endp,
    headers,
  )
  return response.data;
}

export async function getBrowseCategories(token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = '/browse/categories?limit=14&offset=1'
  const response = await axios.get(
    baseURI + endp,
    headers,
  )
  return response.data;
}

export async function getPlaylistTracks(id, token, type, listType) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  let endp = ''

  if (listType === 'ft') {
    endp = `/playlists/${id}/tracks?limit=50`;
    const res = await axios.get(
      baseURI + endp,
      headers
    )
    return res.data;
  }

  else if (listType === 'cat') {
    endp = `/browse/categories/${id}/playlists`;
    const playlistsResponse = await axios.get(
      baseURI + endp,
      headers,
    )
    const playlistUrl = playlistsResponse.data.playlists.items[0].tracks.href + '?limit=50';
    const playlistTracksResponse = await axios.get(
      playlistUrl,
      headers
    );
    return playlistTracksResponse.data;
  }
  else
    return null;
}

export async function getPlaylistImage(id, token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = `/playlists/${id}`;

  const response = await axios.get(
    baseURI + endp,
    headers,
  )
  return response.data.images[0];
}

export async function getCategoryPlaylistImage(category_id, token, type) {
  const headers =  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': type + ' ' + token,
    }
  }
  const endp = `/browse/categories/${category_id}/playlists`;
  const res = await axios.get(
    baseURI + endp,
    headers,
  )
  return res.data.playlists.items[0].images[0];
}