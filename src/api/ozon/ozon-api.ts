import { api } from '../api';

import type { OzonGetProductInfoListFilter, OzonGetProductInfoListResult, OzonProductInfo } from './types';

const ozonApi = api.extend({ prefixUrl: 'https://api-seller.ozon.ru' });

const getHeaders = (clientId: string, apiKey: string): Record<string, string> => ({
  'Client-Id': clientId,
  'Api-Key': apiKey,
});

export const getOzonProductInfoList = async (
  clientId: string,
  apiKey: string,
  filter: OzonGetProductInfoListFilter,
): Promise<OzonProductInfo[]> => {
  const { result } = await ozonApi
    .post('v2/product/info/list', { headers: getHeaders(clientId, apiKey), body: JSON.stringify(filter) })
    .json<OzonGetProductInfoListResult>();

  return result?.items ?? [];
};
