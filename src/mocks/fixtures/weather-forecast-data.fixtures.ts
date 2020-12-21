import { WeatherForecastData } from '../../types/weather-forecast-data';

export const hourlyForecastData: WeatherForecastData['hourly'] = [
  {
    dt: 1607126400,
    temp: 2,
  },
  {
    dt: 1607130000,
    temp: 0,
  },
  {
    dt: 1607133600,
    temp: -5,
  },
  {
    dt: 1607137200,
    temp: -1,
  },
  {
    dt: 1607140800,
    temp: 3,
  },
];

export const dailyForecastData: WeatherForecastData['daily'] = [
  {
    dt: 1607162400,
    temp: {
      max: 3,
      min: -5,
    },
    weather: [{ main: 'Clouds', description: 'broken clouds', icon: '04d' }],
  },
  {
    dt: 1607215200,
    temp: {
      max: 2,
      min: 0,
    },
    weather: [{ main: 'Rain', description: 'shower rain', icon: '09d' }],
  },
];

export const weatherForecastData: WeatherForecastData = {
  hourly: hourlyForecastData,
  daily: dailyForecastData,
};
