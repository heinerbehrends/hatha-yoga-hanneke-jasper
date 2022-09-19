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
    paddingX: '$l',
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
