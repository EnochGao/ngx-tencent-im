import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Conversation, GroupProfile, Member } from '../../im.type';
import { MESSAGE_STATUS } from '../../shared.data';
import { showAction } from '../../store/actions';
import { updateCurrentMemberListAction } from '../../store/actions/group.action';
import { currentConversationSelector } from '../../store/selectors';
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
  popoverVisible: boolean;
  userID: string;


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

  addGroupMember() {
    const groupID = this.currentConversation.conversationID.replace('GROUP', '');
    this.timHelperService.tim
      .addGroupMember({
        groupID,
        userIDList: [this.userID]
      })
      .then((imResponse) => {
        const {
          successUserIDList,
          failureUserIDList,
          existedUserIDList
        } = imResponse.data;
        if (successUserIDList.length > 0) {
          this.store.dispatch(
            showAction({ msgType: MESSAGE_STATUS.success, message: `群成员：${successUserIDList.join(',')}，加群成功` })
          );
          this.timHelperService.tim.getGroupMemberProfile({ groupID, userIDList: successUserIDList })
            .then(({ data: { memberList } }) => {
              this.store.dispatch(updateCurrentMemberListAction({ currentMemberList: memberList }));
              this.popoverVisible = false;
            });
        }
        if (failureUserIDList.length > 0) {
          this.store.dispatch(
            showAction({ msgType: MESSAGE_STATUS.error, message: `群成员：${failureUserIDList.join(',')}，添加失败！` })
          );
        }
        if (existedUserIDList.length > 0) {
          this.store.dispatch(
            showAction({ msgType: MESSAGE_STATUS.warning, message: `群成员：${existedUserIDList.join(',')}，已在群中` })
          );
        }
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
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
