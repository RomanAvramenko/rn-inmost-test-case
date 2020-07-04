import Axios from 'axios';
import {DRINKS_DATA_RESPONSE, DRINKS_RESET} from './actionsType';

export const getDrinks = filter => dispatch => {
  Axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`,
  )
    .then(response => dispatch(setDrinks(response.data.drinks, filter)))
    .catch(error => console.error(error));
};

const setDrinks = (value, filter) => {
  return {
    type: DRINKS_DATA_RESPONSE,
    payload: value,
    filter: filter,
  };
};

export const resetDrinks = () => {
  return {
    type: DRINKS_RESET,
  };
};
