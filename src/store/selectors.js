import {createSelector} from 'reselect';

const listFilterSelector = state => state.drinks.dataArr;
const filtersList = state => state.filters.activeFilters;

export const DrinksListSelector = createSelector(
  listFilterSelector,
  items => items,
);

export const ActiveFiltersSelector = createSelector(
  filtersList,
  items => items,
);
