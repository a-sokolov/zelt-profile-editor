import React, { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { Aside } from '@src/modules/Aside';
import { Header } from '@src/modules/Header';

import type { LayoutProps } from './types';

import './styles.css';

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ onLogout, children }) => {
  const { pathname } = useLocation();

  return (
    <div className="layout h-full w-full">
      <Aside onLogout={onLogout} />

      <Header title={pathname.slice(1).toUpperCase()} />

      <div style={{ gridArea: 'content' }} className="p-5 overflow-auto">
        {children}
      </div>
    </div>
  );
};
