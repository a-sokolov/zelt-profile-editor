import React, { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { Button } from '@src/components/Button';

import type { AsideProps } from './types';

import './styles.css';

export const Aside: FC<AsideProps> = ({ items, onLogout, currentItemUrl }) => (
  <aside style={{ gridArea: 'aside' }} className="aside p-5 border-r flex flex-col justify-between">
    <ul className="flex flex-col gap-2">
      {items.map(({ url, title }) => (
        <li key={url} className={cn({ 'font-bold': currentItemUrl === url })}>
          <NavLink to={url}>{title}</NavLink>
        </li>
      ))}
    </ul>

    <Button appearance="secondary" width="full" onClick={onLogout}>
      Log out
    </Button>
  </aside>
);
