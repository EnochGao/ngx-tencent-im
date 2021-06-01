import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Conversation, GroupProfile } from 'projects/ng-tencent-im/src/im.type';
import { MESSAGE_STATUS } from 'projects/ng-tencent-im/src/shared.data';
import { resetCurrentConversationAction, showAction } from 'projects/ng-tencent-im/src/store/actions';
import { TimHelperService } from 'projects/ng-tencent-im/src/tim-helper.service';
import TIM from 'tim-js-sdk';


@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.less']
})
export class GroupProfileComponent implements OnInit {
  @Input() currentConversation: Conversation;
  groupProfile: GroupProfile;

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

  constructor(
    private timHelper: TimHelperService,
    private store: Store,

  ) { };

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
