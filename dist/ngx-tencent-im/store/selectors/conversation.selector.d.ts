import { ReducerState } from '../reducer';
import { ConversationState } from '../reducer/conversation.reducer';
export declare const getCurrentConversationID: import("@ngrx/store").MemoizedSelector<ReducerState, any, import("@ngrx/store").DefaultProjectorFn<any>>;
export declare const conversationSelector: import("@ngrx/store").MemoizedSelector<ReducerState, ConversationState, import("@ngrx/store").DefaultProjectorFn<ConversationState>>;
export declare const currentConversationSelector: import("@ngrx/store").MemoizedSelector<ReducerState, Conversation, import("@ngrx/store").DefaultProjectorFn<Conversation>>;
export declare const conversationListSelector: import("@ngrx/store").MemoizedSelector<ReducerState, Conversation[], import("@ngrx/store").DefaultProjectorFn<Conversation[]>>;
