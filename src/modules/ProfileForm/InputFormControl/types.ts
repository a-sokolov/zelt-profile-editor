import type { Profile } from '@src/api';
import type { InputProps } from '@src/components/Input';

export type InputFromControlProps = Omit<InputProps, 'name'> & {
  name: keyof Profile;
  label: string;
  required?: boolean;
};
