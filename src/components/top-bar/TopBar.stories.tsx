import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { RecoilRoot } from 'recoil';
import { Units } from '../../constants/units.constants';
import { unitsState } from '../../recoil/atoms';
import { TopBar } from './TopBar';

export default {
  title: 'TopBar',
  component: TopBar,
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
};

const Template: Story<ComponentProps<typeof TopBar>> = (args) => (
  <TopBar {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <RecoilRoot initializeState={({ set }) => set(unitsState, Units.Metric)}>
      <Story />
    </RecoilRoot>
  ),
];
