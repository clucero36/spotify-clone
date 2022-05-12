import React from 'react';
import {
  VStack,
  Flex,
  Text,
} from '@chakra-ui/react';
import RecentCard from './RecentCard';

const RecentActivity = (props) => {
  const topThree = props.recentTracks.slice(0, 3);
  const renderedTopThree = topThree.map((topItem) => {
    return <RecentCard img={topItem.track.album.images[2].url} title={topItem.track.album.name} key={topItem.track.id} />
  }) 
  const threeMore = props.recentTracks.slice(3, 6);
  const renderedThreeMore = threeMore.map((topItem) => {
    return <RecentCard img={topItem.track.album.images[2].url} title={topItem.track.album.name} key={topItem.track.id} />
  })

  return (
    <VStack align='left' p='2rem'>
      <Text fontWeight='bold' fontSize='xl' pb='.5rem'>It'll all workout</Text>
      <Flex w='100%' m='0' justify='space-between'>
        {renderedTopThree}
      </Flex>
      <Flex w='100%' m='0' justify='space-between'>
        {renderedThreeMore}
      </Flex>
    </VStack>
  )

}
export default RecentActivity;