import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Conversation, ConversationItem, UserProfile } from '../../im.type';
import { getDate, getTime, isToday } from '../../util/date';

import { Store } from '@ngrx/store';

import { TimHelperService } from '../../tim-helper.service';

import { Subscription } from 'rxjs';
import { currentUserProfileSelector } from '../../store/selectors';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.less']
})
export class ConversationItemComponent implements OnInit, OnDestroy {
  @Input() currentConversation: Conversation;
  @Input() conversation: Conversation;

  TIM = TIM;
  currentUserProfile: UserProfile;
  profileSubscription: Subscription;

  constructor(
    private store: Store,
    private timHelperService: TimHelperService
  ) { }

  ngOnInit(): void {
    this.profileSubscription = this.store.select(currentUserProfileSelector)
      .subscribe(res => {
        this.currentUserProfile = res;
      });
  }

  selectConversation() {
    if (this.conversation.conversationID !== this.currentConversation.conversationID) {
      this.timHelperService.checkoutConversation(this.conversation.conversationID);
      // this.timHelperService.eventBus$.next('select-item');
    }
  }

  get avatarSrc() {
    switch (this.conversation.type) {
      case 'GROUP':
        return this.conversation.groupProfile?.avatar;
      case 'C2C':
        return this.conversation.userProfile?.avatar;
      default:
        return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-2.png';
    }

  };

  get date() {
    if (!this.conversation.lastMessage || !this.conversation.lastMessage.lastTime) {
      return '';
    }
    const date = new Date(this.conversation.lastMessage.lastTime * 1000);
    if (isToday(date)) {
      return getTime(date);
    }
    return getDate(date);
  }
  get messageForShow() {
    if (this.conversation.lastMessage.isRevoked) {
      if (this.conversation.lastMessage.fromAccount === this.currentUserProfile?.userID) {
        return '你撤回了一条消息';
      }
      if (this.conversation.type === TIM.TYPES.CONV_C2C) {
        return '对方撤回了一条消息';
      }
      return `${this.conversation.lastMessage.fromAccount}撤回了一条消息`;
    }
    return this.conversation.lastMessage.messageForShow;
  }

  ngOnDestroy(): void {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }

}
