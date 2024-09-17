import React, { useEffect, useState, useContext } from 'react';
import { TokenContext } from '../Context';
import { getPlaylistTracks } from '../apis/spotify';
import { useSearchParams } from 'react-router-dom';
import Tracks from '../components/Tracks';

import {
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from '@chakra-ui/react';
import { FiArrowDownCircle, FiChevronDown } from "react-icons/fi";
import { BiPlayCircle } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";


const PlaylistTracks = () => {

  const { value, value2 } = useContext(TokenContext);
  const [accessToken] = value;
  const [tokenType] = value2;

  const [searchParams] = useSearchParams();
  const listType = searchParams.get('type')

  const [playlistTracks, setPlaylistTracks] = useState(null);
  const [sort, setSort] = useState('Date Added')

  useEffect(() => {
    const getTracks = async () => {
      getPlaylistTracks(searchParams.get('id'), accessToken, tokenType, listType).then((result) => {
        setPlaylistTracks(result)
      });
    };

    getTracks();
  }, [accessToken, tokenType, searchParams, listType])

  if (playlistTracks !== null) {
    return (
      <Box>
        <Box h='15rem'>
          <HStack h='100%' gap={15} ml='1rem'>
            <Flex boxSize={200} boxShadow='dark-lg' align='center'>
              <Icon w='10%' m='0 auto' as={AiFillHeart} boxSize='101' color='white'/>
            </Flex>
            <VStack align='left' ml='0' h='50%' gap={35}>
              <Box>
                <Text>Playlist</Text>
                <Heading size='3xl'>{searchParams.get('name')}</Heading>
              </Box>
            </VStack>
          </HStack>
        </Box>
        <Box w='100%' pt='1rem' bgGradient='linear(to-t, #111111 90%, purple.800 100%)'>
          <VStack>
            <HStack w='97%' m='0 auto' justify='space-between'>
              <HStack gap={5}>
                <Icon boxSize={75} as={BiPlayCircle} color='green.700'/>
                <Icon boxSize={25} as={FiArrowDownCircle} color='gray.400'/>
              </HStack>
              <Flex gap={5} align='center' display={['none', 'block']}>
                <Menu backgroundColor='black' position='relative' disabled>
                  <MenuButton as={Button} size='sm' rightIcon={<FiChevronDown />} backgroundColor='black' color='gray'>
                    {sort}
                  </MenuButton>
                  <MenuList backgroundColor='black' color='gray'>
                    <Text p='7px' fontSize='sm'>sort by</Text>
                    <MenuItem onClick={(v) => setSort(v.target.value)} value='Date Added'>Date Added</MenuItem>
                    <MenuItem onClick={(v) => setSort(v.target.value)} value='Title'>Title</MenuItem>
                    <MenuItem onClick={(v) => setSort(v.target.value)} value='Artist'>Artists</MenuItem>
                    <MenuItem onClick={(v) => setSort(v.target.value)} value='Album'>Album</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
            <Tracks tracks={playlistTracks.items} />
          </VStack>
        </Box>
      </Box>
    )
  }
  else {
    return <Text>Loading...</Text>
  }
  
}


export default PlaylistTracks;