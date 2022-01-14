import React from 'react';
import { globalCss, styled } from '../../stitches.config';
import NavBar from './navBar';

const PageContainer = styled('main', {
  maxWidth: '960px',
  marginX: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  backgroundColor: 'white',
  '@m': {
    backgroundColor: 'inherit',
  },
});

const globalStyles = globalCss({
  '*': {
    fontFamily: '$default',
    fontSize: '$body',
  },
  body: {
    backgroundColor: '$background',
    color: '$text',
  },
});

type LayoutProps = {
  children: React.ReactNode;
  slot?: React.ReactNode;
};

export default function Layout({ children, slot }: LayoutProps) {
  globalStyles();
  return (
    <>
      <NavBar />
      {slot}
      <PageContainer>{children}</PageContainer>
    </>
  );
}
