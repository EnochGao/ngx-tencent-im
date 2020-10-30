import { createAction, props } from '@ngrx/store';

export const showAction = createAction(
  '[showMessage]',
  props<{ msgType: string; message: any; }>()
);
