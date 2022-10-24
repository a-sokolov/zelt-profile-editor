import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import type { InputFromControlProps } from './types';

export const InputFormControl: FC<InputFromControlProps> = ({ name, label, placeholder, disabled = false, type }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <TextField
          size="small"
          type={type}
          label={label}
          name={name}
          disabled={disabled}
          value={value ?? ''}
          onChange={onChange}
          error={!!error}
          placeholder={placeholder}
        />
      )}
    />
  );
};
