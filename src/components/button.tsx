import { Link } from 'gatsby';
import { styled } from '../../stitches.config';

const Button = styled(Link, {
  paddingX: '$s',
  paddingY: '$xs',
  borderRadius: '$xs',
  cursor: 'pointer',
  '&:focus': {
    border: '2px dotted $coral',
  },
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
