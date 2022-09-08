import { React, useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react'
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import UserHome from '../components/UserHome';
import LikedTracks from './LikedTracks';
import { TokenContext } from '../Context';
import { 
  getUserProfile, 
  getUserRecents, 
  getUserPlaylists,
  getArtists,
  getRnbAlbums,
} from '../apis/spotify'

const Landing = props => {

  const [userProfile, setUserProfile] = useState(null);
  const [userRecents, setUserRecents] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [artists, setArtists] = useState(null);
  const [rnbAlbums, setRnbAlbums] = useState(null);
  const { value, value2 } = useContext(TokenContext);
  const [accessToken] = value;
  const [tokenType] = value2;

  useEffect(() => {
    const getData = async () => {
      getUserProfile(accessToken, tokenType).then((result) => {
        setUserProfile(result)
      });
      getUserRecents(accessToken, tokenType).then((result) => {
        setUserRecents(result)
      });
      getUserPlaylists(accessToken, tokenType).then((result) => {
        setUserPlaylists(result);
      });
      getArtists(accessToken, tokenType).then((result) =>{
        setArtists(result.artists);
      });
      getRnbAlbums(accessToken, tokenType).then((result) => {
        setRnbAlbums(result.albums);
      });
    }
    getData()
  }, [accessToken, tokenType])

  if (userProfile !== null && userRecents !== null && 
      userPlaylists !== null && artists !== null &&
      rnbAlbums !== null) {
    return(
      <Box display='flex'>
        <Box 
          display={['none', 'none', 'block', 'block', 'block']}
          bg='black'
          w='12%'
        >
          <LeftSideBar playlists={userPlaylists.items} />
        </Box>
        <Box 
          w={['100%', '100%', '80%']} 
          bgGradient='linear(to-b, purple.900 1%, black 99%)'
          h='100%'
        >
          <Routes>
            <Route 
              path='/' 
              element={
                <UserHome 
                  rnbAlbums={rnbAlbums} 
                  userProfile={userProfile} 
                  userRecents={userRecents} 
                  artists={artists} 
                />
              } 
            />
            <Route
              path='/likedtracks'
              element={<LikedTracks token={accessToken} type={tokenType} />}
            />
          </Routes>
        </Box>
        <Box display={['none', 'none', 'block', 'block', 'block']} w='12%' bg='black'>
          <RightSideBar />
        </Box>
      </Box>
       
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

export default Landing;