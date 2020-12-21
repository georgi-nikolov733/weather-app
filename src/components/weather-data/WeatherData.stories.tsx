import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';
import { Units } from '../../constants/units.constants';
import { currentWeatherData } from '../../mocks/fixtures/current-weather-data.fixtures';
import { cityState, unitsState } from '../../recoil/atoms';
import { WeatherData } from './WeatherData';

export default {
  title: 'WeatherData',
  component: WeatherData,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof WeatherData>> = (args) => (
  <WeatherData {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <RecoilRoot
      initializeState={({ set }) => {
        set(cityState, currentWeatherData.name);
        set(unitsState, Units.Metric);
      }}
    >
      <Story />
    </RecoilRoot>
  ),
];

export const Error = Template.bind({});
Error.decorators = [
  (Story) => (
    <RecoilRoot
      initializeState={({ set }) => set(cityState, 'Invalid city name')}
    >
      <Story />
    </RecoilRoot>
  ),
];
