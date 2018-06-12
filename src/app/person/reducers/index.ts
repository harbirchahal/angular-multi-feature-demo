import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromPerson from './person.reducers'; 
import * as fromSearch from './search.reducers'; 

export interface State {
  people: fromPerson.State;
  search: fromSearch.State;
}

export const reducers: ActionReducerMap<State> = {
  people: fromPerson.reducer,
  search: fromSearch.reducer,
}

const featureSelector = createFeatureSelector<State>('person');

/* PERSON */
const getPersonState = createSelector(
  featureSelector,
  (state) => state.people
);

export const {
  selectIds: getPersonIds,
  selectEntities: getPersonEntities,
  selectAll: getAllPersons,
  selectTotal: getTotalPersons
} = fromPerson.adapter.getSelectors(getPersonState);

export const getSelectedPersonId = createSelector(
  getPersonState,
  (state) => state.selectedPersonId
);

export const getSelectedPerson =  createSelector(
  getPersonEntities,
  getSelectedPersonId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
)

/* SEARCH */
const getSearchState = createSelector(
  featureSelector,
  (state) => state.search
);

export const getSearchQuery = createSelector(
  getSearchState,
  (state) => state.query
);

export const getSearchResult = createSelector(
  getSearchState,
  (state) => state.result
);