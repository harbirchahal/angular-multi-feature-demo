import { Action } from '@ngrx/store';

import { ActionWithPayload } from './action-with-payload';
import { ActionTypes } from './action-types.enum';
import { Person } from '../models';

/* LOAD Actions */
export class Load implements Action {
  readonly type = ActionTypes.Load;

  // Payload has pagination or other options
  constructor(public payload?: any) {}
}

export class LoadSuccess implements ActionWithPayload {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: {data: Person[], options: any}) {}
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