import { capitalize, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import { useRecoilState } from 'recoil';
import { DAILY_FORECAST_DEFAULT_LENGTH } from '../../constants/defaults.constants';
import { WeatherForecastData } from '../../types/weather-forecast-data';
import { unitsState } from '../../recoil/atoms';
import { getIconUrl } from '../../utils/api';
import { formatTemperature, formatWeekday } from '../../utils/formatters';
import { useStyles } from './DailyForecast.styles';

interface DailyForecastProps {
  data: WeatherForecastData['daily'];
}

export const DailyForecast: React.FC<DailyForecastProps> = ({
  data,
}: DailyForecastProps) => {
  const classes = useStyles();
  const [units] = useRecoilState(unitsState);

  const listItems = data
    .slice(0, DAILY_FORECAST_DEFAULT_LENGTH)
    .map((entry) => {
      const weatherCondition = entry.weather[0];
      const maxTemperature = formatTemperature(entry.temp.max);
      const minTemperature = formatTemperature(entry.temp.min, units);

      return (
        <ListItem key={entry.dt} className={classes.listItem} divider>
          <Typography className={classes.weekday} variant="body2">
            {formatWeekday(entry.dt)}
          </Typography>
          <div className={classes.weather}>
            {weatherCondition && (
              <img
                className={classes.weatherIcon}
                src={getIconUrl(weatherCondition.icon)}
                alt={weatherCondition.main}
              />
            )}
            <Typography variant="body1">
              {maxTemperature} / {minTemperature}
            </Typography>
          </div>
          <Typography className={classes.weatherDescription} variant="body2">
            {weatherCondition && capitalize(weatherCondition.description)}
          </Typography>
        </ListItem>
      );
    });

  return (
    <div className={classes.root}>
      <List className={classes.list}>{listItems}</List>
    </div>
  );
};
