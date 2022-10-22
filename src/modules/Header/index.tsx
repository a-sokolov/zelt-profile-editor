import React, { FC } from 'react';

import type { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ title }) => (
  <header style={{ gridArea: 'header' }} className="p-5 text-2xl">
    {title}
  </header>
);
