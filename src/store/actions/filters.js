import {
  FILTERS_LIST_RESPONSE,
  FILTER_CHECKED,
  FILTERS_APPLIED,
} from './actionsType';
import Axios from 'axios';

export const getFilters = () => dispatch => {
  Axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then(response => dispatch(setFilters(response.data.drinks)))
    .catch(error => console.error(error));
};

const setFilters = value => {
  value.map((i, idx) => ((i.id = idx), (i.checked = true)));
  return {
    type: FILTERS_LIST_RESPONSE,
    payload: value,
  };
};

export const setChecked = id => {
  return {
    type: FILTER_CHECKED,
    payload: id,
  };
};

export const setApplyFilters = () => (dispatch, getState) => {
  const data = getState()
    .filters.filters.filter(i => i.checked)
    .map(i => i.strCategory);
  dispatch(saveAppliedFilters(data));
};

const saveAppliedFilters = data => {
  return {
    type: FILTERS_APPLIED,
    payload: data,
  };
};
