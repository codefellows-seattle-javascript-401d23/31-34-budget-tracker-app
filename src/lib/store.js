import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer';
import reporter from './redux-reporter';
import session from './redux-session';

// const middleware = { reporter, session };
const store = createStore(reducer, composeWithDevTools(applyMiddleware(reporter, session)));

export default store;
