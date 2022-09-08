import { css, styled } from '../../stitches.config';

export const FooterStyled = styled('footer', {
  backgroundColor: '$blueDark',
  color: '$white',
  paddingY: '$xxl',
  paddingX: '$m',
  '@s': {
    paddingY: '$3xl',
    paddingX: 0,
  },
});

export const FooterContainer = styled('section', {
  paddingX: '$l',
  display: 'grid',
  maxWidth: '960px',
  '@l': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(36ch, 1fr))',
  },
});

export const FooterBio = styled('article', {});

export const FooterContact = styled('address', {
  paddingX: '$m',
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
