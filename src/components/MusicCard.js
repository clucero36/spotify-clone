import React from 'react';

import {
  Box,
  VStack,
  Image,
  Text,
} from '@chakra-ui/react'


const MusicCard = (props) => {
  console.log(props.album)

  return (
    <Box p='1rem' minW='130px' borderRadius='lg' bgColor='gray.900'>
      <VStack align='left'>
        <Image src={props.album.images[0].url} boxSize='150px'/>
        <VStack align='left' spacing={0}>
          <Text fontWeight='bold' fontSize='sm'>{props.album.name}</Text>
          <Text fontSize='sm'>{props.album.artists[0].name}</Text>
        </VStack>
      </VStack>
    </Box>
  )
}

export default MusicCard