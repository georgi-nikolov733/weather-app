import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { worker } from '../src/mocks/handlers';

export const decorators = [
  (Story) => (
    <>
      <CssBaseline />
      <Story />
    </>
  ),
];

worker.start();
