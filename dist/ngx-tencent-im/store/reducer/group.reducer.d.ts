import { Action } from "@ngrx/store";
export interface GroupState {
    groupList: Array<any>;
    currentMemberList: Array<any>;
    createGroupModelVisible: boolean;
}
export declare const initialState: GroupState;
export declare function groupReducer(state: GroupState | undefined, action: Action): GroupState;
