import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer';
import reporter from './redux-reporter';
import session from './redux-session';
import getStateFromLocalStorage from './local-storage';

const retrievedState = getStateFromLocalStorage();

const store = createStore(
  reducer,
  retrievedState,
  composeWithDevTools(applyMiddleware(reporter, session)),
);

export default store;
