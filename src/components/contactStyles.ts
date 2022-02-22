import { styled } from '../../stitches.config';

export const Contact = styled('div', {
  // alignSelf: 'center',
  display: 'grid',
  gridGap: '$s',
  marginTop: '$s',
  '@s': {},
  '@l': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    marginTop: '$xl',
    marginRight: 0,
  },
});

export const ContactCardsContainer = styled('section', {
  display: 'grid',
  width: '100%',
  gridGap: '$s',
  gridTemplateColumns: 'none',
});

export const ContactCardWrapper = styled('div', {
  backgroundColor: '$white',
  paddingX: '$m',
  paddingTop: '$s',
  paddingBottom: '$m',
  borderBottom: '1px solid $green',
  '&:not(:first-child)': {
    marginTop: '$s',
  },
  '@l': {
    borderRadius: '$s',
    border: '1px solid $green',
    paddingTop: '$m',
    paddingBottom: '$l',
  },
});

export const ContactCardInner = styled('div', {
  maxWidth: '420px',
  margin: '0 auto',
});

export const Adress = styled('address', {
  '& a': {
    display: 'block',
    width: 'fit-content',
    marginLeft: 0,
    marginTop: '$s',
  },
});
