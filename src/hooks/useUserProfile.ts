import { useCallback, useEffect, useState } from 'react';
import { ApiResult, getUserProfile, Profile, setUserProfile } from '@src/api';

type UseUserProfileResult = {
  loading: boolean;
  profile?: Profile;
  updateProfile: (profile: Profile) => Promise<void>;
};

export const useUserProfile = (): UseUserProfileResult => {
  const [profile, setProfile] = useState<Profile>();
  const [loading, setLoading] = useState(true);

  const getProfileData = useCallback(() => {
    setLoading(true);

    getUserProfile().then((data) => {
      setProfile(data);
      setLoading(false);
    });
  }, []);

  const updateProfile = useCallback(async (payload: Profile) => {
    const result = await setUserProfile(payload);
    if (result === ApiResult.Failure) {
      throw new Error('Something went wrong!');
    }
  }, []);

  useEffect(() => {
    getProfileData();
  }, [getProfileData]);

  return {
    loading,
    profile,
    updateProfile,
  };
};
