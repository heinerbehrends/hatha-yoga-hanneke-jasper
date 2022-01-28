import React from 'react';
import NavItem from './navItem';
import NavLessen from './navLessen';
import Button from './button';
import { NavBarContainer, NavContainer } from './navBarStyles';

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
