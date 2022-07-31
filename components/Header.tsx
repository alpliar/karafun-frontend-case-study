import { Box, Flex, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = ({}) => {
  const router = useRouter();
  return (
    <Flex as="header" justify="space-between">
      <Image src="/logo.svg" alt="Karafun" width={32} height="auto" />
      <Box>
        <NextLink href={router.asPath} passHref locale="fr">
          fr
        </NextLink>
        {` `}/{` `}
        <NextLink href={router.asPath} passHref locale="en">
          en
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Header;
