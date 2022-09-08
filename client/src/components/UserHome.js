import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Artists from '../components/Artists';
import MusicList from '../components/MusicList';
import RecentActivity from '../components/RecentActivity';


const UserHome = ({ userRecents, artists, rnbAlbums}) => {

  return (
    <Box>
      <RecentActivity recentTracks={userRecents.items} />
      <Artists artists={artists} />
      <MusicList albums={rnbAlbums} />
    </Box>
  )
};

export default UserHome;