import { FC, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import type { Profile } from '@src/api';
import { FormLabel } from '@src/components/FormLabel';
import { Input } from '@src/components/Input';
import { Button } from '@src/components/Button';

import type { ProfileFormProps } from './types';

export const ProfileForm: FC<ProfileFormProps> = ({ profile, onUpdateProfile }) => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm<Profile, keyof Profile>({ defaultValues: profile });

  const onSubmit = (data: Profile) => {
    setLoading(true);
    onUpdateProfile(data).then(() => {
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-col justify-center gap-2">
      <Controller
        control={control}
        name="firstName"
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <FormLabel label="First name">
            <Input value={field.value} onChange={field.onChange} error={!!fieldState.error} />
          </FormLabel>
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <FormLabel label="Last name">
            <Input value={field.value} onChange={field.onChange} error={!!fieldState.error} />
          </FormLabel>
        )}
      />

      <Controller
        control={control}
        name="dateOfBirth"
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <FormLabel label="Date of birth">
            <Input type="date" value={field.value} onChange={field.onChange} error={!!fieldState.error} />
          </FormLabel>
        )}
      />

      <Controller
        control={control}
        name="phone"
        rules={{ required: false }}
        render={({ field, fieldState }) => (
          <FormLabel label="Phone number">
            <Input
              type="tel"
              placeholder="89991234567"
              value={field.value}
              // pattern="((\+|00)?[1-9]{2}|0)[1-9]([0-9]){8}"
              onChange={field.onChange}
              error={!!fieldState.error}
            />
          </FormLabel>
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{ required: false }}
        render={({ field, fieldState }) => (
          <FormLabel label="E-mail">
            <Input
              type="email"
              placeholder="name@domen.com"
              value={field.value}
              // pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
              onChange={field.onChange}
              error={!!fieldState.error}
            />
          </FormLabel>
        )}
      />

      <FormLabel label="Salary">
        <Input readonly type="number" value={`${profile?.salary ?? 0}`} />
      </FormLabel>

      <Button onClick={handleSubmit(onSubmit)} loading={loading}>
        Save
      </Button>
    </div>
  );
};
