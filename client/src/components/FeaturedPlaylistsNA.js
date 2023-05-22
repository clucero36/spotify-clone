import React, { useState, useEffect } from 'react';
import {
  Text,
  HStack,
  VStack,
  Box,
  Spacer,
} from '@chakra-ui/react';
import MusicCard from './MusicCard';


const FeaturedPlaylistsNA = (props) => {

  console.log(props.playlists)
  const [numToMap, setNumToMap] = useState(8)

  const toEightHandler = () => setNumToMap(8);
  const toSevenHandler = () => setNumToMap(7);
  const toSixHandler = () => setNumToMap(6);
  const toFiveHandler = () => setNumToMap(5);
  const toFourHandler = () => setNumToMap(4);
  const toThreeHandler = () => setNumToMap(3);

  useEffect(() => {

    const eightCardWitdhMax = window.matchMedia("(min-width: 1850px)");
    eightCardWitdhMax.addEventListener("change", toEightHandler);

    const sevenCardWidthMax = window.matchMedia("(min-width: 1680px) and (max-width: 1850px)");
    sevenCardWidthMax.addEventListener( "change", toSevenHandler)

    const sixCardWidthMax = window.matchMedia("(min-width: 1600px)");
    sixCardWidthMax.addEventListener( "change", toSixHandler);

    const fiveCardWidthMax = window.matchMedia("(min-width: 1450px)");
    fiveCardWidthMax.addEventListener( "change", toFiveHandler);

    const fourCardWidthMax = window.matchMedia("(min-width: 1250px)");
    fourCardWidthMax.addEventListener( "change", toFourHandler);

    const threeCardWidthMax = window.matchMedia("(min-width: 1025px)");
    threeCardWidthMax.addEventListener("change", toThreeHandler);

    return () => {
      eightCardWitdhMax.removeEventListener("change", toEightHandler);
      sevenCardWidthMax.removeEventListener("change", toSevenHandler);
      sixCardWidthMax.removeEventListener("change", toSixHandler);
      fiveCardWidthMax.removeEventListener("change", toFiveHandler);
      fourCardWidthMax.removeEventListener("change", toFourHandler);
      threeCardWidthMax.removeEventListener("change", toThreeHandler);
    };

  }, [])

  const renderedPlaylists = props.playlists.slice(0, numToMap).map((playlist) => {
    if (playlist.images[0])
      return <MusicCard key={playlist.id} image={playlist.images[0].url} title={playlist.name} subtext={playlist.description}/>
    else 
      return <MusicCard key={playlist.id} image={'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'} title={playlist.name} subtext={playlist.description}/>
  });

  return (
    <VStack p='.5rem 2rem' align='left' >
      <HStack>
        <Text fontWeight='bold' fontSize='lg' pb='.5rem'>Alternative R&B Forever</Text>
        <Spacer />
        <Text display={['none', 'none', 'block']} fontWeight='bold' fontSize='xs' color='gray.300'>SEE ALL</Text>
      </HStack>
      <Box display='flex' gap='.5rem' w='100%' justifyContent='space-between'>
        {renderedPlaylists}
      </Box>
    </VStack>
  );
}

export default FeaturedPlaylistsNA;