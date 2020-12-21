import { CurrentWeatherData } from '../../types/current-weather-data';

export const currentWeatherData: CurrentWeatherData = {
  name: 'London',
  dt: 1607127600,
  coord: {
    lat: 51.5,
    lon: 0.1,
  },
  main: {
    temp: 2,
    feels_like: 1,
  },
  sys: {
    country: 'UK',
  },
  weather: [{ main: 'Clear', description: 'clear sky', icon: '01n' }],
};
