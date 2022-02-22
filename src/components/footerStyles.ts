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
  display: 'grid',
  gridGap: '$s',
  maxWidth: '960px',
  marginX: 'auto',
  '@l': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(36ch, 1fr))',
  },
});

export const FooterBio = styled('article', { paddingX: '$m' });

export const FooterContact = styled('address', {
  paddingX: '$m',
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

export const footerImageStyles = css({
  width: '90px',
  height: '120px',
});

export const FooterParagraph = styled('p', {
  width: '66%',
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
  width: 'fit-content',
});
