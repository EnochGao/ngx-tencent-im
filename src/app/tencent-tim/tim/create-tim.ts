import TIM from 'tim-js-sdk';
import COSSDK from 'cos-js-sdk-v5';
import { genTestUserSig } from './GenerateTestUserSig';


export function CreateTim() {
  // 初始化 SDK 实例
  let tim = TIM.create({
    SDKAppID: genTestUserSig('').SDKAppID
  });
  // 无日志级别
  tim.setLogLevel(1);
  // 注册 cos
  tim.registerPlugin({ 'cos-js-sdk': COSSDK });

  return tim;
}

export { TIM };
