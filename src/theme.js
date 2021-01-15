import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      a: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    mono: 'Inter',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;
