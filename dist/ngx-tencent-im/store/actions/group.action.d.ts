import { Group, GroupMember } from 'tim-js-sdk';
export declare const updateGroupListAction: import("@ngrx/store").ActionCreator<"[group] updateGroupList", (props: {
    groupList: Array<Group>;
}) => {
    groupList: Array<Group>;
} & import("@ngrx/store/src/models").TypedAction<"[group] updateGroupList">>;
export declare const updateCurrentMemberListAction: import("@ngrx/store").ActionCreator<"[group] updateCurrentMemberList", (props: {
    currentMemberList: Array<GroupMember>;
}) => {
    currentMemberList: Array<GroupMember>;
} & import("@ngrx/store/src/models").TypedAction<"[group] updateCurrentMemberList">>;
export declare const resetCurrentMemberListAction: import("@ngrx/store").ActionCreator<"[group] resetCurrentMemberList", () => import("@ngrx/store/src/models").TypedAction<"[group] resetCurrentMemberList">>;
