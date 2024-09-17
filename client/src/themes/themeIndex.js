import { extendTheme } from "@chakra-ui/react";
import { BoxStyles as Box } from './components/box';

export const overrides = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,

  components: {
    Box,
  },
  
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
})