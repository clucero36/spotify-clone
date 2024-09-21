import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import FeaturedPlaylistsNA from '../components/FeaturedPlaylistsNA';
import BrowseCategoriesNA from './BrowseCategoriesNA';

const SpotifyHome = ({ featuredPlaylists, browseCategories }) => {

  return (
    <Box>
      <FeaturedPlaylistsNA playlists={featuredPlaylists.playlists.items}/>
      <BrowseCategoriesNA categories={browseCategories.categories.items} />
    </Box>
  )
};

export default SpotifyHome;