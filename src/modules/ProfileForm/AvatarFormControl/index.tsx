import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Avatar } from '@src/modules/Avatar';
import { DEFAULT_PROFILE_PICTURE_URL } from '@src/api';

import type { FormControlProps } from '../types';

export const AvatarFormControl: FC<FormControlProps> = ({ name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        const handleChange = () => {
          onChange(DEFAULT_PROFILE_PICTURE_URL);
        };

        const handleDelete = () => {
          onChange(null);
        };

        return <Avatar url={value} onChange={handleChange} onDelete={handleDelete} />;
      }}
    />
  );
};
