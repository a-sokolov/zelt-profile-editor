import { FC, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import dayjs from 'dayjs';
import cn from 'classnames';
import type { Profile } from '@src/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@src/components/Button';

import { InputFormControl } from './InputFormControl';
import { AvatarFormControl } from './AvatarFormControl';
import { schema } from './schema';
import type { ProfileFormProps, ProfileKeys } from './types';

export const ProfileForm: FC<ProfileFormProps> = ({ profile, onUpdateProfile }) => {
  const [saving, setSaving] = useState(false);
  const methods = useForm<Profile, ProfileKeys>({
    mode: 'onChange',
    defaultValues: profile,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, formState, reset } = methods;

  const onSubmit = (data: Profile) => {
    setSaving(true);

    const modifiedData: Profile = { ...data, dateOfBirth: dayjs(data.dateOfBirth).format('YYYY-MM-DD') };

    onUpdateProfile(modifiedData).then(() => {
      reset(modifiedData);
      setSaving(false);
    });
  };

  const handleCancel = () => {
    reset();
  };

  const { isValid, isDirty } = formState;

  return (
    <div className={cn('min-w-[300px] max-w-[500px] flex flex-col gap-6', { 'pointer-events-none': saving })}>
      <FormProvider {...methods}>
        <AvatarFormControl name="profilePictureURL" />

        <div className="flex flex-col gap-2">
          <InputFormControl name="firstName" label="First name" placeholder="John" />

          <InputFormControl name="lastName" label="Last name" placeholder="Wick" />

          <InputFormControl name="dateOfBirth" label="Date of birth" type="date" />

          <InputFormControl name="phone" label="Phone number" placeholder="89991234567" />

          <InputFormControl name="email" label="E-mail" placeholder="name@domen.com" />

          <InputFormControl name="salary" label="Salary" readonly />
        </div>

        <div className="flex gap-2">
          <Button onClick={handleSubmit(onSubmit)} loading={saving} disabled={!isDirty || !isValid}>
            Save profile
          </Button>

          <Button appearance="secondary" onClick={handleCancel} disabled={!isDirty || saving}>
            Cancel
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};
