import { Stack } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import Header from '../Header';

// interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack as="main">
      <Header />
      <section>{children}</section>
    </Stack>
  );
};

export default RootLayout;
