import { FC, lazy } from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from '@src/constants';
import Typography from '@mui/material/Typography';

const ProfilePage = lazy(() => import('@src/pages/ProfilePage'));

export const Routes: FC = () => (
  <Router>
    <Route caseSensitive path={AppRoutes.Dashboard} element={<Typography>Dashboard</Typography>} />
    <Route caseSensitive path={AppRoutes.Favourites} element={<Typography>Favourites</Typography>} />
    <Route caseSensitive path={AppRoutes.Settings} element={<Typography>Settings</Typography>} />
    <Route caseSensitive path={AppRoutes.Notification} element={<Typography>Notification</Typography>} />
    <Route caseSensitive path={AppRoutes.Profile} element={<ProfilePage />} />

    <Route path="/" element={<Navigate to={AppRoutes.Profile} />} />
    <Route path="*" element={<p>404 not found</p>} />
  </Router>
);
