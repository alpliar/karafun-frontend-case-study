import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = ({}) => {
  return (
    <Box as="header">
      <Image src="/logo.svg" alt="Karafun" width={32} height="auto" />
    </Box>
  );
};

export default Header;
