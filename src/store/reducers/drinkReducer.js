import {DRINKS_DATA_RESPONSE, DRINKS_RESET} from '../actions/actionsType';

const initialState = {
  dataArr: [],
};

export const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRINKS_DATA_RESPONSE:
      return {
        ...state,
        dataArr: [
          ...state.dataArr,
          {filter: action.filter, arr: action.payload},
        ],
      };
    case DRINKS_RESET:
      return {
        ...state,
        dataArr: [],
      };

    default:
      return state;
  }
};
