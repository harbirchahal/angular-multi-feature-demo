import { Action } from '@ngrx/store';

import { Person } from '../models';

export interface ActionWithPayload extends Action {
  payload: any;
} 

export enum ActionTypes {
  Create = '[Person] Create',
  CreateSuccess = '[Person] Create Success',
  CreateFailure = '[Person] Create Failure',

  Update = '[Person] Update',
  UpdateSuccess = '[Person] Update Success',
  UpdateFailure = '[Person] Update Failure',

  Load = '[Person] Load',
  LoadSuccess = '[Person] Load Success',
  LoadFailure = '[Person] Load Failure',

  Select = '[Book] Select',
}

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

export class Select implements ActionWithPayload {
  readonly type = ActionTypes.Select;

  constructor(public payload: number) {}
}

export type ActionsUnion =
  | Create
  | CreateSuccess
  | CreateFailure
  | Update
  | UpdateSuccess
  | UpdateFailure
  | Load
  | LoadSuccess
  | LoadFailure
  | Select;
