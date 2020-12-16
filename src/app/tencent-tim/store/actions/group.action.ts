import { createAction, props } from '@ngrx/store';
import { GroupProfile } from '../../im.type';

export const updateGroupListAction = createAction(
  '[group] updateGroupList',
  props<{ groupList: Array<GroupProfile>; }>()
);