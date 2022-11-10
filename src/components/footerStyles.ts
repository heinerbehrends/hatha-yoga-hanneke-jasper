import { css, styled } from '../../stitches.config';

export const FooterStyled = styled('footer', {
  backgroundColor: '$blueDark',
  color: '$white',
  '@l': {
    paddingY: '$xxl',
    paddingX: '$m',
  },
  '@s': {
    paddingY: '$3xl',
    paddingX: 0,
  },
});

export const FooterContainer = styled('section', {
  paddingX: '$m',
  paddingY: '$xl',
  display: 'grid',
  maxWidth: '960px',
  marginX: 'auto',
  '@l': {
    paddingX: 0,
    gridTemplateColumns: 'repeat(auto-fill, minmax(36ch, 1fr))',
  },
});

export const FooterContact = styled('address', {
  marginBottom: '$xl',
  '@l': {
    margin: 0,
  },
});

export const ContactItem = styled('a', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  paddingY: '$xs',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:focus': {
    textDecoration: 'underline',
    border: '2px dotted $greenLight',
    marginLeft: '-16px',
    paddingLeft: '16px',
    borderRadius: '$xs',
    marginRight: '$l',
    boxSizing: 'border-box',
  },
  '& svg': {
    marginRight: '$xs',
  },
  '@l': {
    paddingLeft: 0,
  },
});

export const footerImageStyles = css({
  width: '120px',
  height: '180px',
});

export const FooterParagraph = styled('p', {
  paddingRight: '$s',
  '@s': {
    width: 'fit-content',
  },
  '& a': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

export const BioContainer = styled('div', {
  display: 'flex',
});
