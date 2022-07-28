import { Box } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

// interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box bg="tomato">{children}</Box>;
};

export default RootLayout;
