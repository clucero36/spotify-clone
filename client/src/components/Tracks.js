import React from 'react';
import {
  Grid,
  GridItem, 
  VStack,
  HStack,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react'

const Tracks = ({likedTracks}) => {

  let renderedTracks = likedTracks.map((track, index) => {
    return <TrackCard key={index} track={track} index={index}/>
  })

  return (
    <VStack w='95%' m='0 auto' gap={4} >
      <Grid color='gray.400' templateColumns='repeat(40, 1fr)' gap={2} borderBottom='1px solid gray'>
        <GridItem colSpan={1}>#</GridItem>
        <GridItem colSpan={15}>TITLE</GridItem>
        <GridItem colStart={20} colSpan={9}>ALBUM</GridItem>
        <GridItem colStart={30} colSpan={10}>DATE ADDED</GridItem>
        <GridItem colSpan={1}>Time</GridItem>
      </Grid>
      <Grid color='gray.400' templateColumns='repeat(40, 1fr)' gap={3}>
        {renderedTracks}
      </Grid>
    </VStack>
  )
}

const TrackCard = ({track, index}) => {
  let date = getAddedDate(track);
  let time = getTrackDuration(track.track.duration_ms);
  if (typeof(date) !== 'string') {
    date = date.toString().concat(' ', 'days ago');
  }
  console.log(track)
  return (
    <>
      <GridItem colSpan={1} pt='7px'>
        {index+1}
      </GridItem>
      <GridItem colSpan={15}>
        <HStack align='left'>
          <Image boxSize={10} src={track.track.album.images[0].url} />
          <Flex direction='column' gap={0} align='left'>
            <Text fontSize='xs' isTruncated>{track.track.name}</Text>
            <Text fontSize='xs' isTruncated>{track.track.artists[0].name}</Text>
          </Flex>
        </HStack>
      </GridItem>
      <GridItem colStart={20} colSpan={9} isTruncated>{track.track.album.name}</GridItem>
      <GridItem colStart={30} colSpan={10}>{date}</GridItem>
      <GridItem colSpan={1}>{time}</GridItem>
    </>
  )
}

function getTrackDuration(time) {
  return (Number.parseFloat(time/1000/60).toFixed(2)).toString().replace('.', ':');
}

function getAddedDate(track) {
  const compareDate = new Date(track.added_at);
  const today = new Date();
  const daysAgo = Math.floor(Math.abs(today - compareDate)/1000/60/60/24);
  if (daysAgo < 31)
    return daysAgo;
  else {
    return compareDate.toString().slice(4, 15).replaceAll(' ', ',').replace(',', ' ');
  }  
}

export default Tracks;