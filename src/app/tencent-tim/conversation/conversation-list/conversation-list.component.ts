import { Component, OnInit } from '@angular/core';
import { TimAuthService } from '../../tim-auth.service';
import TIM from 'tim-js-sdk';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.less']
})
export class ConversationListComponent implements OnInit {
  conversationList = [];

  constructor(
    private timAuthService: TimAuthService
  ) { }

  ngOnInit(): void {
    // 监听事件，如：
    this.timAuthService.tim.on(TIM.EVENT.SDK_READY, (event) => {
      // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
      // event.name - TIM.EVENT.SDK_READY
      console.log('ready ok:::', event);
      this.refresh();
    });
  };

  refresh() {
    // 拉取会话列表
    this.timAuthService.tim.getConversationList().then((imResponse) => {
      this.conversationList = imResponse.data.conversationList; // 会话列表，用该列表覆盖原有的会话列表
      console.log('conversationList:::', this.conversationList);
    }).catch(function (imError) {
      console.warn('getConversationList error:', imError); // 获取会话列表失败的相关信息
    });
  }

}
