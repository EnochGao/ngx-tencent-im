import { createAction, props } from '@ngrx/store';
import { Conversation, MessageItem } from '../../im.type';

export const updateCurrentConversationAction = createAction(
  '[updateCurrentConversation]',
  props<{ conversation: Conversation; }>()
);
export const updateConversationListAction = createAction(
  '[updateConversationList]',
  props<{ conversationList: Array<Conversation>; }>()
);
export const resetCurrentConversationAction = createAction(
  '[resetCurrentConversation]'
);
export const pushCurrentMessageListAction = createAction(
  '[pushCurrentMessageList]',
  props<{ message: MessageItem; }>()
);
export const removeMessageAction = createAction(
  '[removeMessage]',
  props<{ message: any; }>()
);
export const resetConversationAction = createAction(
  '[reset]'
);

export const checkoutConversationAction = createAction(
  '[checkoutConversation]',
  props<{ conversationID: string; }>()
);
