import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, globalCss } = createStitches({
  media: {
    md: '(min-width: 640px)',
    l: '(min-width: 960px)',
  },
  utils: {
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
  theme: {
    fonts: {
      default: 'Asap',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      white: 'white',
      red: '#DFA49F',
      green: '#A3BCA9',
      greenLight: '#D6E1D8',
      blue: '#A0C7CF',
      blueDark: '#7FABB8',
      text: '#848484',
      textDark: '#504B4B',
      background: '#F7F6F6',
    },
    fontSizes: {
      xs: '12px',
      s: '14px',
      body: '16px',
      l: '20px',
      xl: '24px',
      xxl: '48px',
    },
    space: {
      xs: '8px',
      s: '16px',
    },
    radii: {
      xs: '8px',
    },
  },
});
