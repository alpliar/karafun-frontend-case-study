import { Flex, Icon, Text } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { IconType } from 'react-icons';

interface IconWithTextProps {
  icon: IconType;
  color?: string;
}

const IconWithText: React.FC<PropsWithChildren<IconWithTextProps>> = ({ children, icon, color }) => {
  return (
    <Flex as={Text} align="center" gap={2} color={color}>
      <Icon as={icon}>IconWithText</Icon>
      <Text as="span">{children}</Text>
    </Flex>
  );
};

export default IconWithText;
