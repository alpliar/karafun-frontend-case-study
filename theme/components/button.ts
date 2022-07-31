import { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
  },
  variants: {
    solid: {
      bg: '#351791',
      color: 'white',
      _hover: {
        bg: '#351791',
      },
      rounded: 'full',
    },
  },
  // The default size and variant values
  defaultProps: {
    paddingX: 12,
  },
};

export default Button;
