import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Conversation, Member, UserProfile } from '../../im.type';
import { currentUserProfileSelector } from '../../store/selectors';
import { TimHelperService } from '../../tim-helper.service';

import { getFullDate } from '../../util/date';

import { MESSAGE_STATUS, TIM } from '../../shared.data';
import { showAction } from '../../store/actions';

@Component({
  selector: 'app-group-member-info',
  templateUrl: './group-member-info.component.html',
  styleUrls: ['./group-member-info.component.less']
})
export class GroupMemberInfoComponent implements OnInit {
  @Input() member: Member;
  @Input() currentConversation: Conversation;

  @Output() enterEnd = new EventEmitter<void>();
  isOwner: boolean;
  isAdmin: boolean;
  isMine: boolean;
  currentUserProfile: UserProfile;
  current = Date.now();
  muteTime: string;
  muteTimeVisible: boolean;
  nameCard: string;

  constructor(
    private timHelper: TimHelperService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.isOwner = this.currentConversation.groupProfile.selfInfo.role === 'Owner';
    this.isAdmin = this.currentConversation.groupProfile.selfInfo.role === 'Admin';

    this.store.select(currentUserProfileSelector).subscribe(res => {
      if (res) {
        this.currentUserProfile = res;
        this.isMine = this.currentUserProfile.userID === this.member.userID;
      }
    });
  }
  // 是否显示取消禁言按钮
  get showCancelBan() {
    if (this.showMuteUntil && this.currentConversation.type === TIM.TYPES.CONV_GROUP && !this.isMine) {
      return this.isOwner || this.isAdmin;
    }
    return false;
  }

  get changeRoleTitle() {
    if (!this.canChangeRole) {
      return '';
    }
    return this.isOwner && this.member.role === 'Admin' ? '设为：Member' : '设为：Admin';
  }

  get canChangeRole() {
    return this.isOwner && ['ChatRoom', 'Public'].includes(this.currentConversation.subType);
  }

  // 是否显示踢出群成员按钮
  get showKickout() {
    return (this.isOwner || this.isAdmin) && !this.isMine;
  }

  // 日期格式化后的禁言时间
  get muteUntil() {
    return getFullDate(new Date(this.member.muteUntil * 1000));
  }

  // 是否显示禁言时间
  get showMuteUntil() {
    // 禁言时间小于当前时间
    return this.member.muteUntil * 1000 > this.current;
  }

  setGroupMemberMuteTime() {
    if (!this.muteTime) return;
    this.timHelper.tim
      .setGroupMemberMuteTime({
        groupID: this.currentConversation.groupProfile.groupID,
        userID: this.member.userID,
        muteTime: Number(this.muteTime)
      })
      .then(() => {
        this.muteTime = '';
        this.muteTimeVisible = false;
        this.enterEnd.emit();
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }

  // 取消禁言
  cancelMute() {
    this.timHelper.tim
      .setGroupMemberMuteTime({
        groupID: this.currentConversation.groupProfile.groupID,
        userID: this.member.userID,
        muteTime: 0,
      })
      .then(() => {
        this.muteTime = '';
        this.enterEnd.emit();
      })
      .catch((error) => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }

  setGroupMemberNameCard() {
    if (this.nameCard.trim().length === 0) {
      this.store.dispatch(
        showAction({ msgType: MESSAGE_STATUS.warning, message: '不能设置空的群名片' })
      );
      return;
    }
    this.timHelper.tim
      .setGroupMemberNameCard({
        groupID: this.currentConversation.groupProfile.groupID,
        userID: this.member.userID,
        nameCard: this.nameCard
      })
      .then(() => {
        this.nameCard = null;
        this.enterEnd.emit();
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.success, message: '修改成功' })
        );
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }


  changeMemberRole() {
    if (!this.canChangeRole) {
      return;
    }
    let currentRole = this.member.role;
    this.timHelper.tim
      .setGroupMemberRole({
        groupID: this.currentConversation.groupProfile.groupID,
        userID: this.member.userID,
        role: currentRole === 'Admin' ? 'Member' : 'Admin',
      })
      .catch((error) => {

      });
  }

  kickoutGroupMember() {
    this.timHelper.tim
      .deleteGroupMember({
        groupID: this.currentConversation.groupProfile.groupID,
        reason: '我要踢你出群',
        userIDList: [this.member.userID],
      })
      .then(() => {
        // this.$store.commit('deleteGroupMemeber', this.member.userID);
      })
      .catch((error) => {

      });
  }
}
