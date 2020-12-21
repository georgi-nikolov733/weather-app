import { WeatherCondition } from './weather-condition';

export interface CurrentWeatherData {
  name: string;
  dt: number;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    feels_like: number;
  };
  sys: {
    country: string;
  };
  weather: WeatherCondition[];
}
