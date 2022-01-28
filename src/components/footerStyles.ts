import { css, styled } from '../../stitches.config';

export const FooterStyled = styled('footer', {
  backgroundColor: '$blueDark',
  color: '$white',
  paddingY: '$3xl',
  paddingLeft: '$m',
  '@s': {
    paddingLeft: '$l',
  },
});

export const FooterContainer = styled('section', {
  display: 'grid',
  gridGap: '$m',
  maxWidth: '960px',
  marginX: 'auto',
  '@m': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(36ch, 1fr))',
  },
});

export const FooterBio = styled('article', {});

export const FooterContact = styled('address', {
  width: 'fit-content',
  '@l': {
    paddingLeft: '$xl',
  },
});

export const ContactItem = styled('a', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  paddingY: '$xxs',
  '&:hover': {
    textDecoration: 'underline',
  },
  '& svg': {
    marginRight: '$xs',
  },
  '@s': {},
  '@l': {
    paddingLeft: 0,
  },
});

export const imageStyles = css({
  width: '90px',
  height: '120px',
});

export const FooterParagraph = styled('p', {
  width: '66%',
  '@s': {
    width: '75%',
  },
  '& a': {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
});

export const BioContainer = styled('div', {
  display: 'flex',
  width: 'content',
});