import { selector } from 'recoil';
import { getCurrentWeatherData, getWeatherForecastData } from '../utils/api';
import { cityState, unitsState } from './atoms';

export const currentWeatherDataState = selector({
  key: 'currentWeatherDataState',
  get: async ({ get }) =>
    getCurrentWeatherData(get(cityState), get(unitsState)),
});

export const weatherForecastDataState = selector({
  key: 'weatherForecastDataState',
  get: async ({ get }) => {
    const { lat, lon } = get(currentWeatherDataState).coord;

    return getWeatherForecastData(lat, lon, get(unitsState));
  },
});
