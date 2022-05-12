import React from 'react';
import {
  Box,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';

const ArtistCard = (props) => {
  return (
    <Box p='1rem' minW='130px' borderRadius='lg' bgColor='gray.900'>
      <VStack align='left'>
        <Image src={props.artist.images[0].url} boxSize='150px' borderRadius='full'/>
        <VStack align='left' spacing={0}>
          <Text fontWeight='bold' fontSize='sm'>{props.artist.name}</Text>
          <Text fontSize='sm'>Artist</Text>
        </VStack>
      </VStack>
    </Box>
  )
}

export default ArtistCard;