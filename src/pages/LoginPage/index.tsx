import React, { FC } from 'react';
import { Button } from '@src/components/Button';
import { Input } from '@src/components/Input';

import type { LoginPageProps } from './types';

export const LoginPage: FC<LoginPageProps> = ({ onLogin }) => (
  <div className="w-[20rem] h-[15rem] flex flex-col justify-center border gap-2.5 rounded shadow-md p-5">
    <h1 className="text-xl font-bold">Log In</h1>

    <Input readonly placeholder="Your name or email" value="dua.clipa@zelt.com" />
    <Input readonly type="password" placeholder="Your password" value="qwerty" />

    <Button onClick={onLogin}>Log in</Button>
  </div>
);
