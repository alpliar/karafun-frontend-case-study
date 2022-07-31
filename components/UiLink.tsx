import { Box, Button, ColorProps, Link, ThemingProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import { buttonStyle } from './UiButton';

interface UiLinkProps {
  href: string;
  asButton?: boolean;
  color?: ColorProps['color'];
  variant?: ThemingProps['variant'];
}

const UiLink: React.FC<PropsWithChildren<UiLinkProps>> = ({
  children,
  href,
  asButton = false,
  color = undefined,
  variant = 'solid',
}) => {
  return (
    <Box pt={{ base: 2, lg: 8 }} pb={{ base: 2, lg: 8 }}>
      <NextLink href={href} passHref>
        {asButton ? (
          <Button color={color} variant={variant} as={Link} {...buttonStyle}>
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
