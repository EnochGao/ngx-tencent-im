import { Component, Input, OnInit } from '@angular/core';
import { MessageItem } from '../../im.type';
import TIM from 'tim-js-sdk';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { TimHelperService } from '../../tim-helper.service';
import { Store } from '@ngrx/store';
import { showAction } from '../../store/actions';
import { MESSAGE_STATUS } from '../../shared.data';
import { Subscription, timer } from 'rxjs';
import { ReEditMessageService } from '../../re-edit-message.service';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.less']
})
export class MessageBubbleComponent implements OnInit {
  @Input() message: MessageItem;
  @Input() isMine: boolean;
  @Input() isNew: boolean;

  isTimeout = false;
  subscription: Subscription;

  constructor(
    private nzContextMenuService: NzContextMenuService,
    private timHelper: TimHelperService,
    private store: Store,
    private reEditMessage: ReEditMessageService
  ) { }

  ngOnInit(): void {
    this.isTimeoutHandler();
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

  get isEdit() {
    if (!this.isMine) {
      return false;
    }
    if (this.message.type !== TIM.TYPES.MSG_TEXT) {
      return false;
    }
    if (this.isTimeout) {
      return false;
    }
    return true;
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }

  revokeMessage() {
    this.timHelper.tim.revokeMessage(this.message).then(() => {
      this.isTimeoutHandler();
    }).catch((err) => {
      this.store.dispatch(
        showAction({
          message: err,
          msgType: MESSAGE_STATUS.warning
        })
      );
    });
  }

  reEdit() {
    this.reEditMessage.reEditMessage.emit(this.message.payload.text);
  }

  isTimeoutHandler() { // 从发送消息时间开始算起，两分钟内可以编辑
    // this.subscription = timer(0, 1000).subscribe(() => {
    //   const time = (new Date().getTime() / 1000) + '';
    //   if (parseInt((time)) - this.message.time > 2 * 60) {
    //     this.isTimeout = true;
    //     this.subscription.unsubscribe();
    //   } else {
    //     this.isTimeoutHandler();
    //   }
    // });
    const now = new Date();
    const time = (now.getTime() / 1000).toString();
    if (parseInt(time, 10) - this.message.time > 2 * 60) {
      this.isTimeout = true;
      return;
    }
    setTimeout(this.isTimeoutHandler, 1000);
  }
}
