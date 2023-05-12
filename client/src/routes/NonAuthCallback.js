import React, { useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react';
import { TokenContext } from '../Context';

  // We set Access Token & Token Type as our apps context. 
  // this allows app to access the token regardless of page. 
  // 
  // Why Context? when passing token through parameters or location state,
  // landing page would re render & we would lose our state. 
  // useContext hook solved this problem. 
const NonAuthCallback = () => {

  const [searchParams] = useSearchParams()
  const navigate = useNavigate();
  const { value, value2 } = useContext(TokenContext);
  const [,setAccessToken] = value;
  const [,setTokenType] = value2;

  // app sends user to userHome page & sets context of our app
  useEffect(() => {
    setAccessToken(searchParams.get('access_token'));
    setTokenType(searchParams.get('token_type'));
    navigate("/spotify")
  })
  return (
    <Box>
      Loading Your Spotify Experience
    </Box>
  )
}

export default NonAuthCallback;