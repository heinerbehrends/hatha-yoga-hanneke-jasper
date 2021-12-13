import React from 'react';
import { Root, Trigger, Content, Item } from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Link } from 'gatsby';
import slugify from 'slugify';
import { navBarItemStyles } from './navItem';
import { styled } from '../../stitches.config';

type DropdownMenuItems = { items: string[] };

const TriggerStyled = styled(Trigger, navBarItemStyles);

export default function DropdownMenu({ items }: DropdownMenuItems) {
  return (
    <Root>
      <TriggerStyled hideAtLarge={true}>
        Lessen <ChevronDownIcon />
      </TriggerStyled>
      <Content>
        {items.map((item, index) => (
          <Link to={slugify(item)} key={index}>
            <Item className={navBarItemStyles()}>{item}</Item>
          </Link>
        ))}
      </Content>
    </Root>
  );
}
