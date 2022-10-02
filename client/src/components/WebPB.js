import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Image,
  HStack,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineHeart, AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import { BiRepeat } from "react-icons/bi";

const track = {
  name: "",
  album: {
    images: [
      { url: "" }
    ]
  },
  artists: [
    { name: "" }
  ]
};

const WebPB = (props) => {

  const [player, setPlayer] = useState(null);
  const [is_paused, setPaused] = useState(false);
  const [, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: cb => { cb(props.token); },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
      player.addListener('player_state_changed', (state => {
        if (!state) 
          return
        console.log("player_state_change: ", state)
        setTrack(state.track_window.current_track);
        setPaused(state.paused);

        player.getCurrentState().then(state => {
          (!state)? setActive(false) : setActive(true);
        });
      }));
      player.connect().then(success => {
        if (success)
          console.log('The Web Playback SDK successfuly connected to Spotify');
      });
    };
  }, [props.token]);

  console.log(current_track);

  return (
    <Box w='100%' bgGradient='linear(to-t, #111111 100%, purple.900 100%)' p='.75rem' borderTop='1px solid #2d2d2d'>
      <HStack justify='space-between' w='95%' gap={0}>
        <HStack>
          <Image boxSize={50} src={current_track.album.images[0].url} fallbackSrc='https://via.placeholder.com/150'/>
          <Flex direction='column' align='left' gap={-1}>
            <Text fontSize='sm' fontWeight='bold'>{current_track.name}</Text>
            <Text fontSize='sm'>{current_track.artists[0].name}</Text>
          </Flex>
          <Icon as={AiOutlineHeart} pl='5px' color='gray.300'/>
        </HStack>
        <HStack justify='sapce-around' gap={11}>
          <Icon boxSize={17} as={FaRandom} color='gray.300'/>
          <Icon boxSize={25} as={AiFillStepBackward} color='gray.300' onClick={() => player.previousTrack() } />
          <Button onClick={() => player.togglePlay() } >
            { is_paused ? "PLAY" : "PAUSE" }
          </Button>
          <Icon boxSize={25} as={AiFillStepForward} color='gray.300' onClick={() => player.nextTrack() } />
          <Icon boxSize={21} as={BiRepeat} color='gray.300' />
        </HStack>
        <HStack> 
          <Icon as={FaRandom} color='gray.300'/>
          <Icon as={FaRandom} color='gray.300'/>
          <Icon as={FaRandom} color='gray.300'/>
        </HStack>
      </HStack>
    </Box>
  )
}

export default WebPB;