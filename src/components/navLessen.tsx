import React from 'react';
import slugify from 'slugify';
import DropdownMenu from './dropdownMenu';
import NavItem from './navItem';

export default function NavLessen() {
  const navItems = [
    'Individuele lessen',
    'Groepslessen',
    'Voor bedrijven',
    'Voor scholen',
  ];
  return (
    <>
      {navItems.map((item, index) => (
        <NavItem
          hideUnderLarge={true}
          label={item}
          slug={slugify(item, { lower: true })}
          key={index}
        />
      ))}
      <DropdownMenu items={navItems} />
    </>
  );
}
