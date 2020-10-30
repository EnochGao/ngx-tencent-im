import { createAction, props } from '@ngrx/store';

export const updateCurrentConversationAction = createAction(
  '[updateCurrentConversation]',
  props<{ conversation: any; }>()
);
export const updateConversationListAction = createAction(
  '[updateConversationList]',
  props<{ conversationList: any; }>()
);
export const resetCurrentConversationAction = createAction(
  '[resetCurrentConversation]'
);
export const pushCurrentMessageListAction = createAction(
  '[pushCurrentMessageList]',
  props<{ message: any; }>()
);
export const removeMessageAction = createAction(
  '[removeMessage]',
  props<{ message: any; }>()
);
export const resetAction = createAction(
  '[reset]'
);

export const checkoutConversationAction = createAction(
  '[checkoutConversation]',
  props<{ conversationID: string; }>()
);
