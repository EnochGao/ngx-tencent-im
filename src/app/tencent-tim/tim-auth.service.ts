import { Injectable } from '@angular/core';
import { CreateTim } from 'src/tim/tim';
import TIM from 'tim-js-sdk';
import COSSDK from 'cos-js-sdk-v5';
import { genTestUserSig } from 'src/tim/GenerateTestUserSig';
import { select, Store } from '@ngrx/store';
import { loginAction, SDKReadyAction, showAction, updateCurrentUserProfileAction } from 'src/store/actions';
import { getCurrentUserProfile, getSDkReady } from 'src/store/selectors/user.selector';
import { getMessage } from 'src/store/selectors/message.selector';

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

}
