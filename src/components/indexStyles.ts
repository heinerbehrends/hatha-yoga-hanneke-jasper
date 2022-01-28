import { styled } from '../../stitches.config';

export const Heading = styled('h1', {
  fontSize: 'clamp(30px, 5vw, 48px)',
  lineHeight: '33px',
  textAlign: 'center',
  marginTop: '$3xl-resp',
  paddingX: '$s',
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
