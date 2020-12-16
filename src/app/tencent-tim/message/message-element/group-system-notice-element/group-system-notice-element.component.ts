import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageItem } from 'src/app/tencent-tim/im.type';
import { removeMessageAction, showAction } from 'src/app/tencent-tim/store/actions';
import { TimHelperService } from 'src/app/tencent-tim/tim-helper.service';
import { translateGroupSystemNotice } from 'src/app/tencent-tim/util/common';

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
        this.store.dispatch(showAction({ msgType: 'error', message: error.message }));
      });
  }

}
