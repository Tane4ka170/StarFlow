import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: "'Arial', sans-serif",
      },
    },
  },
});

export default theme;
