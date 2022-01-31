import { css, styled } from '../../stitches.config';

export const InfoCardContainer = styled('section', {
  display: 'flex',
  marginX: 'auto',
  gridTemplateColumns: '300px 1fr',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$s-resp',
  variants: {
    size: {
      bigScreen: {
        overflow: 'hidden',
        marginTop: '$xl',
      },
      smallScreen: {
        marginTop: '$s',
      },
    },
  },
});

export const ImageContainer = styled('div', {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  marginTop: '$l',
  zIndex: '1',
  variants: {
    color: {
      blue: {
        backgroundColor: '$blue',
      },
      red: {
        backgroundColor: '$red',
      },
      green: {
        backgroundColor: '$green',
      },
    },
    size: {
      bigScreen: {
        width: 'min(31.25vw, 300px)',
        borderRadius: '50%',
        marginTop: '$l',
      },
      smallScreen: {
        flexDirection: 'column',
        float: 'none',
        width: '100%',
        borderRadius: 0,
        alignItems: 'center',
        margin: 0,
        marginTop: '$m',
      },
      mobile: {
        marginX: 0,
        paddingX: 0,
        marginTop: '$l',
        width: '100%',
        borderRadius: 0,
      },
    },
    hideUnderLarge: {
      true: {
        display: 'none',
        '@l': { display: 'inherit' },
      },
    },
    hideAtLarge: {
      true: {
        float: 'left',
        shapeOutside: 'circle(42.58% at 5.13rem 10.38rem)',
        display: 'inherit',
        marginTop: '$m',
        '@l': { display: 'none' },
      },
    },
  },
});

export const ArticleContainer = styled('article', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column-reverse',
  width: '100%',
  backgroundColor: '$white',
  marginX: 'auto',
  '@l': {
    width: '66%',
    borderRadius: '$m-resp',
    marginLeft: '-60px',
    paddingX: '$3xl',
    paddingTop: '$xl',
    paddingBottom: '$xl',
  },
});

export const Shape = styled('div', {
  width: '20px',
  height: '240px',
  shapeOutside: 'ellipse(215px 216px at -996.67% 95px)',
  float: 'left',
  variants: {
    hideUnderLarge: {
      true: {
        display: 'none',
        '@l': { display: 'inherit' },
      },
    },
  },
});

export const SmallerHeading = styled('h3', {
  fontSize: '$l',
  fontWeight: 500,
  '@m': {
    paddingLeft: '$m',
  },
  '@l': {
    paddingLeft: 0,
  },
  '& svg': {
    transform: 'scale(120%)',
    marginRight: '$xs',
  },
});

export const Paragraph = styled('p', {
  marginTop: '2px',
  fontSize: '$bodySmall',
  '@m': {
    fontSize: '$body',
    paddingLeft: '$m',
    paddingRight: '$m',
  },

  '@l': {
    paddingX: 0,
    marginTop: '$xxs',
  },
});

export const TextContainer = styled('div', {
  paddingX: '$s',

  height: 'fit-content',
});

export const infoImageStyles = css({
  width: '50%',
  '@m': {
    width: '33',
  },
});
