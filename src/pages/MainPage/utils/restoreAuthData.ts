import { AUTH_STORAGE_KEY } from '../constants';
import type { AuthProperties } from '../types';

export const restoreAuthData = (): AuthProperties => {
  const value = window.localStorage.getItem(AUTH_STORAGE_KEY) ?? '{}';
  return JSON.parse(value) as AuthProperties;
};
