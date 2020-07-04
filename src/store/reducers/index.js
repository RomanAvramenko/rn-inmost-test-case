import {combineReducers} from 'redux';
import {drinkReducer} from './drinkReducer';
import {filterReducer} from './filterReducer';
import {paginationReducer} from './paginationReducer';

export default combineReducers({
  drinks: drinkReducer,
  filters: filterReducer,
  pagination: paginationReducer,
});
