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
    paddingX: 'none',
  },
  variants: {
    background: {
      true: {
        backgroundColor: '$white',
      },
    },
    border: {
      true: {
        borderRight: '2px solid $blue',
        borderLeft: '2px solid $green',
      },
    },
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
  background?: boolean;
  border?: boolean;
};

export default function Layout({
  children,
  slot,
  background,
  border,
}: LayoutProps) {
  globalStyles();
  return (
    <>
      <NavBar />
      {slot}
      <PageContainer background={background} border={border}>
        {children}
      </PageContainer>
    </>
  );
}
