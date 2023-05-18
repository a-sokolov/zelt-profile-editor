import ky from 'ky';

export const api = ky.create({
  retry: 1,
  timeout: 60000,
  throwHttpErrors: true,
});