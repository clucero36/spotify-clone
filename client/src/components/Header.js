import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  
  return (
    <Box p='1rem' backgroundColor='RGBA(2, 2, 2, 0.48)' >
      <Flex align='center' justify='space-between' mt='.5rem'>
        <HStack>
          <Button onClick={() => navigate(-1)} borderRadius='full' h='2rem' w='1.25rem'>
            <ChevronLeftIcon w={6} h={6} />
          </Button>
          <Button onClick={() => navigate(+1)} borderRadius='full'  h='2rem' w='1.25rem'>
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