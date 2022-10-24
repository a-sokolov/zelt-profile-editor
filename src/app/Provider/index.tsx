import { FC, PropsWithChildren, Suspense } from 'react';
import { LoginPage } from '@src/pages/LoginPage';
import { Layout } from '@src/components/Layout';

import { useSession } from '../hooks/useSession';

export const Provider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { isLogged, login, logout } = useSession();

  if (isLogged) {
    return (
      <Layout onLogout={logout}>
        <Suspense>{children}</Suspense>
      </Layout>
    );
  }

  return <LoginPage onLogin={login} />;
};
