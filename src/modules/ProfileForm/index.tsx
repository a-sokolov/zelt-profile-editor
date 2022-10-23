import { FC, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import cn from 'classnames';
import type { Profile } from '@src/api';
import { Button } from '@src/components/Button';

import { InputFormControl } from './InputFormControl';
import { AvatarFormControl } from './AvatarFormControl';
import type { ProfileFormProps } from './types';

export const ProfileForm: FC<ProfileFormProps> = ({ profile, onUpdateProfile }) => {
  const [saving, setSaving] = useState(false);
  const methods = useForm<Profile, keyof Profile>({ defaultValues: profile });
  const { handleSubmit, formState, reset } = methods;

  const onSubmit = (data: Profile) => {
    setSaving(true);
    onUpdateProfile(data).then(() => {
      reset(data);
      setSaving(false);
    });
  };

  const handleCancel = () => {
    reset();
  };

  // pattern="((\+|00)?[1-9]{2}|0)[1-9]([0-9]){8}"
  // pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"

  return (
    <div
      style={{ minWidth: '300px', maxWidth: '500px' }}
      className={cn('flex flex-col gap-6', { 'pointer-events-none': saving })}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FormProvider {...methods}>
        <AvatarFormControl />

        <div className="flex flex-col gap-2">
          <InputFormControl required name="firstName" label="First name" placeholder="John" />

          <InputFormControl required name="lastName" label="Last name" placeholder="Wick" />

          <InputFormControl required name="dateOfBirth" label="Date of birth" type="date" />

          <InputFormControl name="phone" label="Phone number" placeholder="89991234567" type="tel" />

          <InputFormControl name="email" label="E-mail" placeholder="name@domen.com" type="email" />

          <InputFormControl name="salary" label="Salary" readonly />
        </div>

        <div className="flex gap-2">
          <Button onClick={handleSubmit(onSubmit)} loading={saving} disabled={!formState.isDirty}>
            Save profile
          </Button>

          <Button appearance="secondary" onClick={handleCancel} disabled={!formState.isDirty || saving}>
            Cancel
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};
