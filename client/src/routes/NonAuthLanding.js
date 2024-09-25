import { React, useContext, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TokenContext } from '../Context';
import { 
  getFeaturedPlaylists,
  getBrowseCategories
} from '../apis/spotify'
import BrowseCategoriesPlaylistsNA from './BrowseCategoriesPlaylistsNA';
import PlaylistTracks from './PlaylistTracks';
import About from './About';
import FooterPage from '../components/FooterPage';
import LeftSideBarNA from '../components/LeftSideBarNA';
import SpotifyHome from '../components/SpotifyHome';
import Header from '../components/Header';
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
            <Box top='0px'>
              <Header 
                avatar={'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'} 
              />
              <Routes>
                <Route 
                  path='/' 
                  element={
                    <SpotifyHome 
                      featuredPlaylists={featuredPlaylists}
                      browseCategories={browseCategories}
                    />
                  } 
                />
                <Route 
                  path='/category-playlists' 
                  element={
                    <BrowseCategoriesPlaylistsNA 
                    />
                  } 
                />
                <Route 
                  path='/playlist-tracks' 
                  element={
                    <PlaylistTracks 
                    />
                  } 
                />
                <Route 
                  path='/about' 
                  element={
                    <About />
                  } 
                />
                <Route path='/jobs' element={ <FooterPage title={'Jobs'} /> } />
                <Route path='/for-the-record' element={ <FooterPage title={'For The Record'} /> } />
                <Route path='/for-artists' element={ <FooterPage title={'For Artists'} />} />                       
                <Route path='/advertising' element={ <FooterPage title={'Advertising'} />} />
                <Route path='/investors' element={ <FooterPage title={'Investors'} />} />
                <Route path='/vendors' element={ <FooterPage title={'Investors'} />} />
                <Route path='/spotify-for-work' element={ <FooterPage title={'Spotify For Work'}/>} />
                <Route path='/support' element={ <FooterPage title={'Support'}/>} />
                <Route path='/mobile-app' element={ <FooterPage title={'Free Mobile App'}/>} />
              </Routes>
            </Box>
            <Box>
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