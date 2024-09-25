import React from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Text,
  Divider,
} from '@chakra-ui/react';

const Login = () => {

  async function reqAuth() {
    axios.get('https://us-central1-spotify-82254.cloudfunctions.net/requestSpotifyUserAuth').then((x) => {
      window.location.href=x.data.authUrl;
    })
  }

  async function nonAuth() {
    axios.get('http://127.0.0.1:5001/spotify-82254/us-central1/clientCredentialsAuth').then((x) => {
      window.location.href=x.data.url;
    })
  }

  return (
    <Box align='center' m='4rem auto' w='80%'>
      <Text fontSize='xl' p={['2.5rem', '5rem']}>Spotify Clone</Text>
      <Text>"Standard User" showcases a clone of the spotify webplayer @ https://open.spotify.com. </Text>
      <Button onClick={nonAuth} m='2rem 0'>Standard User</Button>
      <Divider />
      <Text mt='2rem'>"Request Auth" also showcases a clone of the webplayer, however it utilizes Spotify's implementation of OAuth2.0</Text>
      <Button onClick={reqAuth} m='2rem 0'>Authenticated User</Button>
    </Box>
  )
}

export default Login;