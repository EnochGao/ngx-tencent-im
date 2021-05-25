import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimHelperService } from '../../tim-helper.service';

import { Store } from '@ngrx/store';

import { Conversation, ConversationItem } from '../../im.type';
import { currentConversationSelector, conversationListSelector } from '../../store/selectors';
import { showAction } from '../../store/actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.less']
})
export class ConversationListComponent implements OnInit, OnDestroy {
  conversationList: Array<ConversationItem> = [];
  timeout = null;
  showDialog = false;
  userID = '';
  subscription: Subscription;
  storeSubscription: Subscription;
  currentConversation: Conversation;

  constructor(
    private store: Store,
    private timHelperService: TimHelperService
  ) { }

  ngOnInit(): void {

    this.storeSubscription = this.store.select(currentConversationSelector)
      .subscribe(res => {
        this.currentConversation = res;
      });

    // 获取当前list会话
    this.subscription = this.store.select(conversationListSelector)
      .subscribe(res => {
        this.conversationList = res;
      });
  };

  add() {
    this.showDialog = true;
  }

  handleOk(): void {
    if (this.userID !== '@TIM#SYSTEM') {
      this.timHelperService.checkoutConversation(`C2C${this.userID}`);
      this.showDialog = false;
    }
    this.userID = '';
  }

  handleCancel(): void {
    this.showDialog = false;
  }

  refresh() {
    // if (!this.timeout) {
    //   this.timeout = setTimeout(() => {
    //     this.timeout = null;

    //   }, 1000);
    // }

    // 拉取会话列表
    this.timHelperService.tim.getConversationList().then(({ data }) => {
      console.log('刷新成功', data);
      this.store.dispatch(showAction({ msgType: 'success', message: '刷新成功！' }));

    }).catch((imError) => {
      console.error('getConversationList error:', imError); // 获取会话列表失败的相关信息
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

}
