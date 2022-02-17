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
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '960px',
});

export const PaddingContainer = styled('div', {
  display: 'flex',
  paddingY: '6%',
  '@m': {
    paddingY: '8%',
    paddingLeft: '5%',
  },
});

export const TextLogo = styled('h1', {
  textAlign: 'center',
  fontFamily: 'Ostrich Sans',
  color: '$coral',
  fontSize: '$3xl',
  lineHeight: '56px',
  paddingY: '$m',
});

export const LogoContainer = styled('div', {
  width: '100%',
  backgroundColor: '$white',
  '@m': {
    display: 'none',
  },
});

export const heroImageStyles = css({
  width: 'clamp(128px, 40%, 500px)',
  height: 'clamp(128px, 40%, 500px)',
  marginX: 'auto',
  '@m': {
    height: '40%',
    width: '40%',
  },
  zIndex: 1,
});

export const svgStyles = css({
  display: 'none',
  transform: 'translateX(-50px)',
  '@m': {
    display: 'initial',
  },
});
