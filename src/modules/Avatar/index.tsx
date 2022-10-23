import { FC } from 'react';
import { Button } from '@src/components/Button';

import type { AvatarProps } from './types';

export const Avatar: FC<AvatarProps> = ({ url, onChange, onDelete }) => (
  <div style={{ width: '250px' }} className="flex flex-row gap-6 items-center">
    <div
      style={{ width: '120px', height: '120px' }}
      className="rounded-full flex justify-center items-center bg-gray-200 overflow-hidden"
    >
      {url && <img alt="avatar" src={url} />}
      {!url && <p>No avatar</p>}
    </div>

    <div className="flex flex-col gap-2">
      <Button onClick={onChange} width="full">
        Change
      </Button>

      <Button appearance="secondary" onClick={onDelete} width="full">
        Delete
      </Button>
    </div>
  </div>
);
