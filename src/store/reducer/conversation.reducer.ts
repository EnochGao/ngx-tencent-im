
import { Action, createReducer, on } from '@ngrx/store';
import { checkoutConversationAction, pushCurrentMessageListAction, removeMessageAction, resetAction, resetCurrentConversationAction, updateConversationListAction, updateCurrentConversationAction, updateCurrentUserProfileAction, updateMessageAction } from '../actions';


export interface ConversationState {
  currentConversation: any;
  currentMessageList: Array<any>;
  nextReqMessageID: string;
  isCompleted: boolean;// 当前会话消息列表是否已经拉完了所有消息
  conversationList: Array<any>;
}

export const initialState: ConversationState = {
  currentConversation: {},
  currentMessageList: [],
  nextReqMessageID: '',
  isCompleted: false, // 当前会话消息列表是否已经拉完了所有消息
  conversationList: []
};

const _conversationReducer = createReducer(
  initialState,
  on(updateCurrentConversationAction, (state, { conversation }) => {
    return {
      ...state,
      currentConversation: conversation,
      currentMessageList: [],
      nextReqMessageID: '',
      isCompleted: false// 当前会话消息列表是否已经拉完了所有消息
    };
  }),
  on(updateMessageAction, (state, { nextReqMessageID, isCompleted, currentMessageList }) => {
    return {
      ...state,
      currentMessageList: currentMessageList,
      nextReqMessageID: nextReqMessageID,
      isCompleted: isCompleted// 当前会话消息列表是否已经拉完了所有消息
    };
  }),
  on(updateConversationListAction, (state, { conversationList }) => {
    return {
      ...state,
      conversationList
    };
  }),
  on(resetCurrentConversationAction, (state) => ({
    ...state,
    currentConversation: {}
  })),
  on(pushCurrentMessageListAction, (state, { message }) => {
    // console.log('%c state::', 'color:red;font-size:30px', state);
    // console.log('%c pushCurrentMessageList::', 'color:red;font-size:30px', message);

    // 还没当前会话，则跳过
    if (!state.currentConversation.conversationID) {
      return { ...state };
    }
    if (Array.isArray(message)) {
      // 筛选出当前会话的消息
      let result = message.filter(item => item.conversationID === state.currentConversation.conversationID);
      let currentMessageList = [...state.currentMessageList, ...result];
      return { ...state, currentMessageList };
    } else if (message.conversationID === state.currentConversation.conversationID) {
      let currentMessageList = [...state.currentMessageList, message];
      console.log('currentMessageList:::', currentMessageList);
      console.log({ ...state, currentMessageList });
      return { ...state, currentMessageList };
    }
    return { ...state };
  }),
  on(removeMessageAction, (state, { message }) => {
    const index = state.currentMessageList.findIndex(({ ID }) => ID === message.ID);
    if (index >= 0) {
      let currentMessageList: Array<any> = state.currentMessageList;
      currentMessageList.splice(index, 1);
      return { ...state, currentMessageList };
    }
    return { ...state };

  }),
  on(resetAction, (state) => {
    return Object.assign(state, {
      currentConversation: {},
      currentMessageList: [],
      nextReqMessageID: '',
      isCompleted: false, // 当前会话消息列表是否已经拉完了所有消息
      conversationList: []
    });
  }),
);

export function conversationReducer(state: ConversationState | undefined, action: Action) {
  return _conversationReducer(state, action);
}

export interface ConversationIDState {
  conversationID: string;
}
export const conversationIDInitialState: ConversationIDState = {
  conversationID: '',
};

const _conversationIDReducer = createReducer(conversationIDInitialState,
  on(checkoutConversationAction, (state, { conversationID }) => ({
    conversationID
  })));

export function conversationIDReducer(state: ConversationIDState | undefined, action: Action) {
  return _conversationIDReducer(state, action);
}