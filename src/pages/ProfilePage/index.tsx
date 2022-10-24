import { FC } from 'react';
import { useUserProfile } from '@src/hooks';
import { ProfileForm } from '@src/components/ProfileForm';
import CircularProgress from '@mui/material/CircularProgress';

import { PROGRESS_SIZE } from './constants';
import { ProgressWrapperStyled } from './styles';

const ProfilePage: FC = () => {
  const { isLoading, profile, updateProfile } = useUserProfile();

  if (isLoading) {
    return (
      <ProgressWrapperStyled>
        <CircularProgress size={PROGRESS_SIZE} />
      </ProgressWrapperStyled>
    );
  }

  return <ProfileForm profile={profile} onUpdateProfile={updateProfile} />;
};

export default ProfilePage;
