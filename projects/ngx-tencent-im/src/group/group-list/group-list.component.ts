import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { GroupProfile } from '../../im.type';
import { groupListSelector } from '../../store/selectors/group.selector';
import { CreateGroupComponent } from '../create-group/create-group.component';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.less']
})
export class GroupListComponent implements OnInit, OnDestroy {
  groupList: Array<GroupProfile> = [];
  subscription: Subscription;
  constructor(
    private store: Store,
    private modal: NzModalService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select(groupListSelector).subscribe(res => {
      console.log('group::', res);
      this.groupList = res;
    });
  }
  createGroup() {
    const modalInstance = this.modal.create({
      nzTitle: `创建群组`,
      nzContent: CreateGroupComponent,
      nzMaskClosable: false,
      nzFooter: null,
      nzWidth: '40%',
      nzStyle: { top: '20px' },
      nzComponentParams: {

      }
    });

    modalInstance.afterClose.subscribe(res => {
      if (res) {

      }
    });

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
