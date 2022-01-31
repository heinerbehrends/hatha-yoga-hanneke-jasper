import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import DropdownMenu from './dropdownMenu';
import NavItem from './navItem';

type NavItemsData = {
  allWpLes: {
    nodes: { slug: string; title: string }[];
  };
};
export default function NavLessen() {
  const data: NavItemsData = useStaticQuery(graphql`
    query LessenSlugQuery {
      allWpLes {
        nodes {
          title
          slug
        }
      }
    }
  `);
  const navItems = data.allWpLes.nodes;
  return (
    <>
      {navItems.map((item, index) => (
        <NavItem hideUnderLarge={true} slug={item.slug} key={index}>
          {item.title}
        </NavItem>
      ))}
      <DropdownMenu items={navItems} />
    </>
  );
}
