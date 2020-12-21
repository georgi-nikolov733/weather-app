import Axios from 'axios';
import {
  API_ONECALL_URL,
  API_WEATHER_URL,
  ICON_BASE_URL,
} from '../constants/api.constants';
import { Units } from '../constants/units.constants';
import { CurrentWeatherData } from '../types/current-weather-data';
import { WeatherForecastData } from '../types/weather-forecast-data';

export const getCurrentWeatherData = async (
  city: string,
  units: Units
): Promise<CurrentWeatherData> => {
  const response = await Axios.get(API_WEATHER_URL, {
    params: {
      appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
      q: city,
      units,
    },
  });

  return response.data;
};

export const getWeatherForecastData = async (
  lat: number,
  lon: number,
  units: Units
): Promise<WeatherForecastData> => {
  const response = await Axios.get(API_ONECALL_URL, {
    params: {
      appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
      lat,
      lon,
      units,
    },
  });

  return response.data;
};

export const getIconUrl = (icon: string): string =>
  `${ICON_BASE_URL}/${icon}@4x.png`;
