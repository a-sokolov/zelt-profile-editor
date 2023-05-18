import { AUTH_STORAGE_KEY } from '../constants';
import type { AuthProperties } from '../types';

export const saveAuthData = (auth: AuthProperties): void => {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
};
