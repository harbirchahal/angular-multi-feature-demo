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

  Select = '[Person] Select',

  Search = '[Person] Search',
  SearchInitiated = '[Person] Search Initiated',
  SearchComplete = '[Person] Search Complete',
  SearchError = '[Person] Search Error',

  ResetSearch = '[Person] Search Reset'
}