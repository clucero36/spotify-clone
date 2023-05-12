import { React, useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react'
import Header from '../components/Header';
import RightSideBar from '../components/RightSideBar';
import { TokenContext } from '../Context';

const NonAuthLanding = () => {
  const { value, value2 } = useContext(TokenContext);
  const [accessToken] = value;
  const [tokenType] = value2;

  console.log("Non Auth Landing Rerendered")
  if (accessToken && tokenType) {
    return(
      <>
        <Box display='flex'>
          <Box 
            display={['none', 'none', 'block', 'block', 'block']}
            bg='black'
            w='12%'
          >
          </Box>
          <Box 
            w={['100%', '100%', '80%']} 
            bgGradient='linear(to-b, purple.900 1%, black 99%)'
            h='100%'
          >
            <Header 
              avatar={'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'} 
            />
            <Routes>
            </Routes>
          </Box>
          <Box display={['none', 'none', 'block', 'block', 'block']} w='12%' bg='black'>
            <RightSideBar />
          </Box>
        </Box>
        <Box w='100%' pos='sticky' bottom='0px'>
        </Box>
      </>
    )
  }
  else {    
    return (
      <Box>
        Loading...
      </Box>
    )
  }
}

export default NonAuthLanding;