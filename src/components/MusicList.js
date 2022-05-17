import React from 'react';
import {
  HStack,
  VStack,
  Text,
  Spacer,
  Box
} from '@chakra-ui/react';
import MusicCard from './MusicCard';

const MusicList = props => {
  console.log(props.albums);

  const renderedAlbums = props.albums.map((album) => {
    return <MusicCard key={album.id} album={album} />
  })

  return (
    <VStack p={['1rem', '1rem', '2rem']} align='left' overflowX='auto' overflowY='hidden'>
      <HStack>
        <Text fontWeight='bold' fontSize='lg' pb='.5rem'>Alternative R&B Forever</Text>
        <Spacer />
        <Text display={['none', 'none', 'block']} fontWeight='bold' fontSize='xs' color='gray.300'>SEE ALL</Text>
      </HStack>
      <Box display='flex' gap={['.5rem', '.5rem', '2rem']} >
        {renderedAlbums}
      </Box>
    </VStack>
  )
}

export default MusicList;