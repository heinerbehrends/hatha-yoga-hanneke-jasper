import { css, styled } from '../../stitches.config';

export const HeroContainer = styled('div', {
  backgroundColor: '$green',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    size: {
      mobile: {
        boxSizing: 'content-box',
      },
      bigScreen: {
        width: '100%',
        boxSizing: 'border-box',
      },
    },
  },
  length: 0,
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '960px',
  length: 0,
});

export const PaddingContainer = styled('div', {
  display: 'flex',
  paddingY: '6%',
  '@l': {
    paddingY: '8%',
    paddingLeft: '5%',
  },
  length: 0,
});

export const TextLogo = styled('h1', {
  textAlign: 'center',
  fontFamily: 'Ostrich Sans',
  lineHeight: '$heading',
  color: '$coral',
  fontSize: 'clamp(30px,16vw, 74px)',
  // lineHeight: '56px',
  paddingY: '$m',
  length: 0,
});

export const LogoContainer = styled('div', {
  width: '100%',
  backgroundColor: '$white',
  '@l': {
    display: 'none',
  },
  length: 0,
});

export const heroImageStyles = css({
  width: 'clamp(154px, 38%, 400px)',
  height: 'clamp(154px, 38%, 400px)',
  marginX: 'auto',
  '@l': {
    height: '46%',
    width: '46%',
    transform: 'translateX(32px)',
  },
  zIndex: 1,
  length: 0,
});

export const svgStyles = css({
  display: 'none',
  transform: 'translateX(-50px)',
  '@l': {
    display: 'initial',
  },
  length: 0,
});
