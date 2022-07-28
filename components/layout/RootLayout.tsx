import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import Header from '../Header';

// interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box bg="tomato">
      <Header />
      {children}
    </Box>
  );
};

export default RootLayout;
