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

  constructor(
    private store: Store
  ) {
    // 初始化 SDK 实例
    this.tim = TIM.create({
      SDKAppID: this.userSig.SDKAppID
    });
    // 无日志级别
    this.tim.setLogLevel(1);
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
  }


  login(userId: string) {
    this.tim.login({ userID: userId, userSig: genTestUserSig(userId).userSig })
      .then((imResponse) => {
        console.log('登陆成功：：：', imResponse); // 登录成功
        this.store.dispatch(loginAction({ isLogin: true }));

        if (imResponse.data.repeatLogin === true) {
          // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
          console.log(imResponse.data.errorInfo);
        }
      }).catch(function (imError) {
        console.warn('login error:', imError); // 登录失败的相关信息
      });
  }


  initListener() {
    // 监听事件，如：
    this.tim.on(TIM.EVENT.SDK_READY, this.onReadyStateUpdate, this);
    // 收到新消息
    this.tim.on(TIM.EVENT.MESSAGE_RECEIVED, this.onReceiveMessage, this);
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
  onReceiveMessage({ data: messageList }) {

    console.log('message list--->', messageList);
    // this.handleVideoMessage(messageList);
    // this.handleAt(messageList);
    // this.handleQuitGroupTip(messageList);
    this.store.dispatch(pushCurrentMessageListAction({ message: messageList }));
  }


  checkoutConversation(conversationID: string) {

    // this.store.commit('resetCurrentMemberList');
    // 1.切换会话前，将切换前的会话进行已读上报
    const subscription = this.store.select(getSelectConversationStates)
      .subscribe(res => {
        if (res.currentConversation.conversationID) {
          const prevConversationID = res.currentConversation.conversationID;
          this.tim.setMessageRead({ conversationID: prevConversationID });
        }
        if (subscription) {
          subscription.unsubscribe();
        }
      });

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
    const subscription = this.store.select(getSelectConversationStates)
      .subscribe(res => {
        // subscription.unsubscribe();
        if (res.currentConversation.isCompleted) {
          this.store.dispatch(showAction({
            msgType: 'info',
            message: '已经没有更多的历史消息了哦'
          }));
          return;
        }
        const { nextReqMessageID, currentMessageList } = res;
        this.tim.getMessageList({ conversationID, nextReqMessageID, count: 15 })
          .then(imReponse => {
            console.log('imReponse:::', imReponse);

            this.store.dispatch(updateMessageAction({
              nextReqMessageID: imReponse.data.nextReqMessageID,
              isCompleted: imReponse.data.isCompleted,
              currentMessageList: [...imReponse.data.messageList, ...currentMessageList]
            }));

          });

        if (subscription) {
          subscription.unsubscribe();
        }
      });
  }
}
