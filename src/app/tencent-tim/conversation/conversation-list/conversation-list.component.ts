import { Component, OnInit } from '@angular/core';
import { TimAuthService } from '../../tim-auth.service';
import TIM from 'tim-js-sdk';
import { select, Store } from '@ngrx/store';
import { getSDkReady } from 'src/store/selectors/user.selector';
import { ConversationItem } from '../../im.type';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.less']
})
export class ConversationListComponent implements OnInit {
  conversationList: Array<ConversationItem> = [];

  constructor(
    private store: Store,
    private timAuthService: TimAuthService
  ) { }

  ngOnInit(): void {
    const SDKReady$ = this.store.pipe(select(getSDkReady));

    SDKReady$.subscribe(res => {
      console.log('准备好了', res);
      if (res) {
        this.refresh();
      }
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
