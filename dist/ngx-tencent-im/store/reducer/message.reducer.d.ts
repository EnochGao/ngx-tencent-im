import { Action } from '@ngrx/store';
export interface MessageState {
    type: string;
    message: any;
}
export declare const initialState: MessageState;
export declare function showMessageReducer(state: MessageState | undefined, action: Action): MessageState;
