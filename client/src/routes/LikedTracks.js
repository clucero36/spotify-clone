import React, { useEffect, useState, useContext } from 'react';
import { getUsersSavedTracks } from '../apis/spotify'
import { TokenContext } from '../Context';
import Tracks from '../components/Tracks';
import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from '@chakra-ui/react';
import { FiArrowDownCircle, FiSearch, FiChevronDown } from "react-icons/fi";
import { BiHeartSquare, BiPlayCircle } from "react-icons/bi";



const LikedTracks = ({ user, avatar }) => {
  const { value, value2 } = useContext(TokenContext);
  const [accessToken] = value;
  const [tokenType] = value2;

  const [likedTracks, setLikedTracks] = useState(null);
  const [sort, setSort] = useState('Date Added')

  useEffect(() => {
    const getLikedTracks = async () => {
      getUsersSavedTracks(accessToken, tokenType).then((result) => {
        setLikedTracks(result)
      });
    };

    getLikedTracks();
  }, [accessToken, tokenType])


  if (likedTracks !== null) {
    return (
      <Box>
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
        <Box w='100%'n pt='1rem' bgGradient='linear(to-t, #111111 90%, purple.800 100%)'>
          <VStack>
            <HStack w='97%' m='0 auto' justify='space-between'>
              <HStack gap={5}>
                <Icon boxSize={75} as={BiPlayCircle} color='green.700'/>
                <Icon boxSize={25} as={FiArrowDownCircle} color='gray.400'/>
              </HStack>
              <Flex gap={5} align='center'>
                <Icon boxSize={19} as={FiSearch} color='gray.400'/>
                <Menu backgroundColor='black' position='relative' disabled>
                  <MenuButton as={Button} size='sm' rightIcon={<FiChevronDown />} _focus='none' backgroundColor='black' color='gray'>
                    {sort}
                  </MenuButton>
                  <MenuList backgroundColor='black' color='gray' >
                    <Text p='7px' fontSize='sm'>sort by</Text>
                    <MenuItem onClick={(v) => setSort(v.target.value)} value='Date Added'>Date Added</MenuItem>
                    <MenuItem onClick={(v) => setSort(v.target.value)} value='Title'>Title</MenuItem>
                    <MenuItem onClick={(v) => setSort(v.target.value)} value='Artist'>Artists</MenuItem>
                    <MenuItem onClick={(v) => setSort(v.target.value)} value='Album'>Album</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
            <Tracks likedTracks={likedTracks.items} />
          </VStack>
        </Box>
      </Box>
    )
  }
  else {
    return <Text>Loading Tracks</Text>
  }
  
}

export default LikedTracks;