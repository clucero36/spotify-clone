import React, { useEffect, useState, useContext } from 'react';
import { TokenContext } from '../Context';
import { getPlaylistTracks, getPlaylistImage } from '../apis/spotify';
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
  Image
} from '@chakra-ui/react';
import { FiArrowDownCircle, FiChevronDown } from "react-icons/fi";
import { BiPlayCircle } from "react-icons/bi";

// This route is reached when a user clicks on a Featured Playlist or a Browse Category
const PlaylistTracks = () => {

  const { value, value2 } = useContext(TokenContext);
  const [accessToken] = value;
  const [tokenType] = value2;

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [playlistTracks, setPlaylistTracks] = useState(null);
  const [playlistImage, setPlaylistImage] = useState(null);
  const [sort, setSort] = useState('Date Added')

  useEffect(() => {
    const getTracks = async () => {
      getPlaylistTracks(id, accessToken, tokenType).then((result) => {
        setPlaylistTracks(result);
      });
      getPlaylistImage(id, accessToken, tokenType).then((result) => {
        console.log(result);
        setPlaylistImage(result);
      })
    };

    getTracks();
  }, [accessToken, tokenType, id])

  if (playlistTracks !== null && playlistImage !== null) {
    return (
      <Box>
        <Box bgGradient='linear(to-b, #111111 10%, purple.800 100%)'>
          <Box display='flex' flexDir={['column', 'row']} gap={15} p='15px'>
            <Box align='center'>
              <Image boxSize={200} src={playlistImage.url}/>
            </Box>
            <VStack align='left' justify='flex-end'>
              <Box>
                <Text size='xs' color='gray.300'>Public Playlist</Text>
                <Heading size='2xl' color='gray.300'>{searchParams.get('name')}</Heading>
              </Box>
            </VStack>
          </Box>
        </Box>
        <Box w='100%' pt='1rem' bgGradient='linear(to-t, #111111 90%, purple.800 100%)'>
          <VStack pb='20px'>
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