import React from 'react';
import {
  Box,
  Button,
} from '@chakra-ui/react';
import { 
  requestAuth, 
} from '../apis/spotify';

const Login = () => {

  const reqAuth = requestAuth;

  return (
    <Box w='50%' m='0 auto' display='flex'>
      Here is the login page
      <Button onClick={reqAuth}>Request Auth</Button>
    </Box>
  )
}

export default Login;