import { FC, lazy } from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from '@src/constants';

const ProfilePage = lazy(() => import('@src/pages/ProfilePage'));

export const Routes: FC = () => (
  <Router>
    <Route caseSensitive path={AppRoutes.Dashboard} element={<p>Dashboard</p>} />
    <Route caseSensitive path={AppRoutes.Favourites} element={<p>Favourites</p>} />
    <Route caseSensitive path={AppRoutes.Settings} element={<p>Settings</p>} />
    <Route caseSensitive path={AppRoutes.Notification} element={<p>Notification</p>} />
    <Route caseSensitive path={AppRoutes.Profile} element={<ProfilePage />} />

    <Route path="/" element={<Navigate to={AppRoutes.Profile} />} />
    <Route path="*" element={<p>404 not found</p>} />
  </Router>
);
