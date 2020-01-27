import React from 'react';
import ReactDOM from 'react-dom';
import StateHook from './stateHook';
import EffectHook from './effectHook';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <StateHook />
    <EffectHook />
  </div>,
  document.getElementById('root')
);
serviceWorker.unregister();
