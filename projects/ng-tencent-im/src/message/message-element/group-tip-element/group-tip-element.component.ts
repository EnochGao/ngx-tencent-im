import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessageItem } from '../../../im.type';

import TIM from 'tim-js-sdk';

@Component({
  selector: 'app-group-tip-element',
  templateUrl: './group-tip-element.component.html',
  styleUrls: ['./group-tip-element.component.less']
})
export class GroupTipElementComponent implements OnInit, OnChanges {
  @Input() message: MessageItem;
  @Input() isMine: boolean;
  @Input() payload: any;

  text: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.text = this.getGroupTipContent(this.message);
  }

  getGroupTipContent(message: MessageItem) {
    const userName = message.nick || message.payload.userIDList.join(',');
    switch (message.payload.operationType) {
      case TIM.TYPES.GRP_TIP_MBR_JOIN:
        return `群成员：${userName} 加入群组`;
      case TIM.TYPES.GRP_TIP_MBR_QUIT:
        return `群成员：${userName} 退出群组`;
      case TIM.TYPES.GRP_TIP_MBR_KICKED_OUT:
        return `群成员：${userName} 被${message.payload.operatorID}踢出群组`;
      case TIM.TYPES.GRP_TIP_MBR_SET_ADMIN:
        return `群成员：${userName} 成为管理员`;
      case TIM.TYPES.GRP_TIP_MBR_CANCELED_ADMIN:
        return `群成员：${userName} 被撤销管理员`;
      case TIM.TYPES.GRP_TIP_GRP_PROFILE_UPDATED:
        return '群资料修改';
      case TIM.TYPES.GRP_TIP_MBR_PROFILE_UPDATED:
        for (let member of message.payload.memberList) {
          if (member.muteTime > 0) {
            return `群成员：${member.userID}被禁言${member.muteTime}秒`;
          } else {
            return `群成员：${member.userID}被取消禁言`;
          }
        }
        break;
      default:
        return '[群提示消息]';
    }
  }
}
