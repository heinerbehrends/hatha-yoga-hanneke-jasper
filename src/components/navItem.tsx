import { styled, css } from '../../stitches.config';
import { Link } from 'gatsby';
import React from 'react';

export const navBarItemStyles = css({
  display: 'flex',
  alignItems: 'center',
  paddingY: '$s',
  color: '$white',
  backgroundColor: '$blueDark',
  fontSize: '$body',
  textAlign: 'center',
  paddingX: '$s',
  cursor: 'pointer',
  border: '2px solid transparent',
  // borderRadius: '$xs',
  marginY: '2px',
  '&:focus': {
    // boxShadow: '$focus',
    border: '2px dotted $coral',
  },
  '&:hover': {
    color: '$blueDark',
    backgroundColor: '$white',
  },
  '&:active': {
    color: '$blueDark',
    backgroundColor: '$background',
  },
  variants: {
    hideUnderLarge: {
      true: {
        display: 'none',
        '@l': { display: 'inherit' },
      },
    },
    isLogo: {
      true: {
        fontFamily: 'Ostrich Sans',
      },
    },
  },
});

export const NavItemStyled = styled(Link, navBarItemStyles);

type NavItemProps = {
  label: string;
  slug: string;
  hideUnderLarge?: boolean;
};

export default function NavItem({
  label,
  slug,
  hideUnderLarge = false,
}: NavItemProps) {
  return (
    <NavItemStyled
      to={slug}
      activeStyle={{
        fontWeight: 'bold',
      }}
      hideUnderLarge={hideUnderLarge}
    >
      {label}
    </NavItemStyled>
  );
}
