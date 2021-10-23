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
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <PageContainer>{children}</PageContainer>
    </>
  );
}
