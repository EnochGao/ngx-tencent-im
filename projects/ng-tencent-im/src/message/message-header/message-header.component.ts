import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Conversation, MessageItem, UserProfile } from '../../im.type';
import { getFullDate } from '../../util/date';
import TIM from 'tim-js-sdk';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.less']
})
export class MessageHeaderComponent implements OnInit {
  @Input() message: MessageItem;
  @Input() currentUserProfile: UserProfile;
  @Input() currentConversation: Conversation;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  get isMine() {
    return this.message.flow === 'out';
  }

  get date() {
    return getFullDate(new Date(this.message.time * 1000));
  }

  get from() {
    const isC2C = this.currentConversation.type === TIM.TYPES.CONV_C2C;
    // 自己发送的用昵称渲染
    if (this.isMine) {
      return this.currentUserProfile.nick || this.currentUserProfile.userID;
    }
    // 1. C2C 的消息体中还无 nick / avatar 字段，需从 conversation.userProfile 中获取
    if (isC2C) {
      return this.currentConversation.userProfile.nick || this.currentConversation.userProfile.userID;
    } else if (this.currentConversation.type === TIM.TYPES.CONV_SYSTEM) {
      return this.message.type === TIM.TYPES.MSG_GRP_SYS_NOTICE ? '群系统通知' : '系统通知';
    }
    // 2. 群组消息，用消息体中的 nick 渲染。nameCard暂时支持不完善
    return this.message.nick || this.message.from;
  }

}
