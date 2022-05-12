import React from 'react';
import { Link as routerLink} from 'react-router-dom';
import {
  Box, 
  Link,
  Text,
} from '@chakra-ui/react';

const Welcome = props => {
  return (
    <Box>
      <Text>Hey, Please Login to Spotify</Text>
      <Link to='/login' as={routerLink}>
        Login
      </Link>
    </Box>
  )
}

export default Welcome