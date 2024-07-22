'use client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
