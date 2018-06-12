import { Person, PSearch, EMPTY_QUERY } from '../models';
import { ActionTypes, ActionsUnion } from '../actions';

export interface State {
  result: Person[];
  query: PSearch
}

const initialState: State = {
  result: [],
  query: EMPTY_QUERY
};

export function reducer(state = initialState, action: ActionsUnion) {
  switch(action.type) {
    case ActionTypes.SearchInitiated: {
      return {
        ...state,
        query: action.payload
      };
    }

    case ActionTypes.SearchComplete: {
      return {
        ...state,
        result: action.payload
      };
    }

    default: {
      return state;
    }
  }
}