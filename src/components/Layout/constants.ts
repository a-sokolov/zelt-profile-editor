import { AppRoutes } from '@src/constants';
import type { AsideItem } from '@src/components/Aside';

export const ASIDE_ITEMS = Object.entries(AppRoutes).map<AsideItem>(([title, url]) => ({
  url,
  title,
}));
