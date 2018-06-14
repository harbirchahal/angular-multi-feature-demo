import { Action } from '@ngrx/store';

import { ActionWithPayload } from './action-with-payload';
import { ActionTypes } from './action-types.enum';
import { Person } from '../models';

/*  CREATE Actions */
export class Create implements ActionWithPayload {
  readonly type = ActionTypes.Create;

  constructor(public payload: Person) {}
}

export class CreateSuccess implements ActionWithPayload {
  readonly type = ActionTypes.CreateSuccess;

  constructor(public payload: Person) {}
}

export class CreateFailure implements ActionWithPayload {
  readonly type = ActionTypes.CreateFailure;

  constructor(public payload: any) {}
}

/* UPDATE Actions */
export class Update implements ActionWithPayload {
  readonly type = ActionTypes.Update;

  constructor(public payload: Person) {}
}

export class UpdateSuccess implements ActionWithPayload {
  readonly type = ActionTypes.UpdateSuccess;

  constructor(public payload: Person) {}
}

export class UpdateFailure implements ActionWithPayload {
  readonly type = ActionTypes.UpdateFailure;

  constructor(public payload: any) {}
}
