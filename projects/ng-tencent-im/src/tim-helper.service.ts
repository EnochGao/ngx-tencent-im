import { Inject, Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  loginAction,
  pushCurrentMessageListAction,
  resetConversationAction,
  resetUserAction,
  SDKReadyAction,
  showAction,
  updateConversationListAction,
  updateCurrentConversationAction,
  updateCurrentUserProfileAction,
  updateMessageAction
} from './store/actions';

import {
  conversationSelector,
} from './store/selectors';

import { Conversation, GroupProfile, IMResponse, LoginSuccess, Member, MessageItem, NgTimConfig, Tim } from './im.type';

import { genTestUserSig } from './tim-config/GenerateTestUserSig';
import { ConversationState } from './store/reducer/conversation.reducer';
import { resetCurrentMemberListAction, updateCurrentMemberListAction, updateGroupListAction } from './store/actions/group.action';
import { currentMemberListSelector } from './store/selectors/group.selector';

import TIM from 'tim-js-sdk';
import COS from "cos-js-sdk-v5";
import { MESSAGE_STATUS, NG_Tim_CONFIG } from './shared.data';
@Injectable({
  providedIn: 'root'
})
export class TimHelperService {
  tim: Tim;

  conversation: ConversationState; // 当前会话
  currentMemberList: Array<Member>; // 当前会话
  eventBus$: Subject<string> = new Subject();

  constructor(
    private store: Store,
    @Inject(NG_Tim_CONFIG) public config: NgTimConfig,
  ) {
    this.initTim(config);
    // 初始化监听器
    this.initListener();

    if (config.enableDefaultLogin) {
      this.login(config.account);
    }


    // 获取当前会话
    this.store.select(conversationSelector).subscribe(res => {
      this.conversation = res;
    });

    // 获取当前成员
    this.store.select(currentMemberListSelector).subscribe(res => {
      this.currentMemberList = res;
    });
  }

