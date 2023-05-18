import { api } from '../api';

import type { AmpikaGetProductsResult, AmpikaProduct } from './types';

const ampikaApi = api.extend({ prefixUrl: 'https://www.ampika.ru/api/product/getmp.php' });

/**
 * Чтение списка продуктов
 * @param token токен для авторизации
 */
export const getAmpikaProducts = async (token: string): Promise<AmpikaProduct[]> => {
  const searchParams = new URLSearchParams();
  searchParams.set('token', token);

  const { records } = await ampikaApi.get('', { searchParams }).json<AmpikaGetProductsResult>();

  return records ?? [];
};
