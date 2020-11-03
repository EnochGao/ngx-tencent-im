import { createAction } from '@ngrx/store';

export const startComputeCurrentAction = createAction(
  '[startComputeCurrent]'
);
export const stopComputeCurrentAction = createAction(
  '[stopComputeCurrent]'
);