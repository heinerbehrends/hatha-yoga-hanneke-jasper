import { Link } from 'gatsby';
import { styled, css } from '../../stitches.config';

export const NavContainer = styled('nav', {
  display: 'flex',
  height: '60px',
  alignItems: 'center',
  justifyContent: 'space-around',
  '@l': {
    justifyContent: 'space-between',
  },
  maxWidth: '960px',
  marginX: 'auto',
});

export const NavBarContainer = styled('div', {
  overflow: 'hidden',
  position: 'fixed',
  top: 0,
  left: 0,
  margin: 'auto',
  width: '100%',
  backgroundColor: '$blueDark',
  zIndex: '2',
});

export const navBarItemStyles = css({
  display: 'flex',
  alignItems: 'center',
  fontSize: '$s',
  paddingY: '$s',
  paddingX: '$s',
  color: '$backgroundLight',
  backgroundColor: '$blueDark',
  textAlign: 'center',
  cursor: 'pointer',
  border: '2px solid transparent',
  '&:focus': {
    border: '2px dotted $coral',
  },
  '&:hover': {
    color: '$blueDark',
    backgroundColor: '$background',
  },
  '&:active': {
    color: '$blueDark',
    backgroundColor: '$white',
  },
  variants: {
    hideUnderExtraLarge: {
      true: {
        display: 'none',
        '@xl': { display: 'initial' },
      },
    },
    size: {
      small: {
        paddingX: '$xxs',
        fontSize: '$s',
      },
      big: {
        paddingX: '$xs',
        fontSize: '$bodySmall',
      },
    },
  },
});

export const NavItemStyled = styled(Link, navBarItemStyles);
