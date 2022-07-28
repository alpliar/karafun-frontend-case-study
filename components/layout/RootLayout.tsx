import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

// interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box bg="tomato">{children}</Box>;
};

export default RootLayout;
