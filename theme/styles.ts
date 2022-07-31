import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props) => {
    const defaultSpacing = { base: 2, sm: 8, md: 12 };
    const biggerSpacing = { base: 4, sm: 12, md: 16 };

    return {
      body: {
        bg: mode('blue.50', 'blue.500')(props),
        color: mode('blue.500', 'blue.50')(props),
        margin: 'auto',
        maxW: '6xl',
      },
      main: {
        bg: mode('white', 'black')(props),
        padding: biggerSpacing,
        margin: defaultSpacing,
        rounded: '2xl',
      },
    };
  },
};

export default styles;
