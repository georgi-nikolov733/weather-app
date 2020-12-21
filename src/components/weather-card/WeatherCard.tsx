import { capitalize, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { CurrentWeatherData } from '../../types/current-weather-data';
import { unitsState } from '../../recoil/atoms';
import { getIconUrl } from '../../utils/api';
import { formatDate, formatTemperature } from '../../utils/formatters';
import { ForecastData } from '../forecast-data/ForecastData';
import { useStyles } from './WeatherCard.styles';

interface WeatherCardProps {
  data: CurrentWeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  data,
}: WeatherCardProps) => {
  const classes = useStyles();
  const [units] = useRecoilState(unitsState);

  const weatherCondition = data.weather[0];

  return (
    <Card variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} variant="h5">
          {data.name}, {data.sys.country}
        </Typography>
        <Typography className={classes.date} gutterBottom>
          {formatDate(data.dt)}
        </Typography>
        <div className={classes.weather}>
          {weatherCondition && (
            <img
              className={classes.weatherIcon}
              src={getIconUrl(weatherCondition.icon)}
              alt={weatherCondition.main}
            />
          )}
          <Typography variant="h4" gutterBottom={!weatherCondition}>
            {formatTemperature(data.main.temp, units)}
          </Typography>
        </div>
        <Typography variant="body1" gutterBottom>
          Feels like {formatTemperature(data.main.feels_like, units)}.
          {weatherCondition && ` ${capitalize(weatherCondition.description)}.`}
        </Typography>
        <ForecastData />
      </CardContent>
    </Card>
  );
};
