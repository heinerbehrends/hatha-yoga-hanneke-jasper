import { styled } from '../../stitches.config';

export const TestimonialContainer = styled('figure', {
  fontSize: '$m',
  fontStyle: 'italic',
  display: 'flex',
  backgroundColor: '$white',
  lineHeight: 1.1,
  padding: '$s',
  borderBottom: '1px solid $blue',
  overflow: 'hidden',
  '& figcaption': {
    fontSize: '$s',
    fontStyle: 'normal',
  },
  '&:before': {
    content: 'open-quote',
    fontSize: '100px',
    lineHeight: '60px',
    transform: 'translate(-20px, 8px)',
    '@s': {
      paddingRight: '$l',
      fontSize: '120px',
      lineHeight: '80px',
      transform: 'translate(-5px, 10px)',
    },
    '@m': {
      transform: 'translate(-15px, 10px)',
      paddingRight: '$s',
    },
    '@l': {
      transform: 'translate(-15px, 10px)',
    },
  },
  '@s': {
    marginTop: '$s',
    marginX: '$s',
    border: '1px solid $blue',
    borderRadius: '$s',
    fontSize: '$l',
    '& figcaption': {
      fontSize: '$body',
    },
    '@m': {
      fontSize: '$xl',
    },
  },
});

export const TestimonialImage = styled('div', {
  borderRadius: '50%',
  marginLeft: '$s',
  overflow: 'hidden',
  flexShrink: 0,
  height: '60px',
  flexBasis: '60px',
  marginRight: '$s',
  '@s': {
    marginRight: 0,
    height: '90px',
    flexBasis: '90px',
  },
});

export const FigCaption = styled('figcaption', {
  marginLeft: '$s-resp',
  display: 'inline',
});
