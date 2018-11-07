
import { Action } from '@ngrx/store';

import { ActionWithPayload } from './action-with-payload';
import { ActionTypes } from './action-types.enum';
import { Person, PSearch } from '../models';

/* SEARCH Actions */
export class Search implements ActionWithPayload {
  readonly type = ActionTypes.Search;

  constructor(public payload: PSearch) {}
}

export class SearchInitiated implements ActionWithPayload {
  readonly type = ActionTypes.SearchInitiated;

  constructor(public payload: PSearch) {}
}

export class SearchComplete implements ActionWithPayload {
  readonly type = ActionTypes.SearchComplete;

  constructor(public payload: Person[]) {}
}

export class SearchError implements ActionWithPayload {
  readonly type = ActionTypes.SearchError;

  constructor(public payload: any) {}
}

export class ResetSearch implements Action {
  readonly type = ActionTypes.ResetSearch;
}