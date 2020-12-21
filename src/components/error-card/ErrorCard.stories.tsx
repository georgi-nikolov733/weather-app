import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { statusCode400 } from '../../mocks/fixtures/error-messages.fixtures';
import { ErrorCard } from './ErrorCard';

export default {
  title: 'ErrorCard',
  component: ErrorCard,
};

const Template: Story<ComponentProps<typeof ErrorCard>> = (args) => (
  <ErrorCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: statusCode400,
};
