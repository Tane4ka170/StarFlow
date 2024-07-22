import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Akshar, sans-serif',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Akshar, sans-serif',
      },
    },
  },
});

export default theme;
