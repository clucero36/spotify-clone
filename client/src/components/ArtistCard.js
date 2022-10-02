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
      bgColor={['none', 'none', 'gray.900']}
      borderRadius='lg'
      _hover={{backgroundColor: 'gray.700'}}
    > 
      <VStack>
        <Box borderRadius='full' boxShadow='dark-lg'>
          <Image src={props.artist.images[2].url} boxSize={['128px', '128px', '170px']} borderRadius='full'/>
        </Box>
        <Box w='100%'>
          <Text textAlign={['center', 'center', 'left']} fontWeight='bold' fontSize='sm'>{props.artist.name}</Text>
          <Text textAlign={['center', 'center', 'left']} fontSize='sm'>Artist</Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default ArtistCard;