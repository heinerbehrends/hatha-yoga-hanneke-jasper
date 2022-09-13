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
  lineHeight: 1,
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
  width: 'clamp(190px, 54%, 300px)',
  marginX: 'auto',
  '@l': {
    width: '48%',
    transform: 'translateX(32px)',
  },
  zIndex: 1,
  length: 0,
});

export const svgStyles = css({
  display: 'none',
  transform: 'translateX(-4vw)',
  '@l': {
    display: 'initial',
  },
  length: 0,
});
