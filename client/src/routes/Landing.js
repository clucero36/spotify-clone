import { React, useState, useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react'
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import UserHome from '../components/UserHome';
import LikedTracks from './LikedTracks';
import { 
  getUserProfile, 
  getUserRecents, 
  getUserPlaylists,
  getArtists,
  getRnbAlbums,
} from '../apis/spotify'

const Landing = props => {
  // const {state} = useLocation();
  const [searchParams] = useSearchParams()
  const access_token = searchParams.get('access_token');
  const token_type = searchParams.get('token_type');
  // const access_token = state.access_token;
  // const token_type = state.token_type;
  const [userProfile, setUserProfile] = useState(null);
  const [userRecents, setUserRecents] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [artists, setArtists] = useState(null);
  const [rnbAlbums, setRnbAlbums] = useState(null);

  useEffect(() => {
    const getData = async () => {
      getUserProfile(access_token, token_type).then((result) => {
        setUserProfile(result)
      });
      getUserRecents(access_token, token_type).then((result) => {
        setUserRecents(result)
      });
      getUserPlaylists(access_token, token_type).then((result) => {
        setUserPlaylists(result);
      });
      getArtists(access_token, token_type).then((result) =>{
        setArtists(result.artists);
      });
      getRnbAlbums(access_token, token_type).then((result) => {
        setRnbAlbums(result.albums);
      });
    }
    getData();
  }, [access_token, token_type])

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
              element={<LikedTracks />}
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