import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { currentWeatherDataState } from '../../recoil/selectors';
import { ErrorCard } from '../error-card/ErrorCard';
import { WeatherCard } from '../weather-card/WeatherCard';

export const WeatherData: React.FC = () => {
  const currentWeatherData = useRecoilValueLoadable(currentWeatherDataState);

  switch (currentWeatherData.state) {
    case 'loading':
      return null;
    case 'hasError':
      return <ErrorCard message={currentWeatherData.contents.message} />;
    case 'hasValue':
      return <WeatherCard data={currentWeatherData.contents} />;
  }
};
