import React from 'react';
import {
  Box,
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
    <Box align='left' p={['1rem', '1rem', '2rem', '2rem', '2rem']}>
      <Text fontWeight='bold' fontSize='xl' pb='.5rem'>It'll all workout</Text>
      <Box display='flex' justifyContent='space-between' flexDirection={['row', 'row', 'column', 'column', 'column']} gap={1} >
        <Flex w={['50%', '50%', '100%']} m='0' justify='space-between' direction={['column', 'column', 'row', 'row', 'row']} gap={1}>
          {renderedTopThree}
        </Flex>
        <Flex w={['50%', '50%', '100%']} m='0' justify='space-between' direction={['column', 'column', 'row', 'row', 'row']} gap={1}>
          {renderedThreeMore}
        </Flex>
      </Box>
    </Box>
  )

}
export default RecentActivity;