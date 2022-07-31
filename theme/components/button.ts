import { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
  },
  variants: {
    solid: {
      paddingX: 12,
      color: 'white',
      _hover: {
        bg: 'blue.500',
      },
      rounded: 'full',
    },
  },
  defaultProps: {
    colorScheme: 'blue',
  },
};

export default Button;
