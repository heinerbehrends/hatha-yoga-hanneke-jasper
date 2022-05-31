import React from 'react';
import { NavItemStyled } from './navBarStyles';
type NavItemProps = {
  slug?: string;
  hideUnderExtraLarge?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function NavItem({
  slug = '',
  hideUnderExtraLarge = false,
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
      size={{ '@initial': 'small', '@l': 'big' }}
      hideUnderExtraLarge={hideUnderExtraLarge}
    >
      {children}
    </NavItemStyled>
  );
}
