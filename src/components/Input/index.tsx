import React, { ChangeEvent, FC } from 'react';
import cn from 'classnames';

import type { InputProps } from './types';

export const Input: FC<InputProps> = ({
  value = '',
  placeholder,
  readonly = false,
  type = 'text',
  error = false,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <input
      readOnly={readonly}
      type={type}
      placeholder={placeholder}
      className={cn('border rounded px-2 py-1 bg-', { 'bg-red-100': error }, { 'text-gray-500': readonly })}
      value={value}
      onChange={handleChange}
    />
  );
};
