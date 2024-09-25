import React from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react'


const AuthReq = () => {

  return (
    <Box p='2rem'>
      <Text fontSize='xxx-large' mb='2rem'>Authentication Required</Text>
      <Text>This feature is only available for authenticated viewers.</Text>
    </Box>
  )
}

export default AuthReq;