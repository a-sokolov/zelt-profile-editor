import { AppRoutes } from '@src/constants';
import type { AsideItem } from '@src/modules/Aside';

export const ASIDE_ITEMS = Object.entries(AppRoutes).map<AsideItem>(([title, url]) => ({
  url,
  title,
}));
