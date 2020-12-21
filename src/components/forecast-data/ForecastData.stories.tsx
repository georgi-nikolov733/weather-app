import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';
import { Units } from '../../constants/units.constants';
import { currentWeatherData } from '../../mocks/fixtures/current-weather-data.fixtures';
import { cityState, unitsState } from '../../recoil/atoms';
import { ForecastData } from './ForecastData';

export default {
  title: 'ForecastData',
  component: ForecastData,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof ForecastData>> = (args) => (
  <ForecastData {...args} />
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
