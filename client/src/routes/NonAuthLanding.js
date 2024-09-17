import { React, useContext, useState, useEffect } from 'react';
import { TokenContext } from '../Context';
import { 
  getFeaturedPlaylists,
  getBrowseCategories
} from '../apis/spotify'
import Header from '../components/Header';
import LeftSideBarNA from '../components/LeftSideBarNA';
import FeaturedPlaylistsNA from '../components/FeaturedPlaylistsNA';
import BrowseCategoriesNA from '../components/BrowseCategoriesNA';
import Footer from '../components/Footer';
import {
  Box,
} from '@chakra-ui/react'

const NonAuthLanding = () => {
  const { value, value2 } = useContext(TokenContext);
  const [accessToken] = value;
  const [tokenType] = value2;

  const [featuredPlaylists, setFeaturedPlaylists] = useState(null);
  const [browseCategories, setBrowseCategories] = useState(null);

  useEffect(() => {
    const getData = async () => {
      getFeaturedPlaylists(accessToken, tokenType).then((result) => {
        setFeaturedPlaylists(result)
      })
      getBrowseCategories(accessToken, tokenType).then((result) => {
        setBrowseCategories(result)
      })

    }
    getData()
  }, [accessToken, tokenType]);

  if (featuredPlaylists !== null && browseCategories !== null) {
    return(
      <>
        <Box display='flex' bg='black' minW='320px' h='100%'>
          <Box 
            w='12%'
            minW='190px'
            h='100vh'
            top='0px'
            pos='sticky'
            display={['none', 'none', 'block', 'block', 'block']}
          >
            <LeftSideBarNA />
          </Box>
          <Box 
            display='flex' 
            flexDir='column' 
            backgroundColor='RGBA(12, 12, 12, 0.80)'
            width={['100%', '100%', '88%']}
          >
            <Box>
              <Box top='0px'>
                <Header 
                  avatar={'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'} 
                />
              </Box>
              <FeaturedPlaylistsNA playlists={featuredPlaylists.playlists.items}/>
              <BrowseCategoriesNA categories={browseCategories.categories.items} />
            </Box>
            <Box >
              <Footer />
            </Box>
          </Box>
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