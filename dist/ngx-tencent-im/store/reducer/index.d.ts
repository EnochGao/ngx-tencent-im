import { ActionReducerMap } from '@ngrx/store';
import { ConversationIDState, ConversationState } from './conversation.reducer';
import { GroupState } from './group.reducer';
import { LoginState } from './login.reducer';
import { MessageState } from './message.reducer';
import { UserState } from './user.reducer';
export interface ReducerState {
    login: LoginState;
    user: UserState;
    message: MessageState;
    currentConversationID: ConversationIDState;
    conversation: ConversationState;
    group: GroupState;
}
export declare const reducers: ActionReducerMap<ReducerState>;
