import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalRef } from 'ng-zorro-antd/modal';

import { MessageItem } from '../../../../im.type';
import { MESSAGE_STATUS } from '../../../../shared.data';
import { removeMessageAction, showAction } from '../../../../store/actions';
import { TimHelperService } from '../../../../tim-helper.service';


@Component({
  selector: 'im-approval-join-group',
  templateUrl: './approval-join-group.component.html',
  styleUrls: ['./approval-join-group.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApprovalJoinGroupComponent implements OnInit {
  @Input() message: MessageItem;

  form = {
    handleAction: 'Agree',
    handleMessage: '',
  };
  constructor(
    public modalRef: NzModalRef,
    private store: Store,
    private timHelperService: TimHelperService,
  ) { }

  ngOnInit(): void {
  }

  handleGroupApplication() {
    this.timHelperService.tim
      .handleGroupApplication({
        handleAction: this.form.handleAction,
        handleMessage: this.form.handleMessage,
        message: this.message,
      })
      .then(() => {
        this.store.dispatch(removeMessageAction({ message: this.message }));
        this.modalRef.destroy();
      })
      .catch((error) => {
        this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
      });
  }
}
