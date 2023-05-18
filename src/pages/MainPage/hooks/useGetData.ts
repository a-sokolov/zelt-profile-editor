import { useState } from 'react';
import type { OzonProductInfo } from '@src/api/ozon';
import { getAmpikaProducts } from '@src/api/ampika';
import { getOzonProductInfoList } from '@src/api/ozon';

import type { AuthProperties } from '../types';

// import { ozonProductInfoMock } from './mocks';

interface UseGetDataResult {
  fetch: (limit: number) => Promise<void>;

  loading: boolean;

  error?: string;

  ozonProductInfoList: OzonProductInfo[];
}

export const useGetData = (auth: AuthProperties): UseGetDataResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [ozonProductInfoList, setOzonProductInfoList] = useState<OzonProductInfo[]>([]);

  const fetch = async (limit?: number): Promise<void> => {
    setLoading(true);

    try {
      // setOzonProductInfoList([ozonProductInfoMock]);
      const ampikaProducts = await getAmpikaProducts(auth.token);

      setOzonProductInfoList(
        await getOzonProductInfoList(auth.clientId, auth.apiKey, {
          product_id: ampikaProducts.slice(0, limit).map((item) => +item.marketplace_prod_id),
        }),
      );
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetch,
    loading,
    error,
    ozonProductInfoList,
  };
};
