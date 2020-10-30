import { Component, Input, OnInit } from '@angular/core';
import { ConversationItem } from '../../im.type';
import { getDate, getTime, isToday } from '../../util/date';
import TIM from 'tim-js-sdk';
import { select, Store } from '@ngrx/store';
import { checkoutConversationAction } from 'src/store/actions';
import { getCurrentConversationID } from 'src/store/selectors/conversation.selector';

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.less']
})
export class ConversationItemComponent implements OnInit {
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
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

  }

  get date() {
    if (
      !this.conversation.lastMessage ||
      !this.conversation.lastMessage.lastTime
    ) {
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
      // if (this.conversation.lastMessage.fromAccount === this.currentUserProfile.userID) {
      //   return '你撤回了一条消息';
      // }
      if (this.conversation.type === TIM.TYPES.CONV_C2C) {
        return '对方撤回了一条消息';
      }
      return `${this.conversation.lastMessage.fromAccount}撤回了一条消息`;
    }
    return this.conversation.lastMessage.messageForShow;
  }

  selectConversation() {
    // if (this.conversation.conversationID !== this.currentConversation.conversationID) {
    this.store.dispatch(
      checkoutConversationAction({ conversationID: this.conversation.conversationID })
    );
    // }
  }

}
