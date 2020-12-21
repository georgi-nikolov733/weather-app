import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';
import { Units } from '../../constants/units.constants';
import { currentWeatherData } from '../../mocks/fixtures/current-weather-data.fixtures';
import { cityState, unitsState } from '../../recoil/atoms';
import { App } from './App';

export default {
  title: 'App',
  component: App,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof App>> = (args) => <App {...args} />;

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
