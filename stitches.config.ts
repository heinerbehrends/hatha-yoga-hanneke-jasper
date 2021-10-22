import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      default: 'Asap',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      red: '#DFA49F',
      green: '#A3BCA9',
      blue: '#A0C7CF',
      text: '#848484',
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
  },
});
