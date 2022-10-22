import { DEFAULT_PROFILE_STATE } from './constants';
import type { Profile } from './types';
import { ApiResult } from './types';

let profile: Profile = { ...DEFAULT_PROFILE_STATE };

export const getUserProfile = (): Promise<Profile> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(profile), 1e3);
  });

export const setUserProfile = (newProfile: Profile): Promise<ApiResult> =>
  new Promise((resolve) => {
    setTimeout(() => {
      profile = {
        ...newProfile,
      };
      resolve(ApiResult.Success);
    }, 2e3);
  });
