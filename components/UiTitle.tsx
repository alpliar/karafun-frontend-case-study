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
      fontWeight="bold"
      whiteSpace="pre-wrap"
      maxWidth="2xl"
    >
      {title && (
        <>
          <Text as="span" color="#4F52FE">
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
