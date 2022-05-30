import { Action } from '@ngrx/store';
import { Conversation, Message } from 'tim-js-sdk';
export interface ConversationState {
    currentConversation: Conversation;
    currentMessageList: Array<Message>;
    nextReqMessageID: string;
    isCompleted: boolean;
    conversationList: Array<Conversation>;
}
export declare const initialState: ConversationState;
export declare function conversationReducer(state: ConversationState | undefined, action: Action): ConversationState;
export interface ConversationIDState {
    conversationID: string;
}
export declare const conversationIDInitialState: ConversationIDState;
export declare function conversationIDReducer(state: ConversationIDState | undefined, action: Action): ConversationIDState;
