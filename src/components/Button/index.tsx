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
  disabled = false,
  children,
}) => (
  <button
    type="button"
    className={cn(
      'relative border px-4 py-2 rounded',
      width === 'max' ? 'w-max' : 'w-full',
      { 'bg-gray-300': disabled },
      !disabled && APPEARANCE_COLORS[appearance],
      {
        'cursor-default': loading || disabled,
      },
      {
        'button--loading text-transparent': loading,
      },
    )}
    disabled={disabled}
    onClick={loading || disabled ? undefined : onClick}
  >
    {children}
  </button>
);
