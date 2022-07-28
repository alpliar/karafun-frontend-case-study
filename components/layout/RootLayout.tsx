import { Stack } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import Header from '../Header';

// interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack>
      <Header />
      {children}
    </Stack>
  );
};

export default RootLayout;
