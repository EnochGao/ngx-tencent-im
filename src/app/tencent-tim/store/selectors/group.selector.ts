import { createSelector } from '@ngrx/store';
import { GroupProfile } from '../../im.type';
import { ReducerState } from '../reducer';

const selectGroupListStates = (state: ReducerState) => state.group.groupList;
export const groupListSelector = createSelector(selectGroupListStates, (state: Array<GroupProfile>) => state);