  login(userId: string) {
    this.tim.login({ userID: userId, userSig: genTestUserSig(userId).userSig })
      .then((imResponse: IMResponse<LoginSuccess>) => {
        this.eventBus$.next('login');
        this.store.dispatch(loginAction({ isLogin: true }));
        // this.store.dispatch(startComputeCurrentAction());
        this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.success, message: '登录成功！' }));
        if (imResponse.data.repeatLogin === true) {
          // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
          console.log(imResponse.data.errorInfo);
        }
      }).catch((imError) => {
        console.warn('login error:', imError); // 登录失败的相关信息
      });
  }

  logout() {
    // 若有当前会话，在退出登录时已读上报
    if (this.conversation.currentConversation.conversationID) {
      this.tim.setMessageRead({ conversationID: this.conversation.currentConversation.conversationID });
    }
    this.tim.logout().then((res) => {
      this.eventBus$.next('logout');
      // this.store.dispatch(stopComputeCurrentAction());
      this.store.dispatch(loginAction({ isLogin: false }));
      this.store.dispatch(resetUserAction());
      this.store.dispatch(resetConversationAction());

      this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.success, message: '已退出！' }));
    });
  }

  // 初始化tim监听函数
  initListener() {
    // sdk ready
    this.tim.on(TIM.EVENT.SDK_READY, this.onReadyStateUpdate, this);
    // SDK NOT READT
    this.tim.on(TIM.EVENT.SDK_NOT_READY, this.onReadyStateUpdate, this);
    // 被踢出
    this.tim.on(TIM.EVENT.KICKED_OUT, this.onKickOut, this);
    // SDK内部出错
    this.tim.on(TIM.EVENT.ERROR, this.onError, this);
    // 收到新消息
    this.tim.on(TIM.EVENT.MESSAGE_RECEIVED, this.onReceiveMessage, this);
    // 会话列表更新
    this.tim.on(TIM.EVENT.CONVERSATION_LIST_UPDATED, this.onUpdateConversationList, this);
    // 群组列表更新
    this.tim.on(TIM.EVENT.GROUP_LIST_UPDATED, this.onUpdateGroupList, this);
    // 网络监测
    this.tim.on(TIM.EVENT.NET_STATE_CHANGE, this.onNetStateChange, this);
    // 已读回执
    this.tim.on(TIM.EVENT.MESSAGE_READ_BY_PEER, this.onMessageReadByPeer, this);
  }

  private onReadyStateUpdate({ name }) {
    const isSDKReady = name === TIM.EVENT.SDK_READY ? true : false;
    this.store.dispatch(SDKReadyAction({ SDKReadyState: isSDKReady }));

    if (isSDKReady) {
      this.tim
        .getMyProfile()
        .then(({ data }) => {
          this.store.dispatch(updateCurrentUserProfileAction({ profile: data }));
        })
        .catch(error => {
          this.store.dispatch(showAction({
            msgType: MESSAGE_STATUS.warning,
            message: error.message
          }));
        });
    }
  }

  onKickOut(event: { name: string, data: { type: string; }; }) {
    this.eventBus$.next('logout');
    // this.store.dispatch(stopComputeCurrentAction());
    this.store.dispatch(loginAction({ isLogin: false }));
    this.store.dispatch(resetUserAction());
    this.store.dispatch(resetConversationAction());
    this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: '由于多实例登录被踢出，请重新登录!' }));
  }

  onError({ data }) {
    if (data.message !== 'Network Error') {
      console.log('%c error', 'color:red;font-size:20px;', data);
    }
  }
  onMessageReadByPeer(event: any) {
    console.log('已回执', event);
  }

  onReceiveMessage({ data: messageList }) {

    // this.handleVideoMessage(messageList);
    // this.handleAt(messageList);
    // this.handleQuitGroupTip(messageList);
    this.store.dispatch(pushCurrentMessageListAction({ message: messageList }));
  }

  // 会话列表更新
  onUpdateConversationList(event: { data: Array<Conversation>; }) {
    this.store.dispatch(updateConversationListAction({ conversationList: event.data }));
  }

  // 群列表更新
  onUpdateGroupList(event: { data: Array<GroupProfile>; }) {
    this.store.dispatch(updateGroupListAction({ groupList: event.data }));
  }

  onNetStateChange(event: any) {
    console.log('网络监测::', event);
  }
  /**
   * 切换会话
   * 调用时机：切换会话时
   */
  checkoutConversation(conversationID: string) {

    this.store.dispatch(resetCurrentMemberListAction());

    // 1.切换会话前，将切换前的会话进行已读上报
    if (this.conversation.currentConversation.conversationID) {
      const prevConversationID = this.conversation.currentConversation.conversationID;
      this.tim.setMessageRead({ conversationID: prevConversationID });
    }

    // 2.待切换的会话也进行已读上报
    this.tim.setMessageRead({ conversationID }).then(_ => {
      // 3. 获取会话信息
      this.tim.getConversationProfile(conversationID).then((res: IMResponse<{ conversation: Conversation; }>) => {
        // 3.1 更新当前会话
        this.store.dispatch(updateCurrentConversationAction({ conversation: res.data.conversation }));
        // 3.2 获取消息列表
        this.getMessageList(conversationID);

        if (res.data.conversation.type === TIM.TYPES.CONV_GROUP) {
          this.getGroupMemberList(res.data.conversation.groupProfile.groupID);
        }
      }).catch(err => {
        this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: err }));
      });
    });
  }

  /**
   * @description 获取消息
   */
  getMessageList(conversationID: string) {
    if (this.conversation.isCompleted) {
      this.store.dispatch(showAction({
        msgType: MESSAGE_STATUS.info,
        message: '已经没有更多的历史消息了哦'
      }));
      return;
    }
    const { nextReqMessageID, currentMessageList } = this.conversation;
    this.tim.getMessageList({ conversationID, nextReqMessageID, count: 15 })
      .then((imResponse: IMResponse<{ isCompleted: boolean, nextReqMessageID: string, messageList: Array<MessageItem>; }>) => {
        this.store.dispatch(updateMessageAction({
          nextReqMessageID: imResponse.data.nextReqMessageID,
          isCompleted: imResponse.data.isCompleted,
          currentMessageList: [...imResponse.data.messageList, ...currentMessageList]
        }));
      });
  }
  /**
   * @description 获取群成员
   */
  getGroupMemberList(groupID: string) {
    this.tim.getGroupMemberList({
      groupID: groupID,
      offset: this.currentMemberList.length,
      count: 30
    }).then((imResponse: IMResponse<{ memberList: Array<Member>; }>) => {
      this.store.dispatch(updateCurrentMemberListAction({ currentMemberList: imResponse.data.memberList }));
    });
  }


  private initTim(config: NgTimConfig) {
    // const cosImport = await import('cos-js-sdk-v5');
    // const timImport = await import('tim-js-sdk');

    this.tim = TIM.create({
      SDKAppID: config.sdkAppId,
    });
    // 无日志级别
    this.tim.setLogLevel(config.level || 1);
    // 注册 cos
    this.tim.registerPlugin({ 'cos-js-sdk': COS });
  }

}
