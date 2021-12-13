import React from 'react';
import { styled } from '../../stitches.config';
import NavBar from './navBar';

const PageContainer = styled('main', {
  maxWidth: '960px',
  marginX: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
});

type LayoutProps = {
  children: React.ReactNode;
  slot?: React.ReactNode;
};

export default function Layout({ children, slot }: LayoutProps) {
  return (
    <>
      <NavBar />
      {slot}
      <PageContainer>{children}</PageContainer>
    </>
  );
}
