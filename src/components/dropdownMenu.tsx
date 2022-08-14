import React from 'react';
import * as DropdownPrimitives from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Link } from 'gatsby';
import { styled } from '../../stitches.config';
import { navBarItemStyles } from './navBarStyles';
import NavItem from './navItem';

export type DropdownMenuItem = {
  title: string;
  slug: string;
  extraVelden: { menuTekst: string };
};

const Trigger = styled(DropdownPrimitives.Trigger, {
  variants: {
    hide: {
      true: {
        display: 'none',
      },
    },
  },
});

export default function DropdownMenu({ items }: { items: DropdownMenuItem[] }) {
  return (
    <DropdownPrimitives.Root>
      <Trigger hide={{ '@xl': true }}>
        <NavItem asElement="span">
          Lessen <ChevronDownIcon />
        </NavItem>
      </Trigger>
      <DropdownPrimitives.Content style={{ paddingRight: '8px' }}>
        {items.map((item, index) => (
          <Link to={`/${item.slug}`} key={index}>
            <DropdownPrimitives.Item className={navBarItemStyles()}>
              {item.extraVelden.menuTekst}
            </DropdownPrimitives.Item>
          </Link>
        ))}
      </DropdownPrimitives.Content>
    </DropdownPrimitives.Root>
  );
}
