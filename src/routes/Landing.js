import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react'
import Header from '../components/Header';
import RecentActivity from '../components/RecentActivity';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import Artists from '../components/Artists';
import MusicList from '../components/MusicList'
import { 
  getUserProfile, 
  getUserRecents, 
  getUserPlaylists,
  getArtists,
  getRnbAlbums,
} from '../apis/spotify'

const Landing = props => {
  const {state} = useLocation();
  const [userProfile, setUserProfile] = useState(null);
  const [userRecents, setUserRecents] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [artists, setArtists] = useState(null);
  const [rnbAlbums, setRnbAlbums] = useState(null);

  useEffect(() => {
    const getData = async () => {
      getUserProfile(state.access_token, state.token_type).then((result) => {
        setUserProfile(result)
      });
      getUserRecents(state.access_token, state.token_type).then((result) => {
        setUserRecents(result)
      });
      getUserPlaylists(state.access_token, state.token_type).then((result) => {
        setUserPlaylists(result);
      });
      getArtists(state.access_token, state.token_type).then((result) =>{
        setArtists(result.artists);
      });
      getRnbAlbums(state.access_token, state.token_type).then((result) => {
        setRnbAlbums(result.albums);
      });
    }
    getData();
  }, [state])

  if (userProfile !== null && userRecents !== null && 
      userPlaylists !== null && artists !== null &&
      rnbAlbums !== null) {
    return(
      <Box display='flex'>
        <Box w={['15%', '12%', '12%', '12%', '12%']} bg='black' display={['none', 'none', 'block', 'block', 'block']}>
          <LeftSideBar playlists={userPlaylists.items} />
        </Box>
        <Box w={['100%', '100%', '80%']} bgGradient='linear(to-b, purple.900 1%, black 99%)'>
          <Header 
            user={userProfile.id} 
            avatar={userProfile.images.length > 0 
              ? userProfile.images[0].url
              : 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'
            } 
          />
          <RecentActivity recentTracks={userRecents.items} />
          <Artists artists={artists} />
          <MusicList albums={rnbAlbums} />
        </Box>
        <Box w='12%' bg='black' display={['none', 'none', 'block', 'block', 'block']}>
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