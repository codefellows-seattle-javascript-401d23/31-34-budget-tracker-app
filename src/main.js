import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Dashboard from './component/dashboard/dashboard';
import categoryReducer from './reducer/category';
import './styles/main.scss';

const middleware = {};
const store = createStore(categoryReducer, composeWithDevTools(applyMiddleware(...middleware)));

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDom.render(<Provider store={store}><Dashboard/></Provider>, appContainer);
