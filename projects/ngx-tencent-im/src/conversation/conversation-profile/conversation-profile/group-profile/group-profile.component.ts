import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Conversation, Group, Profile } from 'tim-js-sdk';
import { MESSAGE_STATUS, TIM } from '../../../../shared.data';
import { resetCurrentConversationAction, showAction } from '../../../../store/actions';
import { TimHelperService } from '../../../../tim-helper.service';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.less']
})
export class GroupProfileComponent implements OnInit {
  @Input() currentConversation: Conversation;
  groupProfile: Group;

  showEditFaceUrl = false;
  showEditName = false;
  showEditIntroduction = false;
  showEditNotification = false;
  showEditJoinOption = false;
  showEditMessageRemindType = false;
  showEditNameCard = false;
  showChangeGroupOwner = false;
  newOwnerUserID = '';
  groupType: string;
  muteAllMembers: boolean;
  messageRemindTypeMap = {
    AcceptAndNotify: '接收消息并提示',
    AcceptNotNotify: '接收消息但不提示',
    Discard: '屏蔽消息',
  };
  joinOptionMap = {
    FreeAccess: '自由加入',
    NeedPermission: '需要验证',
    DisableApply: '禁止加群',
  };
  active = false;

  avatar: string;
  name: string;
  introduction: string;
  notification: string;
  joinOption: string;
  messageRemindType: string;
  nameCard: string;

  constructor(
    private timHelper: TimHelperService,
    private store: Store,
  ) { }

  ngOnInit(): void {

    this.groupProfile = this.currentConversation.groupProfile;

    switch (this.groupProfile.type) {
      case TIM.TYPES.GRP_WORK:
        this.groupType = '好友工作群（Work）';
        break;
      case TIM.TYPES.GRP_PUBLIC:
        this.groupType = '陌生人社交群（Public）';
        break;
      case TIM.TYPES.GRP_CHATROOM:
        this.groupType = '临时会议群（Meeting）';
        break;
      case TIM.TYPES.GRP_AVCHATROOM:
        this.groupType = '直播群（AVChatRoom）';
        break;
      default:
        this.groupType = '';
    }

    this.muteAllMembers = this.groupProfile.muteAllMembers;

    this.joinOption = this.groupProfile.joinOption;
    this.messageRemindType = this.groupProfile.selfInfo.messageRemindType;
  }

  get editable() {
    return this.groupProfile.type === TIM.TYPES.GRP_WORK || [TIM.TYPES.GRP_MBR_ROLE_OWNER, TIM.TYPES.GRP_MBR_ROLE_ADMIN].includes(this.groupProfile.selfInfo.role);
  }

  get isOwner() {
    return this.groupProfile.selfInfo.role === TIM.TYPES.GRP_MBR_ROLE_OWNER;
  }
  get isAdmin() {
    return this.groupProfile.selfInfo.role === TIM.TYPES.GRP_MBR_ROLE_ADMIN;
  }
  get showDissmissGroup() {
    // 好友工作群不能解散
    return this.isOwner && this.groupProfile.type !== TIM.TYPES.GRP_WORK;
  }

  inputFocus(el: HTMLElement) {
    setTimeout(() => {
      el.focus();
    }, 0);
  }

