import React from 'react';
import { styled } from '../../stitches.config';

const Button = styled('button', {
  paddingX: '$s',
  paddingY: '$xs',
  borderRadius: '$xs',
  variants: {
    color: {
      green: {
        backgroundColor: '$green',
        color: '$white',
      },
      greenLight: {
        backgroundColor: '$greenLight',
        color: '$textDark',
      },
      white: {
        backgroundColor: '$white',
        color: '$text',
        border: '2px solid $green',
      },
    },
  },
});

export default Button;
