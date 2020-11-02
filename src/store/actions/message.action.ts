import { createAction, props } from '@ngrx/store';

export const showAction = createAction(
  '[showMessage]',
  props<{ msgType: string; message: any; }>()
);
export const updateMessageAction = createAction(
  '[updateMessage]',
  props<{ nextReqMessageID: string; isCompleted: boolean; currentMessageList: any; }>()
);

