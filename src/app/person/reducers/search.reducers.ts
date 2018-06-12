import { Person, PSearch, EMPTY_QUERY } from '../models';
import { ActionTypes, ActionsUnion } from '../actions';

export interface State {
  result: Person[];
  query: PSearch,
  loading: boolean;
}

const initialState: State = {
  result: [],
  query: EMPTY_QUERY,
  loading: false
};

export function reducer(state = initialState, action: ActionsUnion) {
  switch(action.type) {
    case ActionTypes.SearchInitiated: {
      return {
        ...state,
        query: action.payload,
        loading: true
      };
    }

    case ActionTypes.SearchComplete: {
      return {
        ...state,
        result: action.payload,
        loading: false
      };
    }

    case ActionTypes.SearchError: {
      return {
        ...state,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}