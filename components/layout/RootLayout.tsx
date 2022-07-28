import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default RootLayout;
