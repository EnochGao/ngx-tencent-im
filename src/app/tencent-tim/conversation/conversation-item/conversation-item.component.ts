import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ConversationItem } from '../../im.type';
import { getDate, getTime, isToday } from '../../util/date';

import { Store } from '@ngrx/store';

import { TimHelperService } from '../../tim-helper.service';

import { Subscription } from 'rxjs';
import { getSelectConversationStates } from '../../store/selectors';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.less']
})
export class ConversationItemComponent implements OnInit, OnDestroy {
  TIM = TIM;
  avatarSrc: string;

  date: string;
  messageForShow: string;

  @Input()
  set conversation(value: ConversationItem) {

    this._conversation = value;
    switch (value.type) {
      case 'GROUP':
        this.avatarSrc = value.groupProfile?.avatar;
      case 'C2C':
        this.avatarSrc = value.userProfile?.avatar;
      default:
        this.avatarSrc = 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-2.png';
    }

  }
  get conversation(): ConversationItem {
    return this._conversation;
  };
  private _conversation: ConversationItem;


  lastConversation: ConversationItem;
  storeSubscription: Subscription;

  constructor(
    private store: Store,
    private timHelperService: TimHelperService
  ) { }


  ngOnInit(): void {
    if (
      !this.conversation.lastMessage ||
      !this.conversation.lastMessage.lastTime
    ) {
      this.date = '';
    }
    const date = new Date(this.conversation.lastMessage.lastTime * 1000);
    if (isToday(date)) {
      this.date = getTime(date);
    }
    this.date = getDate(date);

    if (this.conversation.lastMessage.isRevoked) {
      if (this.conversation.type === TIM.TYPES.CONV_C2C) {
        this.messageForShow = '对方撤回了一条消息';
      }
      this.messageForShow = `${this.conversation.lastMessage.fromAccount}撤回了一条消息`;
    }
    this.messageForShow = this.conversation.lastMessage.messageForShow;

    this.storeSubscription = this.store.select(getSelectConversationStates)
      .subscribe(res => {
        this.lastConversation = res.currentConversation;
      });

  }

  selectConversation() {
    if (this.conversation.conversationID !== this.lastConversation.conversationID) {
      this.timHelperService.checkoutConversation(this.conversation.conversationID);
      this.timHelperService.eventBus$.next('select-item');
    }
  }

  ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

}
