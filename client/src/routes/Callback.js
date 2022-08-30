import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react';


const Callback = () => {
  // hook used to grab query parameters
  const [searchParams] = useSearchParams()
  const navigate = useNavigate();
  // token & token type sent in url params from our backend
  let access_token = searchParams.get('access_token');
  let token_type = searchParams.get('token_type');

  // app sends user to userHome page and passes token & token type
  // for future requests to spotify api. 
  useEffect(() => {
    navigate("/user", {
      state: {
        access_token: access_token,
        token_type: token_type,
      }
    })
  })
  return (
    <Box>
      Loading Your Spotify Experience
    </Box>
  )
}

export default Callback;