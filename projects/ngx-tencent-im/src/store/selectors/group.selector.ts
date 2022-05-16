import { createSelector } from '@ngrx/store';
import { Group, GroupMember } from 'tim-js-sdk';
import { ReducerState } from '../reducer';

const selectGroupListStates = (state: ReducerState) => state.group.groupList;
export const groupListSelector = createSelector(selectGroupListStates, (state: Array<Group>) => state);
const currentMemberListStates = (state: ReducerState) => state.group.currentMemberList;
export const currentMemberListSelector = createSelector(currentMemberListStates, (state: Array<GroupMember>) => state);
