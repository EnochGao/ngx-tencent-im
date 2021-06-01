import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MessageItem } from 'projects/ng-tencent-im/src/im.type';
import { MESSAGE_STATUS } from 'projects/ng-tencent-im/src/shared.data';
import { removeMessageAction, showAction } from 'projects/ng-tencent-im/src/store/actions';
import { TimHelperService } from 'projects/ng-tencent-im/src/tim-helper.service';
import { translateGroupSystemNotice } from 'projects/ng-tencent-im/src/util/common';
import TIM from 'tim-js-sdk';

@Component({
  selector: 'app-group-system-notice-element',
  templateUrl: './group-system-notice-element.component.html',
  styleUrls: ['./group-system-notice-element.component.less']
})
export class GroupSystemNoticeElementComponent implements OnInit {
  @Input() message: MessageItem;
  @Input() payload: any;

  showDialog = false;
  text: string;
  title: string;
  isJoinGroupRequest: boolean;
  form = {
    handleAction: 'Agree',
    handleMessage: '',
  };
  constructor(
    private timHelperService: TimHelperService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.text = translateGroupSystemNotice(this.message);
    if (this.message.type === TIM.TYPES.MSG_GRP_SYS_NOTICE) {
      this.title = '群系统通知';
    } else {
      this.title = '系统通知';
    }

    this.isJoinGroupRequest = (this.payload.operationType === 1);
  }

  handleGroupApplication() {
    this.timHelperService.tim
      .handleGroupApplication({
        handleAction: this.form.handleAction,
        handleMessage: this.form.handleMessage,
        message: this.message,
      })
      .then(() => {
        this.showDialog = false;
        this.store.dispatch(removeMessageAction({ message: this.message }));
      })
      .catch((error) => {
        this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
      });
  }

}
