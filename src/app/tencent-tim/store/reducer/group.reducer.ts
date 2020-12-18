import { Action, on } from "@ngrx/store";
import { createReducer } from "@ngrx/store";
import { GroupProfile } from "../../im.type";
import { resetCurrentMemberListAction, updateCurrentMemberListAction, updateGroupListAction } from "../actions/group.action";

export interface GroupState {
  groupList: Array<any>;
  currentMemberList: Array<any>;
  createGroupModelVisible: boolean;
}

export const initialState: GroupState = {
  groupList: [],
  currentMemberList: [],
  createGroupModelVisible: false
};

const _groupReducer = createReducer(
  initialState,
  on(updateGroupListAction, (state: GroupState, { groupList }) => {
    return { ...state, groupList };
  }),
  on(updateCurrentMemberListAction, (state: GroupState, { currentMemberList }) => {
    return { ...state, currentMemberList };
  }),
  on(resetCurrentMemberListAction, (state: GroupState) => {
    return { ...state, currentMemberList: [] };
  }),
);

export function groupReducer(state: GroupState | undefined, action: Action) {
  return _groupReducer(state, action);
}