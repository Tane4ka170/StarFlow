import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ChakraProvider theme={theme}>
        <body>{children}</body>
      </ChakraProvider>
    </html>
  );
}
