import { styled } from '../../stitches.config';

export const TestimonialContainer = styled('figure', {
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
  '@s': {
    marginTop: '$s',
    marginX: '$s',
    border: '1px solid $blue',
    borderRadius: '$s',
  },
  '@l': {
    fontSize: '$xl',
    marginX: 0,
  },
  '&:before': {
    fontStyle: 'italic',
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
    '@l': {
      transform: 'translate(-15px, 10px)',
      paddingRight: '$s',
    },
    '@l': {
      transform: 'translate(-10px, 8px)',
    },
  },
});

export const Blockquote = styled('blockquote', {
  fontSize: '$m',
  fontStyle: 'italic',
  '@s': {
    fontSize: '$l',
    '& figcaption': {
      fontSize: '$body',
    },
  },
  '@l': {
    fontSize: '$xl',
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
    height: '75px',
    flexBasis: '75px',
  },
});

export const FigCaption = styled('figcaption', {
  marginLeft: '$s-resp',
  display: 'inline',
});
