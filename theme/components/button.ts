import { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
  },
  variants: {
    solid: {
      paddingX: 12,
      bg: '#351791',
      color: 'white',
      _hover: {
        bg: '#351791',
      },
      rounded: 'full',
    },
  },
};

export default Button;
