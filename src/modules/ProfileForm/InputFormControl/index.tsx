import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '@src/components/Input';
import { FormLabel } from '@src/components/FormLabel';

import type { InputFromControlProps } from './types';

export const InputFormControl: FC<InputFromControlProps> = ({ name, label, required = false, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field, fieldState }) => (
        <FormLabel name={field.name} label={label}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Input {...rest} name={field.name} value={field.value} onChange={field.onChange} error={!!fieldState.error} />
        </FormLabel>
      )}
    />
  );
};
