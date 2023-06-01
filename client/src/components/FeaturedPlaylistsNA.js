import React from 'react';
import {
  Text,
  HStack,
  VStack,
  Box,
  Spacer,
} from '@chakra-ui/react';
import MusicCard from './MusicCard';


const FeaturedPlaylistsNA = (props) => {

  const renderedPlaylists = props.playlists.map((playlist) => {
    if (playlist.images[0])
      return <MusicCard key={playlist.id} image={playlist.images[0].url} title={playlist.name} subtext={playlist.description}/>
    else 
      return <MusicCard key={playlist.id} image={'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'} title={playlist.name} subtext={playlist.description}/>
  });

  return (
    <VStack p='.5rem 2rem' align='left' >
      <HStack>
        <Text fontWeight='bold' fontSize='lg' pb='.5rem'>Alternative R&B Forever</Text>
        <Spacer />
        <Text display={['none', 'none', 'block']} fontWeight='bold' fontSize='xs' color='gray.300'>SEE ALL</Text>
      </HStack>
      <Box display='flex' gap='.5rem' w='100%' justifyContent='space-between' flexWrap='wrap' maxH='18rem' overflow='hidden'>
        {renderedPlaylists}
      </Box>
    </VStack>
  );
}

export default FeaturedPlaylistsNA;