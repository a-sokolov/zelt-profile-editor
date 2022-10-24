import { FC } from 'react';
import MuiAvatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { AVATAR_SIZE } from './constants';
import { AvatarStyled, ButtonBlockStyled } from './styles';
import type { AvatarProps } from './types';

export const Avatar: FC<AvatarProps> = ({ url, onChange, onDelete }) => (
  <AvatarStyled>
    <MuiAvatar sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }} alt="avatar" src={url ?? ''} />

    <ButtonBlockStyled>
      <Button variant="contained" onClick={onChange}>
        Change
      </Button>

      <Button variant="outlined" onClick={onDelete} disabled={!url}>
        Delete
      </Button>
    </ButtonBlockStyled>
  </AvatarStyled>
);
