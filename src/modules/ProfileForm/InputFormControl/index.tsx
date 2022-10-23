import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '@src/components/Input';
import { FormLabel } from '@src/components/FormLabel';

import type { InputFromControlProps } from './types';

export const InputFormControl: FC<InputFromControlProps> = ({ name, label, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormLabel name={name} label={label}>
          <Input {...rest} name={name} value={value} onChange={onChange} error={!!error} />
        </FormLabel>
      )}
    />
  );
};
