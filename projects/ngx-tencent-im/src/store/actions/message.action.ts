import { createAction, props } from '@ngrx/store';
import { Message } from 'tim-js-sdk';
import { MESSAGE_STATUS } from '../../shared.data';

export const showAction = createAction(
  '[showMessage]',
  props<{ msgType: MESSAGE_STATUS; message: any; }>()
);
export const updateMessageAction = createAction(
  '[updateMessage]',
  props<{ nextReqMessageID: string; isCompleted: boolean; currentMessageList: Array<Message>; }>()
);
