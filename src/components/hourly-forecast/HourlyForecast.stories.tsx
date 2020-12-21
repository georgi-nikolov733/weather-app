import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';
import { Units } from '../../constants/units.constants';
import { hourlyForecastData } from '../../mocks/fixtures/weather-forecast-data.fixtures';
import { unitsState } from '../../recoil/atoms';
import { HourlyForecast } from './HourlyForecast';

export default {
  title: 'HourlyForecast',
  component: HourlyForecast,
};

const Template: Story<ComponentProps<typeof HourlyForecast>> = (args) => (
  <HourlyForecast {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: hourlyForecastData,
};
Default.decorators = [
  (Story) => (
    <RecoilRoot initializeState={({ set }) => set(unitsState, Units.Metric)}>
      <Story />
    </RecoilRoot>
  ),
];
