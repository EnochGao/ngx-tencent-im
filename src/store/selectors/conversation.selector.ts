import { createSelector } from '@ngrx/store';
import { ReducerState } from '../reducer';

const selectPlayerStates = (state: ReducerState) => state.currentConversationID;
export const getCurrentConversationID = createSelector(selectPlayerStates, (state: any) => state.conversationID);

const selectConversationStates = (state: ReducerState) => state.conversation;
export const getSelectConversationStates = createSelector(selectConversationStates, (state: any) => state);
