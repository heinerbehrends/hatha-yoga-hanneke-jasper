import React from 'react';
import { styled } from '../../stitches.config';
import slugify from 'slugify';
import NavItem from './navItem';
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

type NavBarProps = {
  navItems: string[];
};

export default function NavBar({ navItems }: NavBarProps) {
  return (
    <NavBarContainer>
      <NavContainer>
        <NavItem label="Home" slug="/" />
        {navItems.map((item) => (
          <NavItem label={item} slug={slugify(item, { lower: true })} />
        ))}
        <Button color="green">Contact</Button>
      </NavContainer>
    </NavBarContainer>
  );
}
