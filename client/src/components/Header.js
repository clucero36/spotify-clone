import React from 'react';

import {
  Box,
  Button,
  Flex,
  HStack,
  Avatar,
} from '@chakra-ui/react';
import { 
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';


const Header = props => {
  return (
    <Box p='.5rem 2rem 10px 2rem' backgroundColor='RGBA(2, 2, 2, 0.48)' >
      <Flex align='center' justify='space-between'>
        <HStack>
          <Button borderRadius='full' h='2rem' w='1.25rem'>
            <ChevronLeftIcon w={6} h={6} />
          </Button>
          <Button borderRadius='full'  h='2rem' w='1.25rem'>
            <ChevronRightIcon w={6} h={6} />
          </Button>
        </HStack>
        <Button p='0 .2rem 0 .2rem' borderRadius='10em' h='2rem'>
          <HStack>
            <Avatar size='xs' src={props.avatar} />
            <ChevronDownIcon w={3} h={3} />
          </HStack>
        </Button>
      </Flex>
    </Box>
  )
}

export default Header;