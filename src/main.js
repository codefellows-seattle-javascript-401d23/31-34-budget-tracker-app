import React from 'react';
import { render as renderDOM } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './component/app/app';
import reducer from './reducer/index';

const middleware = {};
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

const app = document.createElement('div');
document.body.appendChild(app);
renderDOM(<Provider store={store}><App/></Provider>, app);
