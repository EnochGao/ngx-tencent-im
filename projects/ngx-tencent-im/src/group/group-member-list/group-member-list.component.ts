import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Conversation, GroupProfile, Member } from '../../im.type';
import { currentMemberListSelector } from '../../store/selectors/group.selector';
import { TimHelperService } from '../../tim-helper.service';

@Component({
  selector: 'app-group-member-list',
  templateUrl: './group-member-list.component.html',
  styleUrls: ['./group-member-list.component.less']
})
export class GroupMemberListComponent implements OnInit, OnDestroy {
  @Input() currentConversation: Conversation;

  currentMemberList: Array<Member> = [];
  currentMemberID = '';
  count = 30;
  subscription: Subscription;
  constructor(
    private store: Store,
    private timHelperService: TimHelperService,
  ) { }

  get members() {
    return this.currentMemberList.slice(0, this.count);
  }

  get showLoadMore() {
    return this.members.length < this.currentConversation.groupProfile.memberNum;
  }

  ngOnInit(): void {
    // 获取当group前成员
    this.subscription = this.store.select(currentMemberListSelector).subscribe(res => {
      this.currentMemberList = res;
    });
  }

  getGroupMemberAvatarText(role: string) {
    switch (role) {
      case 'Owner':
        return '群主';
      case 'Admin':
        return '管理员';
      default:
        return '群成员';
    }
  }

  loadMore() {
    this.timHelperService.getGroupMemberList(this.currentConversation.groupProfile.groupID);
    this.count += 30;
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
