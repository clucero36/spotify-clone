import { React, useContext, useState, useEffect } from 'react';
import { useSearchParams, Link as routerLink} from 'react-router-dom';
import { getBrowseCategoriesPlaylists } from '../apis/spotify';
import { TokenContext } from '../Context';
import {
  Text,
  HStack,
  VStack,
  Box,
  Spacer,
  Link
} from '@chakra-ui/react';
import MusicCard from '../components/MusicCard';

const BrowseCategoriesPlaylistsNA = () => {
  let [searchParams] = useSearchParams();
  const category_id = searchParams.get('id');

  const [categoryPlaylists, setCategoryPlaylists] = useState(null);
  const { value, value2 } = useContext(TokenContext);
  const [accessToken] = value;
  const [tokenType] = value2;


  useEffect(() => {

    const getCategoryPlaylists = async () => {
      getBrowseCategoriesPlaylists(category_id, accessToken, tokenType).then((result) => {
        console.log(result);
        setCategoryPlaylists(result)
      })
    }

    getCategoryPlaylists();
  }, [category_id, accessToken, tokenType])

  if (categoryPlaylists !== null) {

    const renderedCategoryPlaylists = categoryPlaylists.playlists.items.map((playlist) => {
      return (
        <Link key={playlist.description} to={`/spotify/playlist-tracks?name=${playlist.name}&id=${playlist.id}`} as={routerLink}>
          <MusicCard image={playlist.images[0].url} title={playlist.name} />
        </Link>
      )
    });

    return (
      <VStack p={['.5rem','.5rem 2rem']} align='left' >
        <HStack>
          <Text fontWeight='bold' fontSize='lg' pb='.5rem' color='gray.300'>{`Browse ${categoryPlaylists.message} Playlists`}</Text>
          <Spacer />
          <Text display={['none', 'none', 'block']} fontWeight='bold' fontSize='xs' color='gray.300'>SEE ALL</Text>
        </HStack>
        <Box display='flex' gap='.5rem' w='100%' justifyContent='center' flexWrap='wrap' >
          {renderedCategoryPlaylists}
        </Box>
      </VStack>
    );
  }
  else {
    return <Text>Loading...</Text>
  }
}

export default BrowseCategoriesPlaylistsNA;