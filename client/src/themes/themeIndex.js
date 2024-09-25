import { extendTheme } from "@chakra-ui/react";
import { BoxStyles as Box } from './components/box';

export const overrides = extendTheme({

  components: {
    Box,
    Button: { 
      baseStyle: { 
        _focus: { boxShadow: 'none' } 
      } 
    },
    Link: {
      baseStyle: { 
        _focus: { boxShadow: 'none' } 
      } 
    } 
  },
  
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})