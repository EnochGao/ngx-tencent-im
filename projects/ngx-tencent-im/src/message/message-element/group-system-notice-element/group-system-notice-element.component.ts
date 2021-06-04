import { Component, Input, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MessageItem } from '../../../im.type';
import { TIM } from '../../../shared.data';
import { translateGroupSystemNotice } from '../../../util/common';
import { ApprovalJoinGroupComponent } from './approval-join-group/approval-join-group.component';

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

  constructor(
    private modal: NzModalService
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

  approval() {
    this.modal.create({
      nzTitle: `处理加群申请`,
      nzContent: ApprovalJoinGroupComponent,
      nzMaskClosable: false,
      nzFooter: null,
      nzWidth: '40%',
      nzStyle: { top: '20px' },
      nzComponentParams: {
        message: this.message
      }
    });
  }

}
