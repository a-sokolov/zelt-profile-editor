import { FC, PropsWithChildren, Suspense } from 'react';
import { LoginForm } from '@src/modules/LoginForm';
import { Layout } from '@src/modules/Layout';

import { useSession } from './hooks/useSession';

export const Provider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { isLogged, login, logout } = useSession();

  if (isLogged) {
    return (
      <Layout onLogout={logout}>
        <Suspense>{children}</Suspense>
      </Layout>
    );
  }

  return <LoginForm onLogin={login} />;
};
