import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import TIM from 'tim-js-sdk';
import { ConversationItem, MessageItem } from '../../im.type';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.less']
})
export class MessageItemComponent implements OnInit {
  TIM = TIM;
  @Input() currentConversation: ConversationItem;
  @Input() message: MessageItem;

  constructor(

  ) { }

  ngOnInit(): void {
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

  get isMine() {
    // console.log(this.currentUserProfile, this.currentConversation);
    return this.message.flow === 'out';
  }

  get messagePosition() {
    if (
      ['TIMGroupTipElem', 'TIMGroupSystemNoticeElem'].includes(
        this.message.type
      )
    ) {
      return 'position-center';
    }
    if (this.message.isRevoked) { // 撤回消息
      return 'position-center';
    }
    if (this.isMine) {
      return 'position-right';
    } else {
      return 'position-left';
    }
  }

  get showMessageHeader() {
    if (
      ['TIMGroupTipElem', 'TIMGroupSystemNoticeElem'].includes(
        this.message.type
      )
    ) {
      return false;
    }
    if (this.message.isRevoked) { // 撤回消息
      return false;
    }
    return true;
  }
}
