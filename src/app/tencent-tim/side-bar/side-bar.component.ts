import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Conversation } from '../im.type';
import { ConversationState } from '../store/reducer/conversation.reducer';
import { conversationSelector } from '../store/selectors';

import { TimHelperService } from '../tim-helper.service';
import { titleNotify } from '../util/titleNotice';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  activeName = {
    CONVERSATION_LIST: 'conversation-list',
    GROUP_LIST: 'group-list',
    FRIEND_LIST: 'friend-list',
    BLACK_LIST: 'black-list',
  };
  totalUnreadCount = 0;
  active: string = this.activeName.CONVERSATION_LIST;
  showConversationList = false;
  constructor(
    private store: Store,
    private timHelperService: TimHelperService

  ) { }

  ngOnInit(): void {
    // 获取当前会话
    this.store.select(conversationSelector).subscribe(res => {
      console.log('哈哈', res);
      this.computeCount(res);
    });
  }

  handleClick(event: Event) {
    switch (event.target['id']) {
      case this.activeName.CONVERSATION_LIST:
        this.checkoutActive(this.activeName.CONVERSATION_LIST);
        break;
      case this.activeName.GROUP_LIST:
        this.checkoutActive(this.activeName.GROUP_LIST);
        break;
      case this.activeName.FRIEND_LIST:
        this.checkoutActive(this.activeName.FRIEND_LIST);
        break;
      case this.activeName.BLACK_LIST:
        this.checkoutActive(this.activeName.BLACK_LIST);
        break;
    }
  }

  checkoutActive(name: string) {
    this.active = name;

  }


  logout() {
    this.timHelperService.logout();
  }

  computeCount(state: ConversationState) {
    const result = state.conversationList.reduce((count, conversation) => {
      // 当前会话不计算总未读
      if (!this.hidden() && state.currentConversation.conversationID === conversation.conversationID) {
        return this.totalUnreadCount = count;
      }
      return this.totalUnreadCount = count + conversation.unreadCount;
    }, 0);
    titleNotify(result);
    return this.totalUnreadCount = result;
  }

  hidden() {
    if (typeof document.hasFocus !== 'function') {
      return document.hidden;
    }
    return !document.hasFocus();
  }
}
