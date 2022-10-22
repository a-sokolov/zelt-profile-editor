import { FC, PropsWithChildren } from 'react';

import type { FormLabelProps } from './types';

export const FormLabel: FC<PropsWithChildren<FormLabelProps>> = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <p className="text-gray-500 text-sm">{label}</p>
    {children}
  </div>
);
