import React from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';

const Playlists = (props) => {

  const renderedList = props.items.map((playlist) => {
    return(
      <Box pt='.25rem' key={playlist.name}>
        <Text isTruncated>{playlist.name}</Text>
      </Box>
    ) 
  })  

  return (
    <Box>
      {renderedList}
    </Box>
  )
}

export default Playlists;