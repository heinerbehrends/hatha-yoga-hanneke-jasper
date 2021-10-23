import React from 'react';
import * as DropdownPrimitives from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Link } from 'gatsby';
import slugify from 'slugify';
import { navBarItemStyles } from './navItem';

type DropdownMenuItems = { items: string[] };

export default function DropdownMenu({ items }: DropdownMenuItems) {
  return (
    <DropdownPrimitives.Root>
      <DropdownPrimitives.Trigger className={navBarItemStyles()}>
        Lessen <ChevronDownIcon />
      </DropdownPrimitives.Trigger>
      <DropdownPrimitives.Content>
        {items.map((item, index) => (
          <Link to={slugify(item)} key={index}>
            <DropdownPrimitives.Item className={navBarItemStyles()}>
              {item}
            </DropdownPrimitives.Item>
          </Link>
        ))}
      </DropdownPrimitives.Content>
    </DropdownPrimitives.Root>
  );
}
