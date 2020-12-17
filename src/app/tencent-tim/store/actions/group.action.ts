import { createAction, props } from '@ngrx/store';
import { GroupProfile, Member } from '../../im.type';

export const updateGroupListAction = createAction(
  '[group] updateGroupList',
  props<{ groupList: Array<GroupProfile>; }>()
);

export const updateCurrentMemberListAction = createAction(
  '[group] updateCurrentMemberList',
  props<{ currentMemberList: Array<Member>; }>()
);