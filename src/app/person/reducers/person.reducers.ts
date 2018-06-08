import {
  Update,
  EntityState,
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';
import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import { Person } from '../models';
import { ActionTypes, ActionsUnion } from '../actions';

export interface State extends EntityState<Person> {
  selectedPersonId: number | null;
}

// function sortByFullName(p1: Person, p2: Person) {
//   const s1 = p1.firstname + p1.lastname;
//   const s2 = p2.firstname + p2.lastname;
//   return s1.localeCompare(s2);
// }

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: (person) => person.id,
  sortComparer: false /* sortByFullName */
});

export const initialState: State = adapter.getInitialState({
  selectedPersonId: null
});

export function reducer(state = initialState, action: ActionsUnion): State {
  switch(action.type) {
    case ActionTypes.CreateSuccess: {
      return adapter.addOne(action.payload, state);
    }

    case ActionTypes.UpdateSuccess: {
      const toUpdate: Update<Person> = { id: action.payload.id, changes: action.payload };
      return adapter.updateOne(toUpdate, state);
    }

    case ActionTypes.LoadSuccess: {
      return adapter.addAll(action.payload, state);
    }
    
    case ActionTypes.Select: {
      return {
        ...state,
        selectedPersonId: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

