import { styled } from '../../stitches.config';
import { Link } from 'gatsby';

export const LessenCardsContainer = styled('article', {
  marginTop: '$l',
  display: 'grid',
  gridGap: '$xl',
  fontSize: '$bodySmall',
  '@m': { gridGap: '$s' },
  '@l': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    marginTop: '$xl',
  },
});

export const LessenContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '$white',
  paddingX: '$m',
  paddingBottom: '$m',
  borderBottom: '1px solid $coral',
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
  boxSizing: 'border-box',
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
