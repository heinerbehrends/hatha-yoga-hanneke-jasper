import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import DropdownMenu from './dropdownMenu';
import NavItem from './navItem';

type NavItemsData = {
  allWpLes: {
    nodes: {
      title: string;
      slug: string;
      extraVelden: { menuTekst: string };
    }[];
  };
};
export default function NavLessen() {
  const data: NavItemsData = useStaticQuery(graphql`
    query LessenSlugQuery {
      allWpLes {
        nodes {
          slug
          extraVelden {
            menuTekst
          }
        }
      }
    }
  `);
  const navItems = data.allWpLes.nodes;
  return (
    <>
      {navItems.map((item, index) => (
        <NavItem hideUnderLarge={true} slug={item.slug} key={index}>
          {item.extraVelden.menuTekst}
        </NavItem>
      ))}
      <DropdownMenu items={navItems} />
    </>
  );
}
