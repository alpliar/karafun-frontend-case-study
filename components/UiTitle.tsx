import { Heading, Text } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

interface UiTitleProps {
  title?: string;
}

const UiTitle: React.FC<PropsWithChildren<UiTitleProps>> = ({ children, title = undefined }) => {
  return (
    <Heading
      fontSize="5xl"
      lineHeight={{ base: '1em', md: '1.25em' }}
      whiteSpace="pre-wrap"
      maxWidth="3xl"
    >
      {title && (
        <>
          <Text as="span" color="blue.100">
            {title}
          </Text>
          {'\n'}
        </>
      )}
      <Text as="span">{children}</Text>
    </Heading>
  );
};

export default UiTitle;
