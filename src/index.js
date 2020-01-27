import React from 'react';
import ReactDOM from 'react-dom';
import StateHook from './stateHook';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<StateHook />, document.getElementById('root'));
serviceWorker.unregister();
