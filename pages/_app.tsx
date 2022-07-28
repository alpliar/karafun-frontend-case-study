import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { appWithTranslation } from 'next-i18next';
import RootLayout from '../components/layout/RootLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
