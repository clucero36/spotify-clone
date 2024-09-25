import React from 'react';
import { Link as routerLink } from 'react-router-dom';
import {
  Box,
  VStack,
  HStack,
  Icon,
  Text,
  Link,
  Image,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { IoIosHome, IoIosGlobe} from "react-icons/io";
import { BiHeartSquare } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlusSquare } from "react-icons/ai";

const LeftSideBarNA = () => {
  
  return (
    <Box p='.5rem 2.5rem 1.5rem 1.5rem' h='100vh' color='gray.300'>
      {/* Top Section of Sidebar */}
      <VStack align='left' spacing={10}  pb='1rem' h='100%' borderBottom='1px solid white'>
        {/* First 4 items on left sidebar */}
        <VStack align='left' spacing={18}>
          <Link to='/spotify' as={routerLink} >
            <Image src='Spotify_Logo_CMYK_White.png' m='1rem 0'/>
          </Link>
          <HStack>
            <Icon w={6} h={6} as={IoIosHome} />
            <Link to='/spotify' as={routerLink} >
              <Text>Home</Text>
            </Link>
          </HStack>
          <HStack>
            <Icon w={6} h={6} as={VscLibrary} />
            <Link to='/spotify/your-library' as={routerLink} >
            <Text fontSize='sm' noOfLines={1}>Your Library</Text>
            </Link>
          </HStack>
        </VStack>
        {/* bottom 2 items on left sidebar */}
        <VStack align='left' spacing={18}>
          <HStack>
            <Icon w={6} h={6} as={AiOutlinePlusSquare} />
            <Link to='/spotify/create-playlist' as={routerLink} >
              <Text fontSize='sm' noOfLines={1}>Create Playlist</Text>
            </Link>
          </HStack>
          <HStack>
            <Icon w={6} h={6} as={BiHeartSquare} />
            <Link to='/spotify/liked-songs' as={routerLink} >
              <Text fontSize='sm' noOfLines={1}>Liked Songs</Text>
            </Link>
          </HStack>
        </VStack>
        <Spacer />
        <VStack align='left' justifySelf='flex-end'>
          <HStack gap={2}>
            <Link to='/spotify/legal' as={routerLink} >
              <Text noOfLines={1} fontSize='xs'>Legal</Text>
            </Link>
            <Link to='/spotify/privacy-center' as={routerLink} >
              <Text noOfLines={1} fontSize='xs'>Privacy Center</Text>
            </Link>
          </HStack>
          <HStack gap={2}>
            <Link to='/spotify/privacy-policy' as={routerLink} >
              <Text noOfLines={1} fontSize='xs'>Privacy Policy</Text>
            </Link>
            <Link to='/spotify/cookies' as={routerLink} >
              <Text noOfLines={1} fontSize='xs'>Cookies</Text>
            </Link>
          </HStack>
          <HStack gap={2}>
            <Link to='/spotify/about-ads' as={routerLink} >
              <Text noOfLines={1} fontSize='xs'>About Ads</Text>
            </Link>
            <Link to='/spotify/accessibility' as={routerLink} >
              <Text noOfLines={1} fontSize='xs'>Accessibilty</Text>
            </Link>
          </HStack>
          <Link to='/spotify/privacy-choices' as={routerLink} >
            <Text noOfLines={1} fontSize='xs'>Your Privacy Choices</Text>
          </Link>
          <Link to='/spotify/cookies' as={routerLink} >
            <Text noOfLines={1} fontSize='xs'>Cookies</Text>
          </Link>
        </VStack>
        <Button leftIcon={<IoIosGlobe color='gray.300' />} w='75%' borderRadius='xl' color='gray.300'>English</Button>
      </VStack>
    </Box>
  )
}

export default LeftSideBarNA;