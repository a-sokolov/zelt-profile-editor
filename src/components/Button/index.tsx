import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import { APPEARANCE_COLORS } from './constants';
import type { ButtonProps } from './types';

import './styles.css';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  appearance = 'primary',
  width = 'max',
  loading = false,
  children,
}) => (
  <button
    type="button"
    className={cn(
      'relative border px-4 py-2 rounded',
      width === 'max' ? 'w-max' : 'w-full',
      APPEARANCE_COLORS[appearance],
      {
        'button--loading cursor-default text-transparent': loading,
      },
    )}
    onClick={loading ? undefined : onClick}
  >
    {children}
  </button>
);
