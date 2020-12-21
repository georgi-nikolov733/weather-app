import { capitalize } from '@material-ui/core';
import { format } from 'date-fns';
import { currentWeatherData } from '../../src/mocks/fixtures/current-weather-data.fixtures';
import { weatherForecastData } from '../../src/mocks/fixtures/weather-forecast-data.fixtures';

describe('App', () => {
  beforeEach(() => {
    cy.visit('/iframe.html', { qs: { id: 'app--default' } });
  });

  it(`displays error card when invalid city name is provided`, () => {
    cy.get('input[type=text]').type('Invalid city name{enter}');

    cy.findByText('Request failed with status code 404').should('be.visible');
  });

  it(`displays correct weather data when valid city name is provided`, () => {
    cy.get('input[type=text]').type('Invalid city name{enter}');
    cy.get('input[type=text]').clear();
    cy.get('input[type=text]').type(`${currentWeatherData.name}{enter}`);

    const location = `${currentWeatherData.name}, ${currentWeatherData.sys.country}`;
    const date = new Date(currentWeatherData.dt * 1000);
    const time = format(date, 'h:mma').toLowerCase();
    const day = format(date, 'MMM d');
    const formattedDate = `${time}, ${day}`;
    const altText = currentWeatherData.weather[0]?.main;
    const temperature = `${currentWeatherData.main.temp.toFixed()}°C`;
    const description =
      `Feels like ${currentWeatherData.main.feels_like.toFixed()}°C. ` +
      `${capitalize(currentWeatherData.weather[0]?.description)}.`;

    cy.findByText(location).should('be.visible');
    cy.findByText(formattedDate).should('be.visible');
    cy.findByAltText(altText).should('be.visible');
    cy.findByText(temperature).should('be.visible');
    cy.findByText(description).should('be.visible');

    weatherForecastData.daily.forEach((entry) => {
      const entryWeekday = format(new Date(entry.dt * 1000), 'iii, MMM d');
      const entryAltText = entry.weather[0]?.main;
      const entryTemperature = `${entry.temp.max.toFixed()} / ${entry.temp.min.toFixed()}°C`;
      const entryDescription = capitalize(entry.weather[0]?.description);

      cy.findByText(entryWeekday).should('be.visible');
      cy.findByAltText(entryAltText).should('be.visible');
      cy.findByText(entryTemperature).should('be.visible');
      cy.findByText(entryDescription).should('be.visible');
    });

    cy.findAllByText('2am').should('be.visible');
    cy.findAllByText('6am').should('be.visible');
    cy.findAllByText('6°C').should('be.visible');
    cy.findAllByText('3°C').should('be.visible');
    cy.findAllByText('0°C').should('be.visible');
    cy.findAllByText('-3°C').should('be.visible');
    cy.findAllByText('-6°C').should('be.visible');
  });

  it(`displays correct weather data when units are changed`, () => {
    cy.findByText('Metric: °C').click();
    cy.findByText('Imperial: °F').click();

    cy.findByText('Imperial: °F').should('be.visible');
    cy.findByText('Metric: °C').should('not.exist');

    const location = `${currentWeatherData.name}, ${currentWeatherData.sys.country}`;
    const date = new Date(currentWeatherData.dt * 1000);
    const time = format(date, 'h:mma').toLowerCase();
    const day = format(date, 'MMM d');
    const formattedDate = `${time}, ${day}`;
    const altText = currentWeatherData.weather[0]?.main;
    const temperature = `${currentWeatherData.main.temp.toFixed()}°F`;
    const description =
      `Feels like ${currentWeatherData.main.feels_like.toFixed()}°F. ` +
      `${capitalize(currentWeatherData.weather[0]?.description)}.`;

    cy.findByText(location).should('be.visible');
    cy.findByText(formattedDate).should('be.visible');
    cy.findByAltText(altText).should('be.visible');
    cy.findByText(temperature).should('be.visible');
    cy.findByText(description).should('be.visible');

    weatherForecastData.daily.forEach((entry) => {
      const entryWeekday = format(new Date(entry.dt * 1000), 'iii, MMM d');
      const entryAltText = entry.weather[0]?.main;
      const entryTemperature = `${entry.temp.max.toFixed()} / ${entry.temp.min.toFixed()}°F`;
      const entryDescription = capitalize(entry.weather[0]?.description);

      cy.findByText(entryWeekday).should('be.visible');
      cy.findByAltText(entryAltText).should('be.visible');
      cy.findByText(entryTemperature).should('be.visible');
      cy.findByText(entryDescription).should('be.visible');
    });

    cy.findAllByText('2am').should('be.visible');
    cy.findAllByText('6am').should('be.visible');
    cy.findAllByText('6°F').should('be.visible');
    cy.findAllByText('3°F').should('be.visible');
    cy.findAllByText('0°F').should('be.visible');
    cy.findAllByText('-3°F').should('be.visible');
    cy.findAllByText('-6°F').should('be.visible');
  });
});
