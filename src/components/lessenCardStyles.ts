import { styled } from '../../stitches.config';
import { Link } from 'gatsby';

export const LessenCardsContainer = styled('article', {
  display: 'grid',
  gridGap: '$s',
  '@m': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    marginTop: '$xl',
  },
});

export const LessenContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '$white',
  padding: '$s',
  paddingBottom: '$m',
  borderBottom: '1px solid $coral',
  '@s': {
    padding: '$l',
  },
  '@l': {
    borderRadius: '$s',
    border: '1px solid',
    borderColor: '$blue',
    paddingX: '$xxl',
    paddingY: '$xl',
  },
});

export const LeesMeerLink = styled(Link, {
  color: '$coral',
  boxSizing: 'content-box',
  display: 'inline-block',
  border: '2px dotted rgba(0, 0, 0, 0)',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:focus': {
    textDecoration: 'underline',
    borderColor: '$green',
    paddingX: '$xxs',
    borderRadius: '$xxs',
  },
});
