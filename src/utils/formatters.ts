import { format } from 'date-fns';
import { Units } from '../constants/units.constants';

const getDegrees = (units: Units): string => {
  switch (units) {
    case Units.Metric:
      return '°C';
    case Units.Imperial:
      return '°F';
    default:
      return '°';
  }
};

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const time = format(date, 'h:mma').toLowerCase();
  const day = format(date, 'MMM d');

  return `${time}, ${day}`;
};

export const formatHours = (timestamp: number): string =>
  format(new Date(timestamp * 1000), 'ha').toLowerCase();

export const formatWeekday = (timestamp: number): string =>
  format(new Date(timestamp * 1000), 'iii, MMM d');

export const formatTemperature = (temperature: number, units?: Units): string =>
  `${temperature.toFixed()}${units ? getDegrees(units) : ''}`;
