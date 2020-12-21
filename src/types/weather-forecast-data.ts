import { WeatherCondition } from './weather-condition';

interface HourlyForecastEntry {
  dt: number;
  temp: number;
}

interface DailyForecastEntry {
  dt: number;
  temp: {
    max: number;
    min: number;
  };
  weather: WeatherCondition[];
}

export interface WeatherForecastData {
  hourly: HourlyForecastEntry[];
  daily: DailyForecastEntry[];
}
