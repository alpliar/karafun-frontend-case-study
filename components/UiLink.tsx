import { Box, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';

interface UiLinkProps {
  href: string;
  asButton?: boolean;
}

const UiLink: React.FC<PropsWithChildren<UiLinkProps>> = ({ children, href, asButton = false }) => {
  return (
    <Box pt={{ base: 2, lg: 8 }} pb={{ base: 2, lg: 8 }}>
      <NextLink href={href} passHref>
        {asButton ? (
          <Button colorScheme="facebook" rounded="full" maxW={{ sm: 32 }} as={Link}>
            {children}
          </Button>
        ) : (
          <Link>{children}</Link>
        )}
      </NextLink>
    </Box>
  );
};

export default UiLink;
