import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  StyleProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import LocaleToggle from './LocaleToggle';

const Header: React.FC = ({}) => {
  const { toggleColorMode } = useColorMode();
  const ToggleIcon = useColorModeValue(MoonIcon, SunIcon);

  const logoStyle: StyleProps = {
    filter: useColorModeValue('undefined', 'brightness(15)'),
  };

  return (
    <Flex as="header" justify="space-between">
      <Image {...logoStyle} src="/logo.svg" alt="Karafun" width={32} height="auto" />
      <HStack>
        <LocaleToggle />

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
