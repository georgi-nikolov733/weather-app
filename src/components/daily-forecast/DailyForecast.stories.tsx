import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';
import { Units } from '../../constants/units.constants';
import { dailyForecastData } from '../../mocks/fixtures/weather-forecast-data.fixtures';
import { unitsState } from '../../recoil/atoms';
import { DailyForecast } from './DailyForecast';

export default {
  title: 'DailyForecast',
  component: DailyForecast,
};

const Template: Story<ComponentProps<typeof DailyForecast>> = (args) => (
  <DailyForecast {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: dailyForecastData,
};
Default.decorators = [
  (Story) => (
    <RecoilRoot initializeState={({ set }) => set(unitsState, Units.Metric)}>
      <Story />
    </RecoilRoot>
  ),
];
