import React from 'react';
import { styled } from '../../stitches.config';
import NavItem from './navItem';
import NavLessen from './navLessen';
import Button from './button';

const NavContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  '@l': {
    justifyContent: 'space-between',
  },
  maxWidth: '960px',
  marginX: 'auto',
});

const NavBarContainer = styled('div', {
  backgroundColor: '$blueDark',
});

export default function NavBar() {
  return (
    <NavBarContainer>
      <NavContainer>
        <NavItem label="Home" slug="/" />
        <NavLessen />
        <NavItem label="Over mij" slug="over-mij" />
        <Button to="/contact/" color="white">
          Contact
        </Button>
      </NavContainer>
    </NavBarContainer>
  );
}
