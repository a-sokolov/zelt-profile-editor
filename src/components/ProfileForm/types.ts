import type { Profile } from '@src/api';

export type ProfileKeys = keyof Profile;

export type ProfileFormProps = {
  profile?: Profile;
  onUpdateProfile: (profile: Profile) => Promise<void>;
};

export type FormControlProps = {
  name: ProfileKeys;
};
