import React from 'react';
import {
  Box,
} from '@chakra-ui/react';

const LikedTracks = ({token, type}) => {


  return (
    <Box>
      {token}
      {type}
    </Box>
  )
}

export default LikedTracks;