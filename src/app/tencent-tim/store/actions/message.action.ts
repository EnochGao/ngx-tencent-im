import { createAction, props } from '@ngrx/store';
import { MessageItem } from '../../im.type';

export const showAction = createAction(
  '[showMessage]',
  props<{ msgType: string; message: any; }>()
);
export const updateMessageAction = createAction(
  '[updateMessage]',
  props<{ nextReqMessageID: string; isCompleted: boolean; currentMessageList: Array<MessageItem>; }>()
);
