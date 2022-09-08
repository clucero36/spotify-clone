import React, { useEffect, useState } from 'react';
import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Heading,
  Avatar
} from '@chakra-ui/react';
import { 
  getUsersSavedTracks
} from '../apis/spotify'
import { BiHeartSquare } from "react-icons/bi";

const LikedTracks = ({token, type, user, avatar}) => {

  const [likedTracks, setLikedTracks] = useState(null);

  useEffect(() => {
    const getLikedTracks = async () => {
      getUsersSavedTracks(token, type).then((result) => {
        setLikedTracks(result)
      });
    };

    getLikedTracks();
  }, [token, type])
  console.log(likedTracks);
  return (
    <Box h='15rem'>
      <HStack h='100%'>
        <Icon boxSize={250} as={BiHeartSquare} color='purple.200'/>
        <VStack align='left' m='0' h='50%' gap={35}>
          <Box>
            <Text>Playlist</Text>
            <Heading size='3xl'>Liked Tracks</Heading>
          </Box>
          <HStack>
            <Avatar size='xs' src={avatar} />
            <Text>{user}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  )
}

export default LikedTracks;