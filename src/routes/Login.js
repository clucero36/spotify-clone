import React from 'react';
import {
  Box,
  Button,
} from '@chakra-ui/react';
import { 
  requestAuthorization, 
} from '../apis/spotify';

const Login = () => {
  const reqAuth = requestAuthorization;

  return (
    <Box w='50%' m='0 auto' display='flex'>
      Here is the login page
      <Button onClick={reqAuth}>Request Auth</Button>
    </Box>
  )
}

export default Login;