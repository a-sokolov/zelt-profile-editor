import React, { FC } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import type { AsideProps } from './types';
import { AsideStyled, LinkStyled, LogoutButtonStyled } from './styles';

export const Aside: FC<AsideProps> = ({ items, onLogout, currentItemUrl }) => (
  <AsideStyled>
    <nav>
      <MenuList>
        {items.map(({ url, title }) => (
          <LinkStyled key={url} to={url}>
            <MenuItem selected={currentItemUrl === url}>{title}</MenuItem>
          </LinkStyled>
        ))}
      </MenuList>
    </nav>

    <LogoutButtonStyled variant="outlined" onClick={onLogout}>
      Log out
    </LogoutButtonStyled>
  </AsideStyled>
);
