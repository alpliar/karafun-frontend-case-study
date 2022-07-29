import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';

interface UiLinkProps {
  href: string;
  asButton?: boolean;
}

const UiLink: React.FC<PropsWithChildren<UiLinkProps>> = ({ children, href, asButton = false }) => {
  return (
    <NextLink href={href} passHref>
      {asButton && (
        <Button colorScheme="facebook" rounded="full" maxW={{ sm: 32 }} as={Link}>
          {children}
        </Button>
      )}
      {/* {!asButton && <Link>{children}</Link>} */}
    </NextLink>
  );
};

export default UiLink;
