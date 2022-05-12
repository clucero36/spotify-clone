import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import Playlists from './Playlists';
import { IoIosHome } from "react-icons/io";
import { BiDotsHorizontalRounded, BiSearch, BiHeartSquare } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlinePlusSquare } from "react-icons/ai";

const LeftSideBar = (props) => {
  
  return (
    <Box p='.5rem 2rem .5rem 1rem' h='100vh' sx={{ position: 'sticky', top: '0', }}>
      {/* Top Section of Sidebar */}
      <VStack align='left' spacing={6}  pb='1rem' borderBottom='1px solid white'>
        {/* First 4 items on left sidebar */}
        <VStack align='left' spacing={2}>
          <Icon w={6} h={6} as={BiDotsHorizontalRounded} />
          <HStack>
            <Icon w={4} h={4} as={IoIosHome} />
            <Text>Home</Text>
          </HStack>
          <HStack>
            <Icon w={4} h={4} as={BiSearch} />
            <Text>Search</Text>
          </HStack>
          <HStack>
            <Icon w={4} h={4} as={VscLibrary} />
            <Text>Your Library</Text>
          </HStack>
        </VStack>
        {/* bottom 2 items on left sidebar */}
        <VStack align='left' spacing={2}>
          <HStack>
            <Icon w={4} h={4} as={AiOutlinePlusSquare} />
            <Text>Create Playlist</Text>
          </HStack>
          <HStack>
            <Icon w={4} h={4} as={BiHeartSquare} />
            <Text>Your Liked Songs</Text>
          </HStack>
        </VStack>
      </VStack>
      <VStack align='left' mt='1rem'>
        <Playlists items={props.playlists} />
      </VStack>

    </Box>
  )
}

export default LeftSideBar;