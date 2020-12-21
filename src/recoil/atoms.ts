import { atom } from 'recoil';
import { DEFAULT_CITY, DEFAULT_UNITS } from '../constants/defaults.constants';

export const cityState = atom({
  key: 'cityState',
  default: DEFAULT_CITY,
});

export const unitsState = atom({
  key: 'unitsState',
  default: DEFAULT_UNITS,
});
