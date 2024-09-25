import React from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react'


const FooterPage = ({title}) => {

  return (
    <Box p='2rem'>
      <Text fontSize='xxx-large' mb='2rem'>{title}</Text>
      <Text w='70%' mb='2rem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit. Dictumst quisque sagittis purus sit amet volutpat consequat. Egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi bibendum. Consectetur libero id faucibus nisl. Quisque id diam vel quam elementum. Eros donec ac odio tempor orci dapibus ultrices. Turpis tincidunt id aliquet risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. 
      </Text>
      <Text><em>This document was last updated September 24, 2024</em></Text>
    </Box>
  )
}

export default FooterPage;