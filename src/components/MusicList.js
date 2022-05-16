import React from 'react';
import {
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react';
import MusicCard from './MusicCard';

const MusicList = props => {
  console.log(props.albums);

  const renderedAlbums = props.albums.map((album) => {
    return <MusicCard key={album.id} album={album} />
  })

  return (
    <VStack p='2rem' align='left' overflow='auto'>
      <Text fontWeight='bold' fontSize='lg' pb='.5rem'>Alternative R&B Forever</Text>
      <HStack spacing='2rem'>
        {renderedAlbums}
      </HStack>
    </VStack>
  )
}

export default MusicList;