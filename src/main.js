import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './component/app/app';
// import categoryReducer from './reducer/category';
import categoryReducer from './reducer/main';
import './styles/main.scss';

// -----------------------------------------------
// Setting up the store
// _______________________________________________

const middleware = {};
const store = createStore(categoryReducer, composeWithDevTools(applyMiddleware(...middleware)));

// ----------------------------------------------
// Rendering
// ______________________________________________

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDom.render(<Provider store={store}><App/></Provider>, appContainer);
