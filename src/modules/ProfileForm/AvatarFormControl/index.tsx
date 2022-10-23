import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Avatar } from '@src/modules/Avatar';
import { DEFAULT_PROFILE_PICTURE_URL } from '@src/api';

export const AvatarFormControl: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="profilePictureURL"
      rules={{ required: false }}
      render={({ field }) => {
        const handleChange = () => {
          field.onChange(DEFAULT_PROFILE_PICTURE_URL);
        };

        const handleDelete = () => {
          field.onChange(null);
        };

        return <Avatar url={field.value} onChange={handleChange} onDelete={handleDelete} />;
      }}
    />
  );
};
