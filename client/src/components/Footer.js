import React from 'react';
import {
  Box,
  VStack,
  Text,
  Divider,
  Spacer,
  Image
} from '@chakra-ui/react';
import { Gi3DStairs } from "react-icons/gi";

const Footer = () => {
  return (
    <Box p='3rem 2rem'>
      <Box display='flex' gap={['2.5rem','5rem']} align='top' pb='2rem' flexWrap='wrap'>
        <VStack align='left' gap='.25rem'>
          <Text color='white' fontWeight='bold'>Company</Text>
          <Text color='RGBA(255, 255, 255, 0.64)' >About</Text>
          <Text color='RGBA(255, 255, 255, 0.64)'>Jobs</Text>
          <Text color='RGBA(255, 255, 255, 0.64)'>For The Record</Text>
        </VStack>
        <VStack align='left' gap='.25rem'>
          <Text color='white' fontWeight='bold'>Communities</Text>
          <Text color='RGBA(255, 255, 255, 0.64)'>For Artists</Text>
          <Text color='RGBA(255, 255, 255, 0.64)'>Advertising</Text>
          <Text color='RGBA(255, 255, 255, 0.64)'>Investors</Text>
          <Text color='RGBA(255, 255, 255, 0.64)'>Vendors</Text>
          <Text color='RGBA(255, 255, 255, 0.64)'>Spotify for Work</Text>
        </VStack>
        <VStack align='left' gap='.25rem'>
          <Text color='white' fontWeight='bold'>Useful Links</Text>
          <Text color='RGBA(255, 255, 255, 0.64)'>Support</Text>
          <Text color='RGBA(255, 255, 255, 0.64)'>Free Mobile App</Text>
        </VStack>
        <Spacer />
        <Box align='top' gap='2rem' display='flex'>
          <Image _hover={{backgroundColor: 'blue.800'}} boxSize={25} src='f_logo_RGB-White_58.png' borderRadius='3xl'/>
          <Image _hover={{backgroundColor: 'orange.700'}} boxSize={25} src='Instagram_Glyph_White.png' borderRadius='xl' />
          <Image _hover={{backgroundColor: 'blue.400'}} boxSize={25} src='Twitter social icons - circle - white.png'  borderRadius='3xl'/>
        </Box>
      </Box>
      <Divider />
      <Box display='flex' flexDir={['column', 'row']} justifyContent='space-between' >
        <Text align={['center', 'left']} color='RGBA(255, 255, 255, 0.64)' p='.5rem'>© 2024 Spotify AB</Text>
        <Text display='flex' justifyContent='center' alignItems='center' align={['center', 'left']} color='RGBA(255, 255, 255, 0.64)' p='.5rem'>
          Made by 
          <Box ml='3px' mr='1.5px'><Gi3DStairs/></Box>
          Luis Lucero
        </Text>
      </Box>
    </Box>
  )
}

export default Footer;