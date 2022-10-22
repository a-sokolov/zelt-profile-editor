import type { Profile } from '@src/api';

export type ProfileFormProps = {
  profile?: Profile;
  onUpdateProfile: (profile: Profile) => Promise<void>;
};
