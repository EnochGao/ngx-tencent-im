import { Component, OnInit } from '@angular/core';
import { TimHelperService } from '../../tim-helper.service';

import { Store } from '@ngrx/store';

import { ConversationItem } from '../../im.type';
import { getSelectConversationStates } from 'src/store/selectors/conversation.selector';

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
    private timHelperService: TimHelperService
  ) { }

  ngOnInit(): void {

    // 获取当前会话
    this.store.select(getSelectConversationStates).subscribe(res => {
      console.log('%c getSelectConversationStates::', 'color:green;font-size:20px', res);

      this.conversationList = res.conversationList;
    });

  };

  add() {
    this.showDialog = true;
  }

  handleOk(): void {
    if (this.userID !== '@TIM#SYSTEM') {
      this.timHelperService.checkoutConversation(`C2C${this.userID}`);
      // .then(() => {
      //   this.showDialog = false;
      // });
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
        this.timHelperService.tim.getConversationList().then((imResponse) => {

        }).catch((imError) => {
          console.error('getConversationList error:', imError); // 获取会话列表失败的相关信息
        });
      }, 1000);
    }
  }

}
