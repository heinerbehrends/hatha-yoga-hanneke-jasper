import { styled, css } from '../../stitches.config';
import { Link } from 'gatsby';
import React from 'react';

export const navBarItemStyles = css({
  display: 'flex',
  alignItems: 'center',
  paddingY: '$s',
  color: '$white',
  backgroundColor: '$blueDark',
  textAlign: 'center',
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
    hideUnderMedium: {
      true: {
        display: 'none',
        '@m': { display: 'initial' },
      },
    },
    hideAtLarge: {
      true: {
        display: 'initial',
        '@m': { display: 'none' },
      },
    },
    size: {
      small: {
        paddingX: '$xxs',
        fontSize: '$s',
      },
      big: {
        paddingX: '$s',
        fontSize: '$body',
      },
    },
  },
});

export const NavItemStyled = styled(Link, navBarItemStyles);

type NavItemProps = {
  slug?: string;
  hideUnderLarge?: boolean;
  hideUnderMedium?: boolean;
  hideAtLarge?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function NavItem({
  slug = '',
  hideUnderLarge = false,
  hideUnderMedium = false,
  hideAtLarge = false,
  children,
  className,
}: NavItemProps) {
  return (
    <NavItemStyled
      className={className}
      to={`/${slug}`}
      activeStyle={{
        fontWeight: 'bold',
      }}
      size={{ '@initial': 'small', '@m': 'big' }}
      hideUnderMedium={hideUnderMedium}
      hideUnderLarge={hideUnderLarge}
      hideAtLarge={hideAtLarge}
    >
      {children}
    </NavItemStyled>
  );
}
