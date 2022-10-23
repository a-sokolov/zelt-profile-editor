import { FC, PropsWithChildren } from 'react';

import type { FormLabelProps } from './types';

export const FormLabel: FC<PropsWithChildren<FormLabelProps>> = ({ name, label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={name} className="text-gray-500 text-xs">
      {label}
    </label>

    {children}
  </div>
);
