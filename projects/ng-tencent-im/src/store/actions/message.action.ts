import { createAction, props } from '@ngrx/store';
import { MessageItem } from '../../im.type';
import { MESSAGE_STATUS } from '../../shared.data';

export const showAction = createAction(
  '[showMessage]',
  props<{ msgType: MESSAGE_STATUS; message: any; }>()
);
export const updateMessageAction = createAction(
  '[updateMessage]',
  props<{ nextReqMessageID: string; isCompleted: boolean; currentMessageList: Array<MessageItem>; }>()
);
