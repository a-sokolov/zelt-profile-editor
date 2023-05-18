import React, { FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { Aside } from '@src/components/Aside';
import { Header } from '@src/components/Header';

import { ASIDE_ITEMS } from './constants';
import { LayoutStyled, ContentStyled } from './styles';

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <LayoutStyled>
      <Aside items={ASIDE_ITEMS} currentItemUrl={pathname} />

      <Header title={pathname.slice(1).toUpperCase()} />

      <ContentStyled>{children}</ContentStyled>
    </LayoutStyled>
  );
};
