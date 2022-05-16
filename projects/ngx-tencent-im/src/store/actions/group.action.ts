import { createAction, props } from '@ngrx/store';
import { Group, GroupMember } from 'tim-js-sdk';

export const updateGroupListAction = createAction(
  '[group] updateGroupList',
  props<{ groupList: Array<Group>; }>()
);

export const updateCurrentMemberListAction = createAction(
  '[group] updateCurrentMemberList',
  props<{ currentMemberList: Array<GroupMember>; }>()
);
export const resetCurrentMemberListAction = createAction(
  '[group] resetCurrentMemberList'
);
