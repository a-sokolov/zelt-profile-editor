import { FC } from 'react';
import { useUserProfile } from '@src/hooks';
import { ProfileForm } from '@src/modules/ProfileForm';
import CircularProgress from '@mui/material/CircularProgress';

import { ProgressWrapperStyled } from './styles';

const ProfilePage: FC = () => {
  const { loading, profile, updateProfile } = useUserProfile();

  if (loading) {
    return (
      <ProgressWrapperStyled>
        <CircularProgress size={64} />
      </ProgressWrapperStyled>
    );
  }

  return <ProfileForm profile={profile} onUpdateProfile={updateProfile} />;
};

export default ProfilePage;
