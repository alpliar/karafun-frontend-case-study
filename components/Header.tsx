import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = ({}) => {
  const { toggleColorMode } = useColorMode();
  const router = useRouter();
  const ToggleIcon = useColorModeValue(MoonIcon, SunIcon);
  return (
    <Flex as="header" justify="space-between">
      <Image src="/logo.svg" alt="Karafun" width={32} height="auto" />
      <HStack>
        {router.locales?.map((locale) => {
          return (
            <NextLink key={locale} href={router.asPath} passHref locale={locale}>
              <Link fontWeight={router.locale === locale ? 'bold' : undefined}>{locale}</Link>
            </NextLink>
          );
        })}

        <IconButton
          size="sm"
          onClick={toggleColorMode}
          aria-label="fazza"
          icon={<Icon as={ToggleIcon} />}
        >
          toggle theme
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default Header;
