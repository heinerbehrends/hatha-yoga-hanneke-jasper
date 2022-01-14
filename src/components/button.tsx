import { Link } from 'gatsby';
import { styled } from '../../stitches.config';

const Button = styled(Link, {
  display: 'inline-block',
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
        marginX: '$s',
      },
      big: {
        fontSize: '$body',
        paddingX: '$l',
        paddingY: '$xs',
        marginTop: '$s',
        width: 'fit-content',
      },
    },
    color: {
      green: {
        backgroundColor: '$green',
        color: '$white',
      },
      greenTint: {
        backgroundColor: '$greenTint',
        color: '$text',
        border: '2px solid $green',
      },
      white: {
        backgroundColor: '$white',
        color: '$text',
      },
      zacht: {
        backgroundColor: '$background',
        color: '$textDark',
      },
    },
  },
});

export default Button;
