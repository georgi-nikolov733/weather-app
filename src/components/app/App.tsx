import Container from '@material-ui/core/Container';
import React from 'react';
import { TopBar } from '../top-bar/TopBar';
import { WeatherData } from '../weather-data/WeatherData';
import { useStyles } from './App.styles';

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <TopBar />
      <Container className={classes.pageContent} maxWidth="sm">
        <WeatherData />
      </Container>
    </>
  );
};
