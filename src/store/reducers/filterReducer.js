import {
  FILTERS_LIST_RESPONSE,
  FILTER_CHECKED,
  FILTERS_APPLIED,
} from '../actions/actionsType';

const initialState = {
  filters: [],
  activeFilters: [],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERS_LIST_RESPONSE:
      return {
        ...state,
        filters: action.payload,
      };

    case FILTER_CHECKED:
      return {
        ...state,
        filters: state.filters.map(i => {
          if (i.id === action.payload) {
            i.checked = !i.checked;
          }
          return i;
        }),
      };
    case FILTERS_APPLIED:
      return {
        ...state,
        activeFilters: action.payload,
      };

    default:
      return state;
  }
};
