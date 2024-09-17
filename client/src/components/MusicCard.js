import React from 'react';

import {
  Box,
  VStack,
  Image,
  Text,
} from '@chakra-ui/react'

const MusicCard = ({image, title, subtext}) => {

  return (
    <Box
      p={['.5rem','1rem']}
      maxW={['9rem','13rem']}
      minW='9rem'
      bgColor={['none', 'none', 'RGBA(7, 7, 7, 0.48)']}
      borderRadius='lg' 
      _hover={{backgroundColor: 'RGBA(41, 41, 41, 0.28)'}}
    >
      <VStack gap='.5rem'>
        <Box boxShadow='dark-lg' >
          <Image src={image} />
        </Box>
        <Box w='100%' pb='1rem'>
          <Text fontWeight='bold' fontSize='sm' color='gray.300'>{title}</Text>
          <Text noOfLines={2} fontSize='sm' color='RGBA(255, 255, 255, 0.64)'>{subtext}</Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default MusicCard