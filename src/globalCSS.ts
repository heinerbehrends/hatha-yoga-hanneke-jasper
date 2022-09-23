import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  // Remove all the styles of the "User-Agent-Stylesheet",
  // except for the 'display' property
  '*:where(:not(iframe, canvas, img, svg, video):not(svg *))': {
    all: 'unset',
    display: 'revert',
  },
  // Preferred box-sizing value
  '*,*::before,*::after': {
    boxSizing: 'border-box',
  },
  '*': {
    fontFamily: '$default',
    '@supports (font-variation-settings: normal)': {
      fontFamily: 'AsapVariable',
    },
  },
  em: {
    fontStyle: 'italic',
  },
  // For images to not be able to exceed their container
  img: {
    maxWidth: '100%',
  },
  // revert the 'white-space' property for textarea elements on Safari
  textarea: {
    whiteSpace: 'revert',
  },
  body: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    backgroundColor: '$background',
    color: '$text',
    fontSize: '$bodySmall',
    marginTop: '60px',
    fontFamily: 'Asap',
    lineHeight: '$body',
    '@m': {
      fontSize: '$body',
    },
    h2: {
      fontSize: '$xxl',
      marginTop: '$l',
      marginBottom: '$l',
      textAlign: 'center',
      lineHeight: '$heading',
    },
    h3: {
      fontSize: '$l',
      fontWeight: 500,
      marginBottom: '$xs',
      '& svg': {
        transform: 'scale(166%)',
        marginRight: '$s',
        marginLeft: '$xs',
      },
    },
  },
});
