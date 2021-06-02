import { Component, Input, OnInit } from '@angular/core';
import { MessageItem } from '../../im.type';
import TIM from 'tim-js-sdk';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.less']
})
export class MessageBubbleComponent implements OnInit {
  @Input() message: MessageItem;
  @Input() isMine: boolean;
  @Input() isNew: boolean;

  constructor() { }

  ngOnInit(): void {
  }


  get bubbleStyle() {
    let classString = '';
    if (this.isMine) {
      classString += 'message-send';
    } else {
      classString += 'message-received';
    }
    if (this.isNew) {
      classString += 'new';
    }
    return classString;
  }

  get messageReadByPeer() {
    if (this.message.conversationType === TIM.TYPES.CONV_C2C && this.message.isPeerRead) {
      return '已读';
    }
    if (this.message.conversationType === TIM.TYPES.CONV_C2C && !this.message.isPeerRead) {
      return '未读';
    }
    return '';
  }
  get text() {
    if (this.message.conversationType === TIM.TYPES.CONV_C2C && !this.isMine) {
      return '对方撤回了一条消息';
    }
    if (this.message.conversationType === TIM.TYPES.CONV_GROUP && !this.isMine) {
      return `${this.message.from}撤回了一条消息`;
    }
    return '你撤回了一条消息';
  }
}
