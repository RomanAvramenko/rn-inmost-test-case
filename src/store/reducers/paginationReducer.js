import {PAGINATION_CURRENT_PAGE} from '../actions/actionsType';

const initialState = {
  currentPage: 0,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGINATION_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};
