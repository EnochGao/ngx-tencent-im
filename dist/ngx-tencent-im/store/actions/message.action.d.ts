import { Message } from 'tim-js-sdk';
import { MESSAGE_STATUS } from '../../shared.data';
export declare const showAction: import("@ngrx/store").ActionCreator<"[showMessage]", (props: {
    msgType: MESSAGE_STATUS;
    message: any;
}) => {
    msgType: MESSAGE_STATUS;
    message: any;
} & import("@ngrx/store/src/models").TypedAction<"[showMessage]">>;
export declare const updateMessageAction: import("@ngrx/store").ActionCreator<"[updateMessage]", (props: {
    nextReqMessageID: string;
    isCompleted: boolean;
    currentMessageList: Array<Message>;
}) => {
    nextReqMessageID: string;
    isCompleted: boolean;
    currentMessageList: Array<Message>;
} & import("@ngrx/store/src/models").TypedAction<"[updateMessage]">>;
