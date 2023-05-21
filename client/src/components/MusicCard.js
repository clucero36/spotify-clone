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
      p={['.5rem', '.5rem', '1rem', '1rem', '1rem']} 
      maxH={['13rem', '13rem', '17rem']} 
      w='11rem'
      bgColor={['none', 'none', 'RGBA(7, 7, 7, 0.48)']}
      borderRadius='lg' 
      _hover={{backgroundColor: 'gray.700'}}
    >
      <VStack gap='1rem'>
        <Box boxShadow='dark-lg' >
          <Image src={image} />
        </Box>
        <Box w='100%'>
          <Text pb='8px' fontWeight='bold' fontSize='sm'>{title}</Text>
          <Text noOfLines={2} fontSize='sm' color='RGBA(255, 255, 255, 0.64)'>{subtext}</Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default MusicCard