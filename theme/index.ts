// theme/index.js
import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';
import fonts from './fonts';
import breakpoints from './breakpoints';

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
};

export default extendTheme(overrides);
