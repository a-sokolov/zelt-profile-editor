import React, { FC } from 'react';
import { Button } from '@src/components/Button';
import { Input } from '@src/components/Input';

import type { LoginFormProps } from './types';

export const LoginForm: FC<LoginFormProps> = ({ onLogin }) => (
  <div
    style={{ width: '20rem', height: '15rem' }}
    className="flex flex-col justify-center border gap-2.5 rounded shadow-md p-5"
  >
    <h1 className="text-xl font-bold">Log In</h1>

    <Input readonly placeholder="Your name or email" value="dua.clipa@zelt.com" />
    <Input readonly type="password" placeholder="Your password" value="qwerty" />

    <Button onClick={onLogin}>Log in</Button>
  </div>
);
