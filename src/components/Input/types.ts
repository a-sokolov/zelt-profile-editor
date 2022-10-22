import type { HTMLInputTypeAttribute } from 'react';

export type InputProps = {
  value?: string;
  placeholder?: string;
  readonly?: boolean;
  error?: boolean;
  type?: HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
};
