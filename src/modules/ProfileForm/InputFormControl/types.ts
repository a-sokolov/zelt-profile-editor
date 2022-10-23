import type { InputProps } from '@src/components/Input';

import type { FormControlProps } from '../types';

export type InputFromControlProps = FormControlProps &
  Omit<InputProps, 'name'> & {
    label: string;
  };
