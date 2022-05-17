import React from 'react';

import {
  Box,
  VStack,
  Image,
  Text,
} from '@chakra-ui/react'


const MusicCard = (props) => {

  return (
    <Box variant='card'
      p={['.5rem', '.5rem', '1rem', '1rem', '1rem']} 
      h={['13rem', '13rem', '17rem']} 
      minW={['9rem', '9rem', '13rem']} 
      bgColor={['none', 'none', 'gray.900']}
      borderRadius='lg' 
    >
      <VStack align='left'>
        <Image src={props.album.images[0].url} boxSize={['150px', '150px', '170px']}/>
        <VStack align='left' spacing={0} pb='2rem'>
          <Text fontWeight='bold' fontSize='sm'>{props.album.name}</Text>
          <Text fontSize='sm'>{props.album.artists[0].name}</Text>
        </VStack>
      </VStack>
    </Box>
  )
}

export default MusicCard