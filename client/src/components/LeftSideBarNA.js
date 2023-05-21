import React from 'react';
import { Link as routerLink} from 'react-router-dom';
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
import { BiSearch, BiHeartSquare } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlusSquare } from "react-icons/ai";

const LeftSideBarNA = () => {
  return (
    <Box p='.5rem 2.5rem 1.5rem 1.5rem' h='100vh' sx={{ position: 'sticky', top: '0', }} >
      {/* Top Section of Sidebar */}
      <VStack align='left' spacing={10}  pb='1rem' h='100%' borderBottom='1px solid white'>
        {/* First 4 items on left sidebar */}
        <VStack align='left' spacing={18}>
          <Image src='Spotify_Logo_CMYK_White.png' m='1rem 0'/>
          <HStack>
            <Icon w={6} h={6} as={IoIosHome} />
            <Text>Home</Text>
          </HStack>
          <HStack>
            <Icon w={6} h={6} as={BiSearch} />
            <Text fontSize='sm'>Search</Text>
          </HStack>
          <HStack>
            <Icon w={6} h={6} as={VscLibrary} />
            <Text fontSize='sm' noOfLines={1}>Your Library</Text>
          </HStack>
        </VStack>
        {/* bottom 2 items on left sidebar */}
        <VStack align='left' spacing={18}>
          <HStack>
            <Icon w={6} h={6} as={AiOutlinePlusSquare} />
            <Text fontSize='sm' noOfLines={1}>Create Playlist</Text>
          </HStack>
          <HStack>
            <Icon w={6} h={6} as={BiHeartSquare} />
            <Link to='#' as={routerLink} >
              <Text fontSize='sm' noOfLines={1}>Liked Songs</Text>
            </Link>
          </HStack>
        </VStack>
        <Spacer />
        <VStack align='left' justifySelf='flex-end'>
          <HStack gap={2}>
            <Text noOfLines={1} fontSize='xs'>Legal</Text>
            <Text noOfLines={1} fontSize='xs'>Privacy Center</Text>
          </HStack>
          <HStack gap={2}>
            <Text noOfLines={1} fontSize='xs'>Privacy Policy</Text>
            <Text noOfLines={1} fontSize='xs'>Cookies</Text>
          </HStack>
          <HStack gap={2}>
            <Text noOfLines={1} fontSize='xs'>About Ads</Text>
            <Text noOfLines={1} fontSize='xs'>Accessibilty</Text>
          </HStack>
          <Text noOfLines={1} fontSize='xs'>Your Privacy Choices</Text>
          <Text noOfLines={1} fontSize='xs'>Cookies</Text>
        </VStack>
        <Button leftIcon={<IoIosGlobe />} w='75%' borderRadius='xl'>English</Button>
      </VStack>
    </Box>
  )
}

export default LeftSideBarNA;