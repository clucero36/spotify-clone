import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Artists from '../components/Artists';
import MusicList from '../components/MusicList';
import Header from '../components/Header';
import RecentActivity from '../components/RecentActivity';


const UserHome = ({userProfile, userRecents, artists, rnbAlbums}) => {

  return (
    <Box>
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
  )
};

export default UserHome;