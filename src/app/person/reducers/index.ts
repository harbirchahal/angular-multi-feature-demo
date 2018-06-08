import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromPerson from './person.reducers'; 

export {
  State,
  reducer
} from './person.reducers';

type State = fromPerson.State;

// export interface State {
//   person: fromPerson.State;
//   search: fromSearch.State;
// }

// export const reducers: ActionReducerMap<State> = {
//   person: fromPerson.reducer,
//   search: fromSearch.reducer,
// }

export const getPersonState = createFeatureSelector<State>('person');

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