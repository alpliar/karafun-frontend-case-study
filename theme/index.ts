// theme/index.js
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Global style overrides
import breakpoints from './breakpoints';
import fonts from './fonts';
import styles from './styles';
import Button from './components/button';

// Component style overrides
const config: ThemeConfig = {
  // initialColorMode: 'system',
  // initialColorMode: 'dark'
  // useSystemColorMode: true
};

const overrides = {
  fonts,
  config,
  styles,
  breakpoints,
  components: {
    Button,
  },
};

export default extendTheme(overrides);
