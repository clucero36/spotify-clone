import React from 'react';
import {
  Box,
  Text,
  Image,
  HStack
} from '@chakra-ui/react';
// [0em, 30em 480px, 48em 768px, 62em 992px, 80em 1280px, 96em 1536px]

const RecentCard = (props) => {
  return (
    <Box w='100%' borderRadius='md' bgColor='gray.900' overflow='hidden'>
      <HStack align='center'>
        <Image src={props.img} borderRadius='md' />
        <Text isTruncated> {props.title}</Text>
      </HStack>
    </Box>
  )
}

export default RecentCard;