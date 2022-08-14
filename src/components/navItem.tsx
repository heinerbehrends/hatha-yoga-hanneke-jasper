import React from 'react';
import { NavItemStyled } from './navBarStyles';
type NavItemProps = {
  slug?: string;
  hideUnderExtraLarge?: boolean;
  children: React.ReactNode;
  className?: string;
  asElement?: 'span' | 'a' | undefined;
};

export default function NavItem({
  slug = '',
  hideUnderExtraLarge = false,
  children,
  className,
  asElement = 'a',
}: NavItemProps) {
  return (
    <NavItemStyled
      className={className}
      as={asElement}
      to={`/${slug}`}
      activeStyle={{
        textDecoration: 'underline',
      }}
      size={{ '@initial': 'small', '@l': 'big' }}
      hideUnderExtraLarge={hideUnderExtraLarge}
    >
      {children}
    </NavItemStyled>
  );
}
