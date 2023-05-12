import React from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Text,
} from '@chakra-ui/react';

const Login = () => {
  // https://us-central1-spotify-82254.cloudfunctions.net/requestSpotifyUserAuth
  // http://localhost:/5000/userlogin
  async function reqAuth() {
    axios.get('https://us-central1-spotify-82254.cloudfunctions.net/requestSpotifyUserAuth').then((x) => {
      window.location.href=x.data.authUrl;
    })
  }

  async function nonAuth() {
    axios.get('http://localhost:5000/login').then((x) => {
      let url = x.data.url;
      window.location.href=url;
    })
  }

  return (
    <Box align='center' mt='4rem'>
      <Text fontSize='xl' p='5rem'>Spotify Clone</Text>
      <Text>For a personalized experience select "Request Auth". </Text>
      <Text>Non personalized experience coming soon.</Text>
      <Box display='flex' justifyContent='center' gap='2' p='2rem'>
        <Button onClick={reqAuth}>Authenticated User</Button>
        <Button onClick={nonAuth}> Standard User</Button>
      </Box>
    </Box>
  )
}

export default Login;