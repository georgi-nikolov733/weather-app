import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { App } from './components/app/App';

ReactDOM.render(
  <RecoilRoot>
    <CssBaseline />
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
