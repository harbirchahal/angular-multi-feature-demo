import * as personActions from './person.actions';
import * as loadActions from './load.actions';
import * as searchActions from './search.actions';

export * from './action-types.enum';
export * from './action-with-payload';
export * from './person.actions';
export * from './load.actions';
export * from './search.actions';

export type ActionsUnion =
  | personActions.Create
  | personActions.CreateSuccess
  | personActions.CreateFailure
  | personActions.Update
  | personActions.UpdateSuccess
  | personActions.UpdateFailure
  | loadActions.Load
  | loadActions.LoadSuccess
  | loadActions.LoadFailure
  | loadActions.Select
  | searchActions.Search
  | searchActions.SearchInitiated
  | searchActions.SearchComplete
  | searchActions.SearchError;