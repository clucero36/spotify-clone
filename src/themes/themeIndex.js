import { extendTheme } from "@chakra-ui/react";
import { BoxStyles as Box } from './components/box';

export const overrides = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,

  components: {
    Box,
  },
  
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  }
})