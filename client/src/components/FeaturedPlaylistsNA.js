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

  console.log(props.playlists);
  const renderedPlaylists = props.playlists.map((playlist) => {
    return <MusicCard key={playlist.id} image={playlist.images[0].url} title={playlist.name} subtext={playlist.description}/>
  })

  return (
    <VStack p={['1rem', '1rem', '2rem']} align='left' overflowX='auto' overflowY='hidden'>
      <HStack>
        <Text fontWeight='bold' fontSize='lg' pb='.5rem'>Alternative R&B Forever</Text>
        <Spacer />
        <Text display={['none', 'none', 'block']} fontWeight='bold' fontSize='xs' color='gray.300'>SEE ALL</Text>
      </HStack>
      <Box display='flex' gap={['.5rem', '.5rem', '2rem']} >
        {renderedPlaylists}
      </Box>
    </VStack>
  );
}

export default FeaturedPlaylistsNA;