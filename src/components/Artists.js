import React from 'react';
import {
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';
import ArtistCard from './ArtistCard';

const Artists = (props) => {
  const artists = props.artists;
  const renderedArtists = artists.map((artist) => {
    return <ArtistCard artist={artist} key={artist.id} />
  })
  
  return (
    <VStack p='2rem' align='left' overflow='auto'>
      <Text fontWeight='bold' fontSize='lg' pb='.5rem'>Artists You Should Listen To</Text>
      <HStack spacing='2rem' >
        {renderedArtists}
      </HStack>
    </VStack>
  )
}

export default Artists;