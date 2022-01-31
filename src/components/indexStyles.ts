import { styled } from '../../stitches.config';

export const Heading = styled('h1', {
  fontFamily: 'Ostrich Sans',
  fontSize: 'clamp(30px, 25vw, 64px)',
  lineHeight: '0.9',
  textAlign: 'center',
  marginTop: '$3xl-resp',
  paddingX: '$s',
});

export const SubHeading = styled('h2', {
  color: '$blueDark',
  fontFamily: 'asap',
  fontSize: '32px',
  textAlign: 'center',
  lineHeight: '$heading',
  paddingX: '$s',
  marginTop: '$l',
  '@l': {
    marginTop: '$xl',
  },
});

export const Introduction = styled('section', {
  backgroundColor: '$white',
  paddingX: '$s',
  marginTop: '$s',
  '@m': {
    marginTop: '$l',
  },
  '@l': {
    marginTop: '$xl',
    paddingX: '$3xl',
    paddingTop: '$xl',
    paddingBottom: '$xl',
    borderRadius: '$m-resp',
  },
});
