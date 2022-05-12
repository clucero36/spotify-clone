import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
} from '@chakra-ui/react';
import { 
  requestAuthorization, 
  handleRedirect,
} from '../apis/spotify';

const Login = () => {
  const reqAuth = requestAuthorization;
  const navigate = useNavigate();

  if (window.location.search) {
    handleRedirect().then((result) => {
      navigate("/landing", {
        state: {
          access_token: result.access_token,
          token_type: result.token_type,
        }
      })
    })
  }
  
  return (
    <Box w='50%' m='0 auto' display='flex'>
      Here is the login page
      <Button onClick={reqAuth}>Request Auth</Button>
    </Box>
  )
}

export default Login;