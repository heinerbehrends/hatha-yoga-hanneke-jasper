import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, globalCss } = createStitches({
  media: {
    s: '(min-width: 480px)',
    m: '(min-width: 640px)',
    l: '(min-width: 960px)',
  },
  utils: {
    paddingX: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    marginX: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
  theme: {
    fonts: {
      default: 'Asap',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      white: 'white',
      coral: '#FA7268',
      red: '#DFA49F',
      green: '#A3BCA9',
      greenLight: '#D6E1D8',
      greenTint: '#F0F4F1',
      blue: '#A0C7CF',
      blueDark: '#538696',
      text: '#848484',
      textDark: '#504B4B',
      background: '#EAE9EA',
      backgroundLight: '#F7F6F6',
    },
    fontSizes: {
      xs: '12px',
      s: '14px',
      body: '16px',
      l: '20px',
      xl: '24px',
      xxl: '48px',
      '3xl': '56px',
    },
    space: {
      xxs: '4px',
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '48px',
      xxl: '64px',
      '3xl': '96px',
      'xs-resp': 'min(0.83vw, 8px)',
      's-resp': 'min(1.67vw, 16px)',
      'm-resp': 'min(2.5vw, 24px)',
      'l-resp': 'min(3.33vw, 32px)',
      'xxl-resp': 'min(6.66vw, 64px)',
      'xl-resp': 'min(5vw, 48px)',
      '3xl-resp': 'min(10vw, 96px)',
    },
    radii: {
      xs: '8px',
      s: '16px',
      m: '32px',
      'xs-resp': '0.83vw',
      's-resp': '1.67vw',
      'm-resp': '2.5vw',
    },
    shadows: {
      focus: 'inset 0 0 0 2px coral',
    },
    borderStyles: {
      focus: '2px dashed $coral',
    },
  },
});
