import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react';


const Callback = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate();
  let access_token = searchParams.get('access_token');
  let token_type = searchParams.get('token_type');

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