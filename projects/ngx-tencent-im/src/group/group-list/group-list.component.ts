import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectComponent } from 'ng-zorro-antd/select';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


import { GroupProfile } from '../../im.type';
import { MESSAGE_STATUS, TIM } from '../../shared.data';
import { showAction } from '../../store/actions';
import { groupListSelector } from '../../store/selectors/group.selector';
import { TimHelperService } from '../../tim-helper.service';
import { CreateGroupComponent } from '../create-group/create-group.component';


@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupListComponent implements OnInit, OnDestroy {
  group: GroupProfile;
  loading = false;
  groupList: Array<GroupProfile> = [];
  groupListOfOption = [];
  subscription: Subscription;

  @ViewChild('search', { static: true }) private selectGroup: NzSelectComponent;

  constructor(
    private store: Store,
    private cd: ChangeDetectorRef,
    private modal: NzModalService,
    private timHelper: TimHelperService
  ) { }

  ngOnInit(): void {

    this.subscription = this.store.select(groupListSelector).subscribe(res => {
      this.groupList = res;
      this.cd.markForCheck();
    });

    this.selectGroup.nzOnSearch.pipe(debounceTime(600), distinctUntilChanged())
      .subscribe((res: string) => {
        this.searchGroupByID(res);
      });
  }

  searchGroupByID(queryString: string) {
    if (queryString.trim().length > 0) {
      this.loading = true;
      this.timHelper.tim
        .searchGroupByID(queryString)
        .then(({ data: { group } }) => {
          this.groupListOfOption = [group];
          this.cd.markForCheck();
          this.loading = false;
        })
        .catch(() => {
          this.store.dispatch(showAction({
            msgType: MESSAGE_STATUS.error,
            message: '没有找到该群'
          }));
        });
    }
  }

  applyJoinGroup(group: GroupProfile) {
    this.timHelper.tim
      .joinGroup({ groupID: group.groupID })
      .then(async (res: any) => {
        switch (res.data.status) {
          case TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL:
            this.store.dispatch(
              showAction({
                msgType: MESSAGE_STATUS.info,
                message: '申请成功，等待群管理员确认！'
              })
            );
            this.group = null;
            this.groupListOfOption = [];
            break;
          case TIM.TYPES.JOIN_STATUS_SUCCESS:
            await this.timHelper.checkoutConversation(`GROUP${res.data.group.groupID}`);
            this.store.dispatch(
              showAction({
                msgType: MESSAGE_STATUS.success,
                message: '加群成功'
              })
            );
            this.group = null;
            this.groupListOfOption = [];
            break;
          case TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP:
            this.store.dispatch(
              showAction({
                msgType: MESSAGE_STATUS.warning,
                message: '您已经是群成员了，请勿重复加群哦！'
              })
            );
            this.group = null;
            this.groupListOfOption = [];
            break;
          default: break;
        }
        this.cd.markForCheck();
      })
      .catch(error => {
        this.store.dispatch(showAction({
          msgType: MESSAGE_STATUS.error,
          message: error.message
        }));
      });
  }

  createGroup() {
    this.modal.create({
      nzTitle: `创建群组`,
      nzContent: CreateGroupComponent,
      nzMaskClosable: false,
      nzFooter: null,
      nzWidth: '40%',
      nzStyle: { top: '20px' },
      // nzComponentParams: {}
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
