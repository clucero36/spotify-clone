import React from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react'


const About = () => {

  return (
    <Box p='2rem'>
      <Text fontSize='xxx-large' mb='2rem'>About</Text>
      <Text w='70%' mb='1rem'>This web application was built with React, Chakra UI, Express, Firebase, OAuth2.0, & Spotify API.</Text>
      <Text w='70%' mb='1rem'>The Spotify Web Player requires a spotify premium subscription & authentication.</Text>
      <Text w='70%' mb='1rem'>In order to access the authenticated version of this application, I must personally grant access via my
        Spotify API dashboard.
      </Text>
      <Text w='70%' mb='1rem'>The implementation of the web player can be found on my GitHub account.</Text>
      <Text><em>Technical Features:</em></Text>
      <Box ml='1.5rem' mt='1.5rem'>
        <ul>
          <li>Google Cloud Functions</li>
          <li>Express Local Development Server</li>
          <li>React Router</li>
          <li>Axios</li>
          <li>Context API</li>
          <li>0Auth2.0 API</li>
          <li>Data Access Layer</li>
          <li>Chakra UI Custom Theming</li>
        </ul>
      </Box>
    </Box>
  )
}

export default About;