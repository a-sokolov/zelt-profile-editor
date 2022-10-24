import { FC, lazy } from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from '@src/constants';
import Typography from '@mui/material/Typography';

const ProfilePage = lazy(() => import('@src/pages/ProfilePage'));

type PageStubProps = {
  title: string;
};

const PageStub: FC<PageStubProps> = ({ title }) => <Typography>{title}</Typography>;

export const Routes: FC = () => (
  <Router>
    <Route caseSensitive path={AppRoutes.Dashboard} element={<PageStub title="Dashboard" />} />
    <Route caseSensitive path={AppRoutes.Favourites} element={<PageStub title="Favourites" />} />
    <Route caseSensitive path={AppRoutes.Settings} element={<PageStub title="Settings" />} />
    <Route caseSensitive path={AppRoutes.Notification} element={<PageStub title="Notification" />} />
    <Route caseSensitive path={AppRoutes.Profile} element={<ProfilePage />} />

    <Route path="/" element={<Navigate to={AppRoutes.Profile} />} />
    <Route path="*" element={<p>404 not found</p>} />
  </Router>
);
