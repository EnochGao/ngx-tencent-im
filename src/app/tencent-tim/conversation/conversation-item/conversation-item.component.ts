import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ConversationItem, UserProfile } from '../../im.type';
import { getDate, getTime, isToday } from '../../util/date';

import { Store } from '@ngrx/store';

import { TimHelperService } from '../../tim-helper.service';

import { Subscription } from 'rxjs';
import { getCurrentConversationSelector, getCurrentUserProfile, getSelectConversationStates } from '../../store/selectors';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.less']
})
export class ConversationItemComponent implements OnInit, OnDestroy {
  TIM = TIM;
  avatarSrc: string;

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
  currentUserProfile: UserProfile;

  storeSubscription: Subscription;
  profileSubscription: Subscription;

  constructor(
    private store: Store,
    private timHelperService: TimHelperService
  ) { }


  ngOnInit(): void {
    this.storeSubscription = this.store.select(getCurrentConversationSelector)
      .subscribe(res => {
        console.log('ccc', res);
        this.lastConversation = res;
      });

    this.profileSubscription = this.store.select(getCurrentUserProfile)
      .subscribe(res => {
        console.log('profiel', res);
        this.currentUserProfile = res;
      });
  }

  selectConversation() {
    if (this.conversation.conversationID !== this.lastConversation.conversationID) {
      this.timHelperService.checkoutConversation(this.conversation.conversationID);
      this.timHelperService.eventBus$.next('select-item');
    }
  }



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
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }


}
