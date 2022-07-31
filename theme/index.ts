// theme/index.js
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Global style overrides
import breakpoints from './breakpoints';
import fonts from './fonts';
import colors from './colors';
import styles from './styles';
import Button from './components/button';
import Progress from './components/progress';

// Component style overrides
const config: ThemeConfig = {
  // initialColorMode: 'system',
  // initialColorMode: 'dark'
  // useSystemColorMode: true
};

const overrides = {
  fonts,
  colors,
  config,
  styles,
  breakpoints,
  components: {
    Button,
    Progress,
  },
};

export default extendTheme(overrides);
