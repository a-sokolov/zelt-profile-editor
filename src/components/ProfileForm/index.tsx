import { FC, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import dayjs from 'dayjs';
import type { Profile } from '@src/api';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

import { InputFormControl } from './InputFormControl';
import { AvatarFormControl } from './AvatarFormControl';
import { schema } from './schema';
import { ProfileFormStyled, ButtonsBlockStyled, TextFieldsBlockStyled } from './styles';
import type { ProfileFormProps, ProfileKeys } from './types';

export const ProfileForm: FC<ProfileFormProps> = ({ profile, onUpdateProfile }) => {
  const [isSaving, setIsSaving] = useState(false);
  const methods = useForm<Profile, ProfileKeys>({
    mode: 'onChange',
    defaultValues: profile,
    resolver: yupResolver(schema),
  });
  const { handleSubmit, formState, reset } = methods;

  const onSubmit = (data: Profile) => {
    setIsSaving(true);

    const modifiedData: Profile = { ...data, dateOfBirth: dayjs(data.dateOfBirth).format('YYYY-MM-DD') };

    onUpdateProfile(modifiedData).then(() => {
      reset(modifiedData);
      setIsSaving(false);
    });
  };

  const handleCancel = () => {
    reset();
  };

  const { isValid, isDirty } = formState;

  return (
    <ProfileFormStyled $disabled={isSaving}>
      <FormProvider {...methods}>
        <AvatarFormControl name="profilePictureURL" />

        <TextFieldsBlockStyled>
          <InputFormControl name="firstName" label="First name" placeholder="John" />

          <InputFormControl name="lastName" label="Last name" placeholder="Wick" />

          <InputFormControl name="dateOfBirth" label="Date of birth" type="date" />

          <InputFormControl name="phone" label="Phone number" placeholder="89991234567" />

          <InputFormControl name="email" label="E-mail" placeholder="name@domen.com" />

          <InputFormControl name="salary" label="Salary" disabled />
        </TextFieldsBlockStyled>

        <ButtonsBlockStyled>
          <LoadingButton
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            loading={isSaving}
            disabled={!isDirty || !isValid}
          >
            Save profile
          </LoadingButton>

          <Button variant="outlined" onClick={handleCancel} disabled={!isDirty || isSaving}>
            Cancel
          </Button>
        </ButtonsBlockStyled>
      </FormProvider>
    </ProfileFormStyled>
  );
};
