import React from 'react';
import { styled } from '../../stitches.config';
import NavItem from './navItem';
import NavLessen from './navLessen';
import Button from './button';

const NavContainer = styled('nav', {
  display: 'flex',
  height: '60px',
  alignItems: 'center',
  justifyContent: 'space-around',
  '@l': {
    justifyContent: 'space-between',
  },
  maxWidth: '960px',
  marginX: 'auto',
});

const NavBarContainer = styled('div', {
  overflow: 'hidden',
  position: 'fixed',
  top: 0,
  left: 0,
  margin: 'auto',
  width: '100%',
  backgroundColor: '$blueDark',
  zIndex: '2',
});

export default function NavBar() {
  return (
    <NavBarContainer>
      <NavContainer>
        <NavItem slug="">Home</NavItem>
        <NavLessen />
        <NavItem hideUnderMedium slug="over-mij">
          Over mij
        </NavItem>
        <Button
          to="/contact/"
          color="zacht"
          size={{ '@initial': 'small', '@md': 'big' }}
        >
          Contact
        </Button>
      </NavContainer>
    </NavBarContainer>
  );
}
