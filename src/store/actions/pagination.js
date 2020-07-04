import {PAGINATION_CURRENT_PAGE} from './actionsType';

export const paginationCurrentPage = pageNumber => {
  return {
    type: PAGINATION_CURRENT_PAGE,
    payload: pageNumber,
  };
};
