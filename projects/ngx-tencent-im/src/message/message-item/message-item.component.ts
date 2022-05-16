import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Conversation, Message, Profile } from 'tim-js-sdk';
import { currentUserProfileSelector } from '../../store/selectors';
import TIM from 'tim-js-sdk';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.less']
})
export class MessageItemComponent implements OnInit, OnDestroy {
  TIM = TIM;
  currentUserProfile: Profile;
  subscription: Subscription;
  @Input() currentConversation: Conversation;
  @Input() message: Message;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select(currentUserProfileSelector)
      .subscribe(res => {
        this.currentUserProfile = res;
      });
  }

  // 是否显示头像，群提示消息不显示头像
  get showAvatar() {
    if (this.currentConversation.type === 'C2C' && !this.message.isRevoked) { // C2C且没有撤回的消息
      return true;
    } else if (this.currentConversation.type === 'GROUP' && !this.message.isRevoked) { // group且没有撤回的消息
      return this.message.type !== this.TIM.TYPES.MSG_GRP_TIP;
    }
    return false;
  }

  get currentConversationType() {
    if (this.currentConversation) {
      return this.currentConversation.type;
    }
  }

  get avatar() {
    if (this.currentConversation.type === 'C2C') {
      return this.isMine
        ? this.currentUserProfile.avatar
        : this.currentConversation.userProfile.avatar;
    } else if (this.currentConversation.type === 'GROUP') {
      return this.isMine
        ? this.currentUserProfile.avatar
        : this.message.avatar;
    } else {
      return '';
    }
  }

  get isMine() {
    return this.message.flow === 'out';
  }

  get messagePosition() {
    if (['TIMGroupTipElem', 'TIMGroupSystemNoticeElem'].includes(this.message.type)) {
      return 'position-center';
    }
    if (this.message.isRevoked) { // 撤回消息
      return 'position-center';
    }
    if (this.isMine) {
      return 'position-right';
    }
    return 'position-left';
  }

  get showMessageHeader() {
    if (['TIMGroupTipElem', 'TIMGroupSystemNoticeElem'].includes(this.message.type)) {
      return false;
    }
    if (this.message.isRevoked) { // 撤回消息
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
