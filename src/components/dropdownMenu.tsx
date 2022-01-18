import React from 'react';
import * as DropdownPrimitives from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Link } from 'gatsby';
import { styled } from '../../stitches.config';
import slugify from 'slugify';
import NavItem, { navBarItemStyles } from './navItem';

type DropdownMenuItems = { items: string[] };

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
          <Link to={slugify(item).toLowerCase()} key={index}>
            <DropdownPrimitives.Item className={navBarItemStyles()}>
              {item}
            </DropdownPrimitives.Item>
          </Link>
        ))}
      </DropdownPrimitives.Content>
    </DropdownPrimitives.Root>
  );
}
