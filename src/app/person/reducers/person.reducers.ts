import {
  Update,
  EntityState,
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import { Person, Page } from '../models';
import { ActionTypes, ActionsUnion } from '../actions';

export interface State extends EntityState<Person> {
  selectedPersonId: number | null;
  pagination: Page;
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

const initialState: State = adapter.getInitialState({
  selectedPersonId: null,
  pagination: {
    length: 0,
    pageIndex: 0,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100]
  }
});

export function reducer(state = initialState, action: ActionsUnion): State {
  switch(action.type) {
    case ActionTypes.CreateSuccess: {
      const uState = {
        ...state,
        pagination: {
          ...state.pagination,
          length: state.pagination.length + 1
        }
      };
      return adapter.addOne(action.payload, uState);
    }

    case ActionTypes.UpdateSuccess: {
      const toUpdate: Update<Person> = { id: action.payload.id, changes: action.payload };
      return adapter.updateOne(toUpdate, state);
    }

    case ActionTypes.LoadSuccess: {
      const { data, options } = action.payload;
      const uState = {
        ...state,
        pagination: {
          ...state.pagination,
          length: options.length,
          pageIndex: options.pageIndex,
          pageSize: options.pageSize
        }
      };
      return adapter.addAll(data, uState);
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

