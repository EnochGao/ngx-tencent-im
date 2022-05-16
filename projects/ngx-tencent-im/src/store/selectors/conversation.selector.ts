import { createSelector } from '@ngrx/store';
import { Conversation } from 'tim-js-sdk';
import { ReducerState } from '../reducer';
import { ConversationState } from '../reducer/conversation.reducer';

const selectPlayerStates = (state: ReducerState) => state.currentConversationID;
export const getCurrentConversationID = createSelector(selectPlayerStates, (state: any) => state.conversationID);

const selectConversation = (state: ReducerState) => state.conversation;
export const conversationSelector = createSelector(selectConversation, (state: ConversationState) => state);


const selectCurrentConversation = (state: ReducerState) => state.conversation.currentConversation;
export const currentConversationSelector = createSelector(selectCurrentConversation, (state: Conversation) => state);


const selectConversationList = (state: ReducerState) => state.conversation.conversationList;
export const conversationListSelector =
  createSelector(selectConversationList, (state: Array<Conversation>) => state);
