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
  timeout = null;
  showDialog = false;
  userID = '';
  constructor(
    private store: Store,
    private timAuthService: TimAuthService
  ) { }

  ngOnInit(): void {
    const SDKReady$ = this.store.pipe(select(getSDkReady));

    SDKReady$.subscribe(res => {
      if (res) {
      

      }
    });

    this.conversationList = this.timAuthService.conversation.conversationList;
  };

  add() {
    this.showDialog = true;
  }

  handleOk(): void {
    if (this.userID !== '@TIM#SYSTEM') {
      this.timAuthService.checkoutConversation(`C2C${this.userID}`).then(() => {
        this.showDialog = false;
      });
    }
    this.userID = '';
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.showDialog = false;
  }

  refresh() {
    if (!this.timeout) {
      this.timeout = setTimeout(() => {
        this.timeout = null;
        // 拉取会话列表
        this.timAuthService.tim.getConversationList().then((imResponse) => {

        }).catch((imError) => {
          console.error('getConversationList error:', imError); // 获取会话列表失败的相关信息
        });
      }, 1000);
    }
  }

}
