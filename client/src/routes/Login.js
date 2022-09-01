import React from 'react';
import {
  Box,
  Button,
} from '@chakra-ui/react';

const Login = () => {

  async function reqAuth() {
    const response = await fetch('https://us-central1-spotify-82254.cloudfunctions.net/requestSpotifyUserAuth', {
      method: 'GET',
      mode: 'cors',
    });
    let auth = await response.json()
    window.location.href = auth.authUrl;
  }

  return (
    <Box w='50%' m='0 auto' display='flex'>
      Spotify is Requesting Authorization to your Account
      <Button onClick={reqAuth}>Request Auth</Button>
    </Box>
  )
}

export default Login;