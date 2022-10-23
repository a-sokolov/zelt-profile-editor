import type { HTMLInputTypeAttribute } from 'react';

import type { FormControlProps } from '../types';

export type InputFromControlProps = FormControlProps & {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
};
