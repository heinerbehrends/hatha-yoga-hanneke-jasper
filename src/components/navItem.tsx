import { styled } from '../../stitches.config';
import { Link } from 'gatsby';
import React from 'react';

const NavItemContainer = styled('div', {
  paddingY: '$s',
  color: '$white',
  fontSize: '$body',
});

export default function NavItem({ label, slug }) {
  return (
    <NavItemContainer>
      <Link activeStyle={{ textDecoration: 'underline' }} to={slug}>
        {label}
      </Link>
    </NavItemContainer>
  );
}
