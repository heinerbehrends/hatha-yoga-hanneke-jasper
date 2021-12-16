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
  '&:focus': {
    border: '2px dotted $coral',
  },
  '&:hover': {
    color: '$blueDark',
    backgroundColor: '$background',
  },
  '&:active': {
    color: '$blueDark',
    backgroundColor: '$white',
  },
  variants: {
    hideUnderLarge: {
      true: {
        display: 'none',
        '@l': { display: 'initial' },
      },
    },
    hideAtLarge: {
      true: {
        display: 'initial',
        '@l': { display: 'none' },
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
  slug?: string;
  hideUnderLarge?: boolean;
  hideAtLarge?: boolean;
  children: React.ReactNode;
};

export default function NavItem({
  slug = '',
  hideUnderLarge = false,
  hideAtLarge = false,
  children,
}: NavItemProps) {
  return (
    <NavItemStyled
      to={slug}
      activeStyle={{
        fontWeight: 'bold',
      }}
      hideUnderLarge={hideUnderLarge}
      hideAtLarge={hideAtLarge}
    >
      {children}
    </NavItemStyled>
  );
}
