import { React, useContext, useState, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react'
import { TokenContext } from '../Context';
import { 
  getFeaturedPlaylists,
} from '../apis/spotify'
import Header from '../components/Header';
import LeftSideBarNA from '../components/LeftSideBarNA';
import FeaturedPlaylistsNA from '../components/FeaturedPlaylistsNA';

const NonAuthLanding = () => {
  const { value, value2 } = useContext(TokenContext);
  const [accessToken] = value;
  const [tokenType] = value2;

  const [featuredPlaylists, setFeaturedPlaylists] = useState(null);

  useEffect(() => {
    const getData = async () => {
      getFeaturedPlaylists(accessToken, tokenType).then((result) => {
        setFeaturedPlaylists(result)
      })
    }
    getData()
  }, [accessToken, tokenType]);

  if (featuredPlaylists !== null) {
    return(
      <>
        <Box display='flex' justifyContent='space-around'>
          <Box 
            w='12%'
            minW='190px'
            display={['none', 'none', 'block', 'block', 'block']}
            bg='black'
          >
            <LeftSideBarNA />
          </Box>
          <Box 
            backgroundColor='RGBA(12, 12, 12, 0.80)'
            width='88%'
          >
            <Header 
              avatar={'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'} 
            />
            <FeaturedPlaylistsNA playlists={featuredPlaylists.playlists.items}/>
            <FeaturedPlaylistsNA playlists={featuredPlaylists.playlists.items}/>
            <Routes>
            </Routes>
          </Box>
        </Box>
        <Box pos='sticky' bottom='0px'>
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