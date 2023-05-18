import { FC, PropsWithChildren, Suspense } from 'react';
import { Layout } from '@src/components/Layout';

export const Provider: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <Layout>
    <Suspense>{children}</Suspense>
  </Layout>
);
