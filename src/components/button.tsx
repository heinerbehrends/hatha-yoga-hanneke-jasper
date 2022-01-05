import { Link } from 'gatsby';
import { styled } from '../../stitches.config';

const Button = styled(Link, {
  paddingY: '$xxs',
  borderRadius: '$xs',
  cursor: 'pointer',
  '&:focus': {
    border: '2px dotted $coral',
  },
  variants: {
    size: {
      small: {
        fontSize: '$s',
        paddingX: '$xs',
      },
      big: {
        fontSize: '$body',
        paddingX: '$s',
      },
    },
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
      zacht: {
        backgroundColor: '$background',
        color: '$text',
      },
    },
  },
});

export default Button;
