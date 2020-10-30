
import { Action, createReducer, on } from '@ngrx/store';
import { checkoutConversationAction, pushCurrentMessageListAction, removeMessageAction, resetAction, resetCurrentConversationAction, SDKReadyAction, updateConversationListAction, updateCurrentConversationAction, updateCurrentUserProfileAction } from '../actions';


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
  }
  ),
  on(updateConversationListAction, (state, { conversationList }) => ({
    ...state,
    conversationList
  })),
  on(resetCurrentConversationAction, (state) => ({
    ...state,
    currentConversation: {}
  })),
  on(pushCurrentMessageListAction, (state, { message }) => {
    // 还没当前会话，则跳过
    if (!state.currentConversation.conversationID) {
      return state;
    }
    if (Array.isArray(message)) {
      // 筛选出当前会话的消息
      const result = message.filter(item => item.conversationID === state.currentConversation.conversationID);
      state.currentMessageList = [...state.currentMessageList, ...result];
    } else if (message.conversationID === state.currentConversation.conversationID) {
      state.currentMessageList = [...state.currentMessageList, message];
    }
    return state;
  }),
  on(removeMessageAction, (state, { message }) => {
    const index = state.currentMessageList.findIndex(({ ID }) => ID === message.ID);
    if (index >= 0) {
      state.currentMessageList.splice(index, 1);
    }
    return state;
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