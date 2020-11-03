import { Injectable } from '@angular/core';
import TIM from 'tim-js-sdk';
import COSSDK from 'cos-js-sdk-v5';
import { genTestUserSig } from 'src/tim/GenerateTestUserSig';
import { select, Store } from '@ngrx/store';
import {
  loginAction,
  pushCurrentMessageListAction,
  SDKReadyAction,
  showAction,
  startComputeCurrentAction,
  stopComputeCurrentAction,
  updateCurrentConversationAction,
  updateCurrentUserProfileAction,
  updateMessageAction
} from 'src/store/actions';
import { getCurrentUserProfile, getSDkReady } from 'src/store/selectors/user.selector';
import { getMessage } from 'src/store/selectors/message.selector';
import { getSelectConversationStates } from 'src/store/selectors/conversation.selector';

@Injectable({
  providedIn: 'root'
})
export class TimAuthService {
  tim: any;
  userSig = genTestUserSig('user0');
  conversation: any;// 当前会话
  constructor(
    private store: Store
  ) {
    // 初始化 SDK 实例
    this.tim = TIM.create({
      SDKAppID: this.userSig.SDKAppID
    });
    // 无日志级别
    this.tim.setLogLevel(0);
    // 注册 cos
    this.tim.registerPlugin({ 'cos-js-sdk': COSSDK });
    // 初始化监听器
    this.initListener();

    const getCurrentUserProfile$ = this.store.pipe(select(getCurrentUserProfile));

    getCurrentUserProfile$.subscribe(res => {
      console.log('getCurrentUserProfile:::', res);
    });
    const getMessage$ = this.store.pipe(select(getMessage));

    getMessage$.subscribe(res => {
      console.log('getMessage:::', res);
    });

    const subscription = this.store.select(getSelectConversationStates).subscribe(res => {
      this.conversation = res;
    });

  }

  login(userId: string) {
    this.tim.login({ userID: userId, userSig: genTestUserSig(userId).userSig })
      .then((imResponse) => {
        console.log('登陆成功：：：', imResponse); // 登录成功
        this.store.dispatch(loginAction({ isLogin: true }));
        this.store.dispatch(startComputeCurrentAction());

        if (imResponse.data.repeatLogin === true) {
          // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
          console.log(imResponse.data.errorInfo);
        }
      }).catch(function (imError) {
        console.warn('login error:', imError); // 登录失败的相关信息
      });
  }

  logout() {
    // 若有当前会话，在退出登录时已读上报
    if (this.conversation.currentConversation.conversationID) {
      this.tim.setMessageRead({ conversationID: this.conversation.currentConversation.conversationID });
    }
    this.tim.logout().then(() => {
      this.store.dispatch(loginAction({ isLogin: false }));
      this.store.dispatch(stopComputeCurrentAction());

      this.store.dispatch(loginAction({ isLogin: false }));

      // context.commit('reset');
    });
  }

  initListener() {
    // 监听事件，如：
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

    // 网络监测
    this.tim.on(TIM.EVENT.NET_STATE_CHANGE, this.onNetStateChange, this);
    // 已读回执
    this.tim.on(TIM.EVENT.MESSAGE_READ_BY_PEER, this.onMessageReadByPeer, this);
  }


  onReadyStateUpdate({ name }) {
    console.log('ready ok:::', name);
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
            msgType: 'error',
            message: error.message
          }));
        });
    }
  }
  onKickOut(event: any) {
    console.log('被踢出：：', event);
    this.store.dispatch(loginAction({ isLogin: false }));
    // this.store.commit('reset');
  }
  onError({ data }) {
    if (data.message !== 'Network Error') {
      // this.$store.commit('showMessage', {
      //   message: data.message,
      //   type: 'error',
      // });
      console.log('%cerror', 'color:red;font-size:20px;', data);

    }
  }
  onMessageReadByPeer(event: any) {
    console.log('已回执', event);
  }
  onReceiveMessage({ data: messageList }) {

    console.log('收到消息--->', messageList);

    // this.handleVideoMessage(messageList);
    // this.handleAt(messageList);
    // this.handleQuitGroupTip(messageList);
    // this.store.dispatch(pushCurrentMessageListAction({ message: messageList }));
  }
  onUpdateConversationList(event) {

    // this.$store.commit('updateConversationList', event.data)
  }
  onNetStateChange(event: any) {
    console.log('网络监测::', event);
  }
  checkoutConversation(conversationID: string) {

    // this.store.commit('resetCurrentMemberList');
    // 1.切换会话前，将切换前的会话进行已读上报

    if (this.conversation.currentConversation.conversationID) {
      const prevConversationID = this.conversation.currentConversation.conversationID;
      console.log('%cprevConversationID::', 'color:green;font-size:20px', prevConversationID);
      this.tim.setMessageRead({ conversationID: prevConversationID });
    }

    // 2.待切换的会话也进行已读上报
    this.tim.setMessageRead({ conversationID });
    // 3. 获取会话信息
    return this.tim.getConversationProfile(conversationID).then(({ data }) => {
      // 3.1 更新当前会话
      this.store.dispatch(updateCurrentConversationAction({ conversation: data.conversation }));
      // 3.2 获取消息列表
      this.getMessageList(conversationID);
      // 3.3 拉取第一页群成员列表
      if (data.conversation.type === TIM.TYPES.CONV_GROUP) {
        // return this.store.dispatch('getGroupMemberList', data.conversation.groupProfile.groupID);
      }
      return Promise.resolve();
    });
  }


  getMessageList(conversationID: string) {
    if (this.conversation.currentConversation.isCompleted) {
      this.store.dispatch(showAction({
        msgType: 'info',
        message: '已经没有更多的历史消息了哦'
      }));
      return;
    }
    const { nextReqMessageID, currentMessageList } = this.conversation;
    this.tim.getMessageList({ conversationID, nextReqMessageID, count: 15 })
      .then(imReponse => {
        console.log('imReponse:::', imReponse);
        this.store.dispatch(updateMessageAction({
          nextReqMessageID: imReponse.data.nextReqMessageID,
          isCompleted: imReponse.data.isCompleted,
          currentMessageList: [...imReponse.data.messageList, ...currentMessageList]
        }));
      });
  }
}
