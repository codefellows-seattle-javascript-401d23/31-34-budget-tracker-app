import React from 'react';
import { render as renderDOM } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './component/app/app';
import categoriesReducer from './reducer/category';

const middleware = {};
const store = createStore(categoriesReducer, composeWithDevTools(applyMiddleware(...middleware)));

const app = document.createElement('div');
document.body.appendChild(app);
renderDOM(<Provider store={store}><App/></Provider>, app);
