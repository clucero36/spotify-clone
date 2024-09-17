import React, { useEffect, useState, useContext } from 'react';
import { TokenContext } from '../Context';
import { getPlaylistTracks, getPlaylistImage, getCategoryPlaylistImage } from '../apis/spotify';
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
// A Featured Playlist is just that, a playlist
// a Browse Category is a list of playlists. A Browse Category of "New Arrivals" provides a list of New Arrivals Playlists
// 
// When a user clicks on a Featured Playlist searchParam('ft'): minimal work is done
// When a user clicks on a Browse Category searchParam('cat'), we grab the second playlist in the list of playlists: a little bit more work in done.
//
// A majority of this work is taken care of in /apis/spotify:
// we pass the searchParam('type') to getPlaylistTracks to handle the extra work needed for type 'cat'
// we use an if {} in our effect to grab the correct image for this routes page

const PlaylistTracks = () => {

  const { value, value2 } = useContext(TokenContext);
  const [accessToken] = value;
  const [tokenType] = value2;

  const [searchParams] = useSearchParams();
  const listType = searchParams.get('type');
  const id = searchParams.get('id');

  const [playlistTracks, setPlaylistTracks] = useState(null);
  const [playlistImage, setPlaylistImage] = useState(null);
  const [sort, setSort] = useState('Date Added')

  useEffect(() => {
    const getTracks = async () => {
      getPlaylistTracks(id, accessToken, tokenType, listType).then((result) => {
        setPlaylistTracks(result);
      });
      if (listType === 'ft') {
        getPlaylistImage(id, accessToken, tokenType).then((result) => {
          console.log(result);
          setPlaylistImage(result);
        })
      }
      else { // listType === 'cat'
        getCategoryPlaylistImage(id, accessToken, tokenType).then((result) => {
          console.log(result);
          setPlaylistImage(result);
        })
      }
    };

    getTracks();
  }, [accessToken, tokenType, id, listType])

  if (playlistTracks !== null && playlistImage !== null) {
    return (
      <Box>
        <Box h='15rem' bgGradient='linear(to-b, #111111 10%, purple.800 100%)'>
          <HStack h='100%' gap={15} ml='1rem'>
            <Flex boxSize={200} boxShadow='dark-lg' align='center'>
              <Image src={playlistImage.url}/>
            </Flex>
            <VStack align='left' ml='0' h='50%' gap={35}>
              <Box>
                <Text color='gray.300'>Playlist</Text>
                <Heading size='3xl' color='gray.300'>{searchParams.get('name')}</Heading>
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