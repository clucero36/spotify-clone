import React from 'react';
import { Link as routerLink} from 'react-router-dom';
import {
  Text,
  HStack,
  VStack,
  Box,
  Spacer,
  Link
} from '@chakra-ui/react';
import MusicCard from './MusicCard';

const BrowseCategoriesNA = (props) => {

  const renderedCategories = props.categories.map((category) => {
    return (
      <Link key={category.id} to={`/spotify/category-playlists?id=${category.id}`} as={routerLink}>
        <MusicCard image={category.icons[0].url} title={category.name} />
      </Link>
    )
  });

  return (
    <VStack p={['.5rem','.5rem 2rem']} align='left' >
      <HStack>
        <Text fontWeight='bold' fontSize='lg' pb='.5rem' color='gray.300'>Browse Categories</Text>
        <Spacer />
        <Text display={['none', 'none', 'block']} fontWeight='bold' fontSize='xs' color='gray.300'>SEE ALL</Text>
      </HStack>
      <Box display='flex' gap='.5rem' w='100%' justifyContent='center' flexWrap='wrap' >
        {renderedCategories}
      </Box>
    </VStack>
  );
}

export default BrowseCategoriesNA;