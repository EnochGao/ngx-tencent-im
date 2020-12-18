import { ActionReducerMap } from '@ngrx/store';
import {
  conversationIDReducer,
  ConversationIDState,
  conversationReducer,
  ConversationState
} from './conversation.reducer';
import { groupReducer, GroupState } from './group.reducer';
import { LoginReducer, LoginState, } from './login.reducer';
import { showMessageReducer, MessageState } from './message.reducer';
import { UserReducer, UserState } from './user.reducer';


// state
export interface ReducerState {
  login: LoginState;
  user: UserState;
  message: MessageState;
  currentConversationID: ConversationIDState;
  conversation: ConversationState;
  group: GroupState;
}
// register the reducer functions
export const reducers: ActionReducerMap<ReducerState> = {
  login: LoginReducer,
  user: UserReducer,
  message: showMessageReducer,
  currentConversationID: conversationIDReducer,
  conversation: conversationReducer,
  group: groupReducer
};