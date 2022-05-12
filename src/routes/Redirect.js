import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react';
import { 
  handleRedirect,
} from '../apis/spotify';

const Redirect = () => {
  const navigate = useNavigate();


  if (window.location.search) {
    handleRedirect().then((result) => {
      navigate("/landing", {
        state: {
          access_token: result.access_token,
          token_type: result.token_type,
        }
      })
    })
  }

  return (
    <Box>
      Loading...
    </Box>
  )

}


export default Redirect;
