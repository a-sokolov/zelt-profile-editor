import { type FC, type PropsWithChildren } from 'react';
import Alert from '@mui/material/Alert';
import { CircularProgress } from '@mui/material';

interface ProgressProps {
  error?: string;

  loading: boolean;
}

export const Progress: FC<PropsWithChildren<ProgressProps>> = ({ error, loading, children }) => {
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (loading) {
    return <CircularProgress size="30px" />;
  }

  return <>{children}</>;
};
