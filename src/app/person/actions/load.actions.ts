import { Action } from '@ngrx/store';

import { ActionWithPayload } from './action-with-payload';
import { ActionTypes } from './action-types.enum';
import { Person, PSearch } from '../models';

/* LOAD Actions */
export class Load implements Action {
  readonly type = ActionTypes.Load;
}

export class LoadSuccess implements ActionWithPayload {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Person[]) {}
}

export class LoadFailure implements ActionWithPayload {
  readonly type = ActionTypes.LoadFailure;

  constructor(public payload: any) {}
}

/* SELECT Actions */
export class Select implements ActionWithPayload {
  readonly type = ActionTypes.Select;

  constructor(public payload: number) {}
}