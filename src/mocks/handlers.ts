import { rest, setupWorker } from 'msw';
import { API_ONECALL_URL, API_WEATHER_URL } from '../constants/api.constants';
import { currentWeatherData } from './fixtures/current-weather-data.fixtures';
import { weatherForecastData } from './fixtures/weather-forecast-data.fixtures';

export const worker = setupWorker(
  rest.get(API_WEATHER_URL, (req, res, ctx) => {
    const city = req.url.searchParams.get('q');

    if (city === currentWeatherData.name) {
      return res(ctx.json(currentWeatherData));
    }

    return res(ctx.status(404));
  }),
  rest.get(API_ONECALL_URL, (req, res, ctx) => {
    const lat = req.url.searchParams.get('lat');
    const lon = req.url.searchParams.get('lon');

    if (
      lat === currentWeatherData.coord.lat.toString() &&
      lon === currentWeatherData.coord.lon.toString()
    ) {
      return res(ctx.json(weatherForecastData));
    }

    return res(ctx.status(400));
  })
);
