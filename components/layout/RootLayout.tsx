import { Box } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const { t } = useTranslation('common');
  return (
    <Box bg="tomato">
      <Head>
        <title>t('common:meta.title')</title>
        <meta name="description" content={t('common:meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Box>
  );
};

export default RootLayout;
