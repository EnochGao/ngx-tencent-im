import { createAction, props } from '@ngrx/store';
import { Conversation, MessageItem } from '../../im.type';

export const updateCurrentConversationAction = createAction(
  '[conversation] updateCurrentConversation',
  props<{ conversation: Conversation; }>()
);
export const updateConversationListAction = createAction(
  '[conversation] updateConversationList',
  props<{ conversationList: Array<Conversation>; }>()
);
export const resetCurrentConversationAction = createAction(
  '[conversation] resetCurrentConversation'
);
export const pushCurrentMessageListAction = createAction(
  '[conversation] pushCurrentMessageList',
  props<{ message: MessageItem; }>()
);
export const removeMessageAction = createAction(
  '[conversation] removeMessage',
  props<{ message: any; }>()
);
export const resetConversationAction = createAction(
  '[conversation] reset'
);
export const checkoutConversationAction = createAction(
  '[conversation] checkoutConversation',
  props<{ conversationID: string; }>()
);
