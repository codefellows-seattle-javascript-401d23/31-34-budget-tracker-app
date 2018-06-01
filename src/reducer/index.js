import { combineReducers } from 'redux';
import category from './category';
import expenses from './expense';

export default combineReducers({
  category,
  expenses,
});
