import React from 'react';
import axios from 'axios';
import {
  Box,
  Button,
} from '@chakra-ui/react';

const Login = () => {

  async function reqAuth() {
    axios.get('https://us-central1-spotify-82254.cloudfunctions.net/requestSpotifyUserAuth').then((x) => {
      window.location.href=x.data.authUrl;
    })
  }

  return (
    <Box w='50%' m='0 auto' display='flex'>
      Spotify is Requesting Authorization to your Account
      <Button onClick={reqAuth}>Request Auth</Button>
    </Box>
  )
}

export default Login;