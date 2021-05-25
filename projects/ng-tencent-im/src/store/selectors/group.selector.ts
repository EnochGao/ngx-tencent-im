import { createSelector } from '@ngrx/store';
import { GroupProfile, Member } from '../../im.type';
import { ReducerState } from '../reducer';

const selectGroupListStates = (state: ReducerState) => state.group.groupList;
export const groupListSelector = createSelector(selectGroupListStates, (state: Array<GroupProfile>) => state);
const currentMemberListStates = (state: ReducerState) => state.group.currentMemberList;
export const currentMemberListSelector = createSelector(currentMemberListStates, (state: Array<Member>) => state);
