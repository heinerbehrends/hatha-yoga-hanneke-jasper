import React from 'react';
import { NavItemStyled } from './navBarStyles';
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
