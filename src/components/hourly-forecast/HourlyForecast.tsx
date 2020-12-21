import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useRecoilState } from 'recoil';
import { COLOR_PALE_RED } from '../../constants/colors.constants';
import { HOURLY_FORECAST_DEFAULT_LENGTH } from '../../constants/defaults.constants';
import { WeatherForecastData } from '../../types/weather-forecast-data';
import { unitsState } from '../../recoil/atoms';
import { formatHours, formatTemperature } from '../../utils/formatters';

interface HourlyForecastProps {
  data: WeatherForecastData['hourly'];
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({
  data,
}: HourlyForecastProps) => {
  const [units] = useRecoilState(unitsState);

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart
        data={data
          .slice(0, HOURLY_FORECAST_DEFAULT_LENGTH)
          .map((entry) => ({ ...entry, ['Temperature']: entry.temp }))}
        margin={{
          top: 10,
          right: 40,
          bottom: 0,
          left: -20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="dt"
          tickFormatter={(value) => formatHours(value)}
          interval={3}
        />
        <YAxis tickFormatter={(value) => formatTemperature(value, units)} />
        <Tooltip
          formatter={(value) => formatTemperature(value as number, units)}
          labelFormatter={(value) => formatHours(value as number)}
        />
        <Area
          type="monotone"
          dataKey="Temperature"
          stroke={COLOR_PALE_RED}
          fill={COLOR_PALE_RED}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
