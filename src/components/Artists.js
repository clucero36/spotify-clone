import React from 'react';
import {
  Text,
  HStack,
  VStack,
  Box,
  Spacer,
} from '@chakra-ui/react';
import ArtistCard from './ArtistCard';

const Artists = (props) => {
  const artists = props.artists;
  const renderedArtists = artists.map((artist) => {
    return <ArtistCard artist={artist} key={artist.id} />
  })
  
  return (
    <VStack p={['1rem', '1rem', '2rem']} align='left' overflowX='auto'>
      <HStack pb='.5rem'>
        <Text fontWeight='bold' fontSize='lg' >Artists You Should Listen To</Text>
        <Spacer />
        <Text display={['none', 'none', 'block']} fontWeight='bold' fontSize='xs' color='gray.300'>SEE ALL</Text>
      </HStack>
      <Box display='flex' gap={['.5rem', '.5rem', '2rem']} >
        {renderedArtists}
      </Box>
    </VStack>
  )
}

export default Artists;