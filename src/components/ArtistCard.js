import React from 'react';
import {
  Box,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';

const ArtistCard = (props) => {
  return (
    <Box 
      p={['.5rem', '.5rem', '1rem', '1rem', '1rem']} 
      h={['13.5rem', '13.5rem', '17rem']} 
      minW={['9rem', '9rem', '13rem']} 
      borderRadius='lg' bgColor='gray.900'
    > 
      <VStack align='left' >
        <Image src={props.artist.images[2].url} boxSize={['128px', '128px', '170px']} borderRadius='full'/>
        <VStack align='left' spacing={0}>
          <Text fontWeight='bold' fontSize='sm'>{props.artist.name}</Text>
          <Text fontSize='sm'>Artist</Text>
        </VStack>
      </VStack>
    </Box>
  )
}

export default ArtistCard;