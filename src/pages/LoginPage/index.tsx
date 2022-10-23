import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import type { LoginPageProps } from './types';
import { LoginPageStyle } from './styles';

export const LoginPage: FC<LoginPageProps> = ({ onLogin }) => (
  <LoginPageStyle>
    <Typography variant="h4">Log In</Typography>

    <TextField
      size="small"
      inputProps={{ readOnly: true }}
      placeholder="Your name or email"
      value="dua.clipa@zelt.com"
    />
    <TextField
      size="small"
      inputProps={{ readOnly: true }}
      type="password"
      placeholder="Your password"
      value="qwerty"
    />

    <Button variant="contained" onClick={onLogin}>
      Log in
    </Button>
  </LoginPageStyle>
);
