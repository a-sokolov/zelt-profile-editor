import React, { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { Aside } from '@src/modules/Aside';
import { Header } from '@src/modules/Header';

import { ASIDE_ITEMS } from './constants';
import { LayoutStyled, ContentStyled } from './styles';
import type { LayoutProps } from './types';

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ onLogout, children }) => {
  const { pathname } = useLocation();

  return (
    <LayoutStyled>
      <Aside items={ASIDE_ITEMS} onLogout={onLogout} currentItemUrl={pathname} />

      <Header title={pathname.slice(1).toUpperCase()} />

      <ContentStyled>{children}</ContentStyled>
    </LayoutStyled>
  );
};
