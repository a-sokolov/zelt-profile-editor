import { useCallback, useEffect, useState } from 'react';
import { ApiResult, getUserProfile, Profile, setUserProfile } from '@src/api';

type UseUserProfileResult = {
  isLoading: boolean;
  profile?: Profile;
  updateProfile: (profile: Profile) => Promise<void>;
};

export const useUserProfile = (): UseUserProfileResult => {
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(() => {
    setIsLoading(true);

    getUserProfile().then((data) => {
      setProfile(data);
      setIsLoading(false);
    });
  }, []);

  const updateProfile = useCallback(async (payload: Profile) => {
    const result = await setUserProfile(payload);
    if (result === ApiResult.Failure) {
      throw new Error('Something went wrong!');
    }

    setProfile(payload);
  }, []);

  useEffect(() => {
    getProfileData();
  }, [getProfileData]);

  return {
    isLoading,
    profile,
    updateProfile,
  };
};
