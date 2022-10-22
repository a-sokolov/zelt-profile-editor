import React, { FC } from 'react';
import { AppRoutes } from '@src/constants';
import { NavLink } from 'react-router-dom';
import { Button } from '@src/components/Button';

import type { AsideProps } from './types';

export const Aside: FC<AsideProps> = ({ onLogout }) => (
  <aside style={{ gridArea: 'aside' }} className="p-5 border-r flex flex-col justify-between">
    <ul className="flex flex-col gap-2">
      {Object.entries(AppRoutes).map(([title, path]) => (
        <li key={path}>
          <NavLink to={path}>{title}</NavLink>
        </li>
      ))}
    </ul>

    <Button appearance="secondary" width="full" onClick={onLogout}>
      Log out
    </Button>
  </aside>
);
