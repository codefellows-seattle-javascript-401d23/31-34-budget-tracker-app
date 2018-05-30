import React from 'react';
import { render as renderDOM } from 'react-dom';
import { Provider } from 'react-redux';

import App from './component/app/app';
import store from './lib/store';

const app = document.createElement('div');
document.body.appendChild(app);
renderDOM(<Provider store={store}><App/></Provider>, app);
