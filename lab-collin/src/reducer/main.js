import { combineReducers } from 'redux';
import sections from './section';
import expenses from './expense';

export default combineReducers({
  sections,
  expenses,
});
