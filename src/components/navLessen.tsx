import React from 'react';
import DropdownMenu from './dropdownMenu';
import NavItem from './navItem';
import { navData, NavItemsData } from '../data/navData';

export default function NavLessen() {
  const data: NavItemsData = navData;
  const navItems = data.allWpLes.nodes;
  return (
    <>
      {navItems.map((item, index) => (
        <NavItem hideUnderExtraLarge={true} slug={item.slug} key={index}>
          {item.extraVelden.menuTekst}
        </NavItem>
      ))}
      <DropdownMenu items={navItems} />
    </>
  );
}
