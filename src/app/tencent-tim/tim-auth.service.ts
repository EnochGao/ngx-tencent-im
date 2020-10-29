import { Injectable } from '@angular/core';
import { CreateTim } from 'src/tim/tim';
import TIM from 'tim-js-sdk';
import COSSDK from 'cos-js-sdk-v5';
import { genTestUserSig } from 'src/tim/GenerateTestUserSig';

@Injectable({
  providedIn: 'root'
})
export class TimAuthService {


  tim: any;

  userSig = genTestUserSig('user0');

  constructor() {
    // 初始化 SDK 实例
    this.tim = TIM.create({
      SDKAppID: this.userSig.SDKAppID
    });

    // 无日志级别
    this.tim.setLogLevel(1);
    // 注册 cos
    this.tim.registerPlugin({ 'cos-js-sdk': COSSDK });

    // // 监听事件，如：
    // this.tim.on(TIM.EVENT.SDK_READY, function (event) {
    //   // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
    //   // event.name - TIM.EVENT.SDK_READY
    //   console.log('ready ok:::', event);
    // });

    this.tim.login({ userID: 'user0', userSig: this.userSig.userSig })
      .then(function (imResponse) {
        console.log('登陆成功：：：', imResponse); // 登录成功

        if (imResponse.data.repeatLogin === true) {
          // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
          console.log(imResponse.data.errorInfo);
        }
      }).catch(function (imError) {
        console.warn('login error:', imError); // 登录失败的相关信息
      });

  }

}
