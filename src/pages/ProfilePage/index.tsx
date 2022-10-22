import { FC } from 'react';
import { useUserProfile } from '@src/hooks';
import { ProfileForm } from '@src/modules/ProfileForm';
import { Spinner } from '@src/components/Spinner';

const ProfilePage: FC = () => {
  const { loading, profile, updateProfile } = useUserProfile();

  if (loading) {
    return (
      <div className="h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return <ProfileForm profile={profile} onUpdateProfile={updateProfile} />;
};

export default ProfilePage;
