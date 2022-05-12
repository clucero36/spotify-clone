import React from 'react';
import {
  Box,
  Text,
  Image,
  HStack
} from '@chakra-ui/react';

const RecentCard = (props) => {
  return (
    <Box w={['7rem', '10rem', '10rem', '15rem', '26rem']} borderRadius='lg' bgColor='gray.900'>
      <HStack align='center'>
        <Image src={props.img} borderRadius='lg' />
        <Text> {props.title}</Text>
      </HStack>
    </Box>
  )
}

export default RecentCard;