import type { Profile } from './types';

export const DEFAULT_PROFILE_PICTURE_URL = '/assets/profile.png';

export const DEFAULT_PROFILE_STATE: Profile = {
  firstName: 'Dua',
  lastName: 'Clipa',
  dateOfBirth: '1995-08-22',
  profilePictureURL: DEFAULT_PROFILE_PICTURE_URL,
  salary: 40000,
};