  editFaceUrl() {
    this.timHelper.tim
      .updateGroupProfile({
        groupID: this.groupProfile.groupID,
        avatar: this.avatar.trim()
      })
      .then(() => {
        this.showEditFaceUrl = false;
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }


  editName() {
    this.timHelper.tim
      .updateGroupProfile({
        groupID: this.groupProfile.groupID,
        name: this.name.trim()
      })
      .then(() => {
        this.showEditName = false;
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }

  editIntroduction() {
    this.timHelper.tim
      .updateGroupProfile({
        groupID: this.groupProfile.groupID,
        introduction: this.introduction.trim()
      })
      .then(() => {
        this.showEditIntroduction = false;
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }

  editNotification() {
    this.timHelper.tim
      .updateGroupProfile({
        groupID: this.groupProfile.groupID,
        notification: this.notification.trim()
      })
      .then(() => {
        this.showEditNotification = false;
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }

  editJoinOption() {
    this.timHelper.tim
      .updateGroupProfile({
        groupID: this.groupProfile.groupID,
        joinOption: this.joinOption
      })
      .then(() => {
        this.showEditJoinOption = false;
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }

  editMessageRemindType() {
    this.timHelper.tim
      .setMessageRemindType({
        groupID: this.groupProfile.groupID,
        messageRemindType: this.messageRemindType
      })
      .then(() => {
        this.showEditMessageRemindType = false;
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }

  editNameCard() {
    if (this.nameCard.trim().length === 0) {
      this.store.dispatch(
        showAction({ msgType: MESSAGE_STATUS.warning, message: '不能设置空的群名片' })
      );
      return;
    }
    this.timHelper.tim
      .setGroupMemberNameCard({
        groupID: this.groupProfile.groupID,
        nameCard: this.nameCard.trim()
      })
      .then(() => {
        this.showEditNameCard = false;
      })
      .catch(error => {
        this.store.dispatch(
          showAction({ msgType: MESSAGE_STATUS.error, message: error.message })
        );
      });
  }

  changeOwner() {
    this.timHelper.tim
      .changeGroupOwner({
        groupID: this.groupProfile.groupID,
        newOwnerID: this.newOwnerUserID,
      })
      .then(() => {
        this.showChangeGroupOwner = false;
        this.store.dispatch(
          showAction({
            msgType: MESSAGE_STATUS.success,
            message: `转让群主成功，新群主ID：${this.newOwnerUserID}`,
          }));
        this.newOwnerUserID = '';
      })
      .catch((error) => {
        showAction({
          msgType: MESSAGE_STATUS.error,
          message: error.message,
        });
      });
  }

  quitGroup() {
    this.timHelper.tim
      .quitGroup(this.groupProfile.groupID)
      .then(({ data: { groupID } }) => {
        this.store.dispatch(
          showAction({
            msgType: MESSAGE_STATUS.success,
            message: `退群成功`,
          }));
        if (groupID === this.groupProfile.groupID) {
          this.store.dispatch(resetCurrentConversationAction());
        }
      })
      .catch((error) => {
        showAction({
          msgType: MESSAGE_STATUS.error,
          message: error.message,
        });
      });
  }

  dismissGroup() {
    this.timHelper.tim
      .dismissGroup(this.groupProfile.groupID)
      .then(({ data: { groupID } }) => {
        this.store.dispatch(
          showAction({
            msgType: MESSAGE_STATUS.success,
            message: `群：${this.groupProfile.name || this.groupProfile.groupID}解散成功！`,
          }));
        if (groupID === this.groupProfile.groupID) {
          this.store.dispatch(resetCurrentConversationAction());
        }
      })
      .catch((error) => {
        showAction({
          msgType: MESSAGE_STATUS.error,
          message: error.message,
        });
      });
  }
  changeMuteStatus() {
    if (this.isOwner || this.isAdmin) {
      this.timHelper.tim
        .updateGroupProfile({
          muteAllMembers: this.muteAllMembers,
          groupID: this.groupProfile.groupID,
        })
        .then((imResponse) => {
          this.muteAllMembers = imResponse.data.group.muteAllMembers;
          if (this.muteAllMembers) {
            this.active = true;
            this.store.dispatch(
              showAction({
                msgType: MESSAGE_STATUS.success,
                message: `全体禁言`,
              }));
          } else {
            this.active = false;
            this.store.dispatch(
              showAction({
                msgType: MESSAGE_STATUS.success,
                message: `取消全体禁言`,
              }));
          }
        })
        .catch((error) => {
          this.store.dispatch(
            showAction({
              msgType: MESSAGE_STATUS.error,
              message: error.message,
            }));
        });
    } else {
      setTimeout(() => {
        this.muteAllMembers = this.groupProfile.muteAllMembers;
      }, 0);
      this.store.dispatch(
        showAction({
          msgType: MESSAGE_STATUS.error,
          message: '普通群成员不能对全体禁言',
        }));
    }
  }
}
