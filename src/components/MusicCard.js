import React from 'react';

import {
  Box,
  VStack,
  Image,
  Text,
} from '@chakra-ui/react'


const MusicCard = (props) => {

  return (
    <Box 
      p={['.5rem', '.5rem', '1rem', '1rem', '1rem']} 
      h={['13.5rem', '13.5rem', '17rem']} 
      minW={['9rem', '9rem', '13rem']} 
      borderRadius='lg' bgColor='gray.900'
    >
      <VStack align='left'>
        <Image src={props.album.images[0].url} boxSize={['150px', '150px', '170px']}/>
        <VStack align='left' spacing={0}>
          <Text fontWeight='bold' fontSize='sm'>{props.album.name}</Text>
          <Text fontSize='sm'>{props.album.artists[0].name}</Text>
        </VStack>
      </VStack>
    </Box>
  )
}

export default MusicCard