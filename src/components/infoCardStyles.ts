import { styled } from '../../stitches.config';

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
        marginTop: '$l',
      },
    },
  },
});

export const ImageContainer = styled('div', {
  overflow: 'hidden',
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
        width: '300px',
        borderRadius: '50%',
        marginTop: '$l',
        marginLeft: '$m',
      },
      mobile: {
        borderRadius: '50%',
        marginX: 0,
        paddingX: 0,
        marginTop: '$l',
        width: 'min(75vw, 300px)',
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
    transform: 'translateX(-60px)',
    // marginLeft: '-60px',
    // marginRight: '-30px',
    paddingLeft: '$xxl',
    paddingRight: '$l',
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
  // '@l': {
  //   paddingLeft: 0,
  // },
  '& svg': {
    transform: 'scale(120%)',
    marginRight: '$xs',
  },
});

export const Paragraph = styled('p', {
  marginTop: '2px',
  '@l': {
    fontSize: '$body',
    paddingLeft: '$m',
    paddingRight: '$m',
    paddingX: 0,
    marginTop: '$xxs',
  },
});

export const TextContainer = styled('div', {
  paddingX: '$m',

  height: 'fit-content',
});
