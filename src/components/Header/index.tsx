import React, { FC } from 'react';
import Typography from '@mui/material/Typography';

import { HeaderStyled } from './styles';
import type { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ title }) => (
  <HeaderStyled>
    <Typography variant="h4">{title}</Typography>
  </HeaderStyled>
);
