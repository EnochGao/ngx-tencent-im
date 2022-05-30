import { Conversation } from 'tim-js-sdk';
export declare const updateCurrentConversationAction: import("@ngrx/store").ActionCreator<"[conversation] updateCurrentConversation", (props: {
    conversation: Conversation;
}) => {
    conversation: Conversation;
} & import("@ngrx/store/src/models").TypedAction<"[conversation] updateCurrentConversation">>;
export declare const updateConversationListAction: import("@ngrx/store").ActionCreator<"[conversation] updateConversationList", (props: {
    conversationList: Array<Conversation>;
}) => {
    conversationList: Array<Conversation>;
} & import("@ngrx/store/src/models").TypedAction<"[conversation] updateConversationList">>;
export declare const resetCurrentConversationAction: import("@ngrx/store").ActionCreator<"[conversation] resetCurrentConversation", () => import("@ngrx/store/src/models").TypedAction<"[conversation] resetCurrentConversation">>;
export declare const pushCurrentMessageListAction: import("@ngrx/store").ActionCreator<"[conversation] pushCurrentMessageList", (props: {
    message: Message;
}) => {
    message: Message;
} & import("@ngrx/store/src/models").TypedAction<"[conversation] pushCurrentMessageList">>;
export declare const removeMessageAction: import("@ngrx/store").ActionCreator<"[conversation] removeMessage", (props: {
    message: any;
}) => {
    message: any;
} & import("@ngrx/store/src/models").TypedAction<"[conversation] removeMessage">>;
export declare const resetConversationAction: import("@ngrx/store").ActionCreator<"[conversation] reset", () => import("@ngrx/store/src/models").TypedAction<"[conversation] reset">>;
export declare const checkoutConversationAction: import("@ngrx/store").ActionCreator<"[conversation] checkoutConversation", (props: {
    conversationID: string;
}) => {
    conversationID: string;
} & import("@ngrx/store/src/models").TypedAction<"[conversation] checkoutConversation">>;
