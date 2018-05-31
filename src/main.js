import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './component/app/app';
import categoryReducer from './reducer/category';
import'./style/main.scss';

// setting up store -------------------------------------------------------------------
const middleware = {};
const store = createStore(categoryReducer, composeWithDevTools(applyMiddleware(...middleware)));

// rendering application --------------------------------------------------------------
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

// Josh - Notice that we Wrap the App in the Provider!  provider holds the store (when assigned
ReactDom.render(<Provider store={store}><App/></Provider>, appContainer);