import React from 'react';
import { Link as routerLink} from 'react-router-dom';
import {
  Text,
  HStack,
  VStack,
  Box,
  Spacer,
  Link
} from '@chakra-ui/react';
import MusicCard from './MusicCard';


const FeaturedPlaylistsNA = (props) => {

  const renderedPlaylists = props.playlists.map((playlist) => {
      return (
        <Link key={playlist.id} to={`/spotify/playlist-tracks?name=${playlist.name}&id=${playlist.id}&type=ft`} as={routerLink}>
          <MusicCard image={playlist.images[0].url} title={playlist.name} subtext={playlist.description}/>
        </Link>
      )
  });

  return (
    <VStack p={['.5rem','.5rem 2rem']} align='left'>
      <HStack>
        <Text fontWeight='bold' fontSize='lg' pb='.5rem' color='gray.300'>Featured Playlists</Text>
        <Spacer />
        <Text display={['none', 'none', 'block']} fontWeight='bold' fontSize='xs' color='gray.300'>SEE ALL</Text>
      </HStack>
      <Box display='flex' gap='.5rem' w='100%' justifyContent='center' flexWrap='wrap' overflow='hidden'>
        {renderedPlaylists}
      </Box>
    </VStack>
  );
}

export default FeaturedPlaylistsNA;