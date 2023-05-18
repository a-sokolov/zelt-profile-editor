import { FC, lazy } from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from '@src/constants';

const MainPage = lazy(() => import('@src/pages/MainPage'));

export const Routes: FC = () => (
  <Router>
    <Route caseSensitive path={AppRoutes.Main} element={<MainPage />} />

    <Route path="/" element={<Navigate to={AppRoutes.Main} />} />
    <Route path="*" element={<p>404 not found</p>} />
  </Router>
);
