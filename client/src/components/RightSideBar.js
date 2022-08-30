import React from 'react';
import {
  Box,
  Avatar,
  VStack,
  HStack,
  Text,
  Icon
} from '@chakra-ui/react';
import { AiOutlineUserAdd, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { GiSoundWaves } from "react-icons/gi";
import { VscChromeRestore } from "react-icons/vsc";

const RightSideBar = () => {

  return (
    <VStack align='left' p='.5rem' h='100vh' spacing={5} sx={{ position: 'sticky', top: '0', }}>
      {/* right bar heading */}
      <VStack align='left' spacing={1}>
        <Box align='right'>
          <Icon w={4} h={4} as={AiOutlineMinus} />
          <Icon w={4} h={4} as={VscChromeRestore} ml='1.5rem'/>
          <Icon w={4} h={4} as={AiOutlineClose} ml='1.5rem'/>
        </Box>
        <HStack justify='space-between' >
          <Text fontSize='sm'>Friend Activity</Text>
          <Icon w={4} h={4} as={AiOutlineUserAdd}/>
        </HStack>
      </VStack>
      {/*  verticle stack of users following*/}
      <VStack align='left' spacing={5}>
        <HStack justify='space-between' align='top'>
          <HStack>
            <Avatar w={10} h={10} src='https://bit.ly/dan-abramov' mb='.5rem' />
            <VStack spacing={.025} align='left'>
              <Text fontSize='xs'>Name</Text>
              <Text fontSize='xs'>Song</Text>
              <Text fontSize='xs'>Album</Text>
            </VStack>
          </HStack>
          <Icon w={4} h={4} as={GiSoundWaves}/>
        </HStack>
        <HStack justify='space-between' align='top'>
          <HStack>
            <Avatar w={10} h={10} src='https://bit.ly/dan-abramov' mb='.5rem' />
            <VStack spacing={.025} align='left'>
              <Text fontSize='xs'>Name</Text>
              <Text fontSize='xs'>Song</Text>
              <Text fontSize='xs'>Album</Text>
            </VStack>
          </HStack>
          <Icon w={4} h={4} as={GiSoundWaves}/>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default RightSideBar;