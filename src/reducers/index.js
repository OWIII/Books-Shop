import { combineReducers } from 'redux';

import books from './books';
import cart from './cart';
import filters from './filter';

export default combineReducers({
  books,
  cart,
  filters
});