import { styled } from '../../stitches.config';

export const Contact = styled('div', {
  display: 'grid',
  gridGap: '$s',
  marginTop: '$s',
  marginX: '$xs',
  '@s': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
  },
  '@l': {
    marginTop: '$xl',
  },
});

export const ContactCardsContainer = styled('section', {
  display: 'grid',
  width: '100%',
  gridGap: '$s',
  gridTemplateColumns: 'none',
});

export const ContactCard = styled('div', {
  backgroundColor: '$white',
  paddingX: '$m',
  paddingTop: '$s',
  paddingBottom: '$m',
  borderRadius: '$s',
  border: '1px solid $green',
  '&:not(:first-child)': {
    marginTop: '$s',
  },
});

export const Adress = styled('address', {
  '& a': {
    display: 'block',
    width: 'fit-content',
    marginLeft: 0,
    marginTop: '$s',
  },
});
