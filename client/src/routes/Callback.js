import React, { useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react';
import { TokenContext } from '../Context';

const Callback = () => {
  // hook used to grab query parameters
  const [searchParams] = useSearchParams()
  const navigate = useNavigate();

  const { value, value2 } = useContext(TokenContext);
  const [,setAccessToken] = value;
  const [,setTokenType] = value2;

  // token & token type sent in url params from our backend


  // app sends user to userHome page and passes token & token type
  // for future requests to spotify api. 
  useEffect(() => {
    setAccessToken(searchParams.get('access_token'));
    setTokenType(searchParams.get('token_type'));
    navigate("/user")
  })
  return (
    <Box>
      Loading Your Spotify Experience
    </Box>
  )
}

export default Callback;