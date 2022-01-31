import React from 'react';
import * as DropdownPrimitives from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Link } from 'gatsby';
import { styled } from '../../stitches.config';
import NavItem from './navItem';
import { navBarItemStyles } from './navBarStyles';

type DropdownMenuItems = { items: { title: string; slug: string }[] };

const Trigger = styled(DropdownPrimitives.Trigger, {
  variants: {
    hide: {
      true: {
        display: 'none',
      },
    },
  },
});

export default function DropdownMenu({ items }: DropdownMenuItems) {
  return (
    <DropdownPrimitives.Root>
      <Trigger hide={{ '@l': true }}>
        <NavItem>
          Lessen <ChevronDownIcon />
        </NavItem>
      </Trigger>
      <DropdownPrimitives.Content>
        {items.map((item, index) => (
          <Link to={`/${item.slug}`} key={index}>
            <DropdownPrimitives.Item className={navBarItemStyles()}>
              {item.title}
            </DropdownPrimitives.Item>
          </Link>
        ))}
      </DropdownPrimitives.Content>
    </DropdownPrimitives.Root>
  );
}
