import { Typography } from '@material-ui/core';
import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { weatherForecastDataState } from '../../recoil/selectors';
import { DailyForecast } from '../daily-forecast/DailyForecast';
import { HourlyForecast } from '../hourly-forecast/HourlyForecast';
import { useStyles } from './ForecastData.styles';

export const ForecastData: React.FC = () => {
  const classes = useStyles();
  const weatherForecastData = useRecoilValueLoadable(weatherForecastDataState);

  switch (weatherForecastData.state) {
    case 'loading':
      return null;
    case 'hasError':
      return null;
    case 'hasValue':
      return (
        <>
          <div className={classes.forecast}>
            <Typography variant="h6" gutterBottom>
              Hourly forecast
            </Typography>
            <HourlyForecast data={weatherForecastData.contents.hourly} />
          </div>
          <div className={classes.forecast}>
            <Typography variant="h6" gutterBottom>
              Daily forecast
            </Typography>
            <DailyForecast data={weatherForecastData.contents.daily} />
          </div>
        </>
      );
  }
};
