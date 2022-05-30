import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, Component, ChangeDetectionStrategy, Input, ViewChild, EventEmitter, Output, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import * as i1 from '@ngrx/store';
import { createAction, props, createSelector, createReducer, on, StoreModule } from '@ngrx/store';
import TIM$1 from 'tim-js-sdk';
import TIMUploadPlugin from 'tim-upload-plugin';
import * as i1$1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2 from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import * as i5 from 'ng-zorro-antd/form';
import { NzFormModule } from 'ng-zorro-antd/form';
import * as i6 from 'ng-zorro-antd/radio';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import * as i7 from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as i8 from 'ng-zorro-antd/grid';
import * as i9 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i5$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i10 from 'ng-zorro-antd/core/wave';
import * as i6$1 from 'ng-zorro-antd/core/transition-patch';
import * as i1$2 from 'ng-zorro-antd/avatar';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import * as i6$2 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i7$1 from 'ng-zorro-antd/popover';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { __awaiter } from 'tslib';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i6$3 from 'ng-zorro-antd/select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import * as i1$3 from 'ng-zorro-antd/dropdown';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import * as i6$4 from 'ng-zorro-antd/menu';
import * as i2$1 from 'ng-zorro-antd/image';
import { NzImageModule } from 'ng-zorro-antd/image';
import * as i11 from 'ng-zorro-antd/tooltip';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import * as i3 from 'ng-zorro-antd/input-number';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import * as i6$5 from 'ng-zorro-antd/switch';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import * as i6$6 from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

var LoginActionTypes;
(function (LoginActionTypes) {
    LoginActionTypes["Login"] = "[toggleIsLogin]";
})(LoginActionTypes || (LoginActionTypes = {}));
const loginAction = createAction(LoginActionTypes.Login, props());

var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["SDKReady"] = "[user] toggleIsSDKReady";
    UserActionTypes["updateCurrentUserProfile"] = "[user] updateCurrentUserProfile";
    UserActionTypes["resetUser"] = "[user] resetUser";
})(UserActionTypes || (UserActionTypes = {}));
const SDKReadyAction = createAction(UserActionTypes.SDKReady, props());
const updateCurrentUserProfileAction = createAction(UserActionTypes.updateCurrentUserProfile, props());
const resetUserAction = createAction(UserActionTypes.resetUser);

const showAction = createAction('[showMessage]', props());
const updateMessageAction = createAction('[updateMessage]', props());

;
const updateCurrentConversationAction = createAction('[conversation] updateCurrentConversation', props());
const updateConversationListAction = createAction('[conversation] updateConversationList', props());
const resetCurrentConversationAction = createAction('[conversation] resetCurrentConversation');
const pushCurrentMessageListAction = createAction('[conversation] pushCurrentMessageList', props());
const removeMessageAction = createAction('[conversation] removeMessage', props());
const resetConversationAction = createAction('[conversation] reset');
const checkoutConversationAction = createAction('[conversation] checkoutConversation', props());

const selectPlayerStates$3 = (state) => state.currentConversationID;
const getCurrentConversationID = createSelector(selectPlayerStates$3, (state) => state.conversationID);
const selectConversation = (state) => state.conversation;
const conversationSelector = createSelector(selectConversation, (state) => state);
const selectCurrentConversation = (state) => state.conversation.currentConversation;
const currentConversationSelector = createSelector(selectCurrentConversation, (state) => state);
const selectConversationList = (state) => state.conversation.conversationList;
const conversationListSelector = createSelector(selectConversationList, (state) => state);

const selectPlayerStates$2 = (state) => state.login;
const getLogin = createSelector(selectPlayerStates$2, (state) => state.isLogin);

const selectPlayerStates$1 = (state) => state.message;
const getMessage = createSelector(selectPlayerStates$1, (state) => state);

const selectPlayerStates = (state) => state.user;
const getSDkReady = createSelector(selectPlayerStates, (state) => state.isSDKReady);
const currentUserProfileSelector = createSelector(selectPlayerStates, (state) => state.currentUserProfile);

const updateGroupListAction = createAction('[group] updateGroupList', props());
const updateCurrentMemberListAction = createAction('[group] updateCurrentMemberList', props());
const resetCurrentMemberListAction = createAction('[group] resetCurrentMemberList');

const selectGroupListStates = (state) => state.group.groupList;
const groupListSelector = createSelector(selectGroupListStates, (state) => state);
const currentMemberListStates = (state) => state.group.currentMemberList;
const currentMemberListSelector = createSelector(currentMemberListStates, (state) => state);

const NG_Tim_CONFIG = new InjectionToken('config');
var MESSAGE_STATUS;
(function (MESSAGE_STATUS) {
    MESSAGE_STATUS["success"] = "success";
    MESSAGE_STATUS["info"] = "info";
    MESSAGE_STATUS["warning"] = "warning";
    MESSAGE_STATUS["error"] = "error";
})(MESSAGE_STATUS || (MESSAGE_STATUS = {}));
var CONVERSATION_TYPE;
(function (CONVERSATION_TYPE) {
    CONVERSATION_TYPE["client"] = "C2C";
    CONVERSATION_TYPE["group"] = "GROUP";
    CONVERSATION_TYPE["system"] = "@TIM#SYSTEM";
})(CONVERSATION_TYPE || (CONVERSATION_TYPE = {}));
var TIM_TYPES;
(function (TIM_TYPES) {
    TIM_TYPES["GRP_WORK"] = "Private";
    TIM_TYPES["GRP_PUBLIC"] = "Public";
    TIM_TYPES["GRP_MEETING"] = "ChatRoom";
    TIM_TYPES["GRP_AVCHATROOM"] = "AVChatRoom";
})(TIM_TYPES || (TIM_TYPES = {}));
const TIM = {
    TYPES: {
        "MSG_TEXT": "TIMTextElem",
        "MSG_IMAGE": "TIMImageElem",
        "MSG_SOUND": "TIMSoundElem",
        "MSG_AUDIO": "TIMSoundElem",
        "MSG_FILE": "TIMFileElem",
        "MSG_FACE": "TIMFaceElem",
        "MSG_VIDEO": "TIMVideoFileElem",
        "MSG_GEO": "TIMLocationElem",
        "MSG_GRP_TIP": "TIMGroupTipElem",
        "MSG_GRP_SYS_NOTICE": "TIMGroupSystemNoticeElem",
        "MSG_CUSTOM": "TIMCustomElem",
        "MSG_MERGER": "TIMRelayElem",
        "MSG_PRIORITY_HIGH": "High",
        "MSG_PRIORITY_NORMAL": "Normal",
        "MSG_PRIORITY_LOW": "Low",
        "MSG_PRIORITY_LOWEST": "Lowest",
        "CONV_C2C": "C2C",
        "CONV_GROUP": "GROUP",
        "CONV_SYSTEM": "@TIM%23SYSTEM",
        "CONV_AT_ME": 1,
        "CONV_AT_ALL": 2,
        "CONV_AT_ALL_AT_ME": 3,
        "GRP_PRIVATE": "Private",
        "GRP_WORK": "Private",
        "GRP_PUBLIC": "Public",
        "GRP_CHATROOM": "ChatRoom",
        "GRP_MEETING": "ChatRoom",
        "GRP_AVCHATROOM": "AVChatRoom",
        "GRP_MBR_ROLE_OWNER": "Owner",
        "GRP_MBR_ROLE_ADMIN": "Admin",
        "GRP_MBR_ROLE_MEMBER": "Member",
        "GRP_TIP_MBR_JOIN": 1,
        "GRP_TIP_MBR_QUIT": 2,
        "GRP_TIP_MBR_KICKED_OUT": 3,
        "GRP_TIP_MBR_SET_ADMIN": 4,
        "GRP_TIP_MBR_CANCELED_ADMIN": 5,
        "GRP_TIP_GRP_PROFILE_UPDATED": 6,
        "GRP_TIP_MBR_PROFILE_UPDATED": 7,
        "MSG_REMIND_ACPT_AND_NOTE": "AcceptAndNotify",
        "MSG_REMIND_ACPT_NOT_NOTE": "AcceptNotNotify",
        "MSG_REMIND_DISCARD": "Discard",
        "GENDER_UNKNOWN": "Gender_Type_Unknown",
        "GENDER_FEMALE": "Gender_Type_Female",
        "GENDER_MALE": "Gender_Type_Male",
        "KICKED_OUT_MULT_ACCOUNT": "multipleAccount",
        "KICKED_OUT_MULT_DEVICE": "multipleDevice",
        "KICKED_OUT_USERSIG_EXPIRED": "userSigExpired",
        "ALLOW_TYPE_ALLOW_ANY": "AllowType_Type_AllowAny",
        "ALLOW_TYPE_NEED_CONFIRM": "AllowType_Type_NeedConfirm",
        "ALLOW_TYPE_DENY_ANY": "AllowType_Type_DenyAny",
        "FORBID_TYPE_NONE": "AdminForbid_Type_None",
        "FORBID_TYPE_SEND_OUT": "AdminForbid_Type_SendOut",
        "JOIN_OPTIONS_FREE_ACCESS": "FreeAccess",
        "JOIN_OPTIONS_NEED_PERMISSION": "NeedPermission",
        "JOIN_OPTIONS_DISABLE_APPLY": "DisableApply",
        "JOIN_STATUS_SUCCESS": "JoinedSuccess",
        "JOIN_STATUS_ALREADY_IN_GROUP": "AlreadyInGroup",
        "JOIN_STATUS_WAIT_APPROVAL": "WaitAdminApproval",
        "GRP_PROFILE_OWNER_ID": "ownerID",
        "GRP_PROFILE_CREATE_TIME": "createTime",
        "GRP_PROFILE_LAST_INFO_TIME": "lastInfoTime",
        "GRP_PROFILE_MEMBER_NUM": "memberNum",
        "GRP_PROFILE_MAX_MEMBER_NUM": "maxMemberNum",
        "GRP_PROFILE_JOIN_OPTION": "joinOption",
        "GRP_PROFILE_INTRODUCTION": "introduction",
        "GRP_PROFILE_NOTIFICATION": "notification",
        "GRP_PROFILE_MUTE_ALL_MBRS": "muteAllMembers",
        "NET_STATE_CONNECTED": "connected",
        "NET_STATE_CONNECTING": "connecting",
        "NET_STATE_DISCONNECTED": "disconnected",
        "MSG_AT_ALL": "__kImSDK_MesssageAtALL__"
    },
    EVENT: {
        "SDK_READY": "sdkStateReady",
        "SDK_NOT_READY": "sdkStateNotReady",
        "SDK_DESTROY": "sdkDestroy",
        "MESSAGE_RECEIVED": "onMessageReceived",
        "MESSAGE_REVOKED": "onMessageRevoked",
        "MESSAGE_READ_BY_PEER": "onMessageReadByPeer",
        "CONVERSATION_LIST_UPDATED": "onConversationListUpdated",
        "GROUP_LIST_UPDATED": "onGroupListUpdated",
        "GROUP_SYSTEM_NOTICE_RECEIVED": "receiveGroupSystemNotice",
        "PROFILE_UPDATED": "onProfileUpdated",
        "BLACKLIST_UPDATED": "blacklistUpdated",
        "KICKED_OUT": "kickedOut",
        "ERROR": "error",
        "NET_STATE_CHANGE": "netStateChange",
        "SDK_RELOAD": "sdkReload"
    },
    VERSION: "2.10.2"
};

class TimHelperService {
    constructor(store, config) {
        this.store = store;
        this.config = config;
        this.eventBus$ = new Subject();
        this.totalUnRead = new Subject();
        this.initTim(config);
        // 初始化监听器
        this.initListener();
        // 获取当前会话
        this.store.select(conversationSelector).subscribe(res => {
            this.conversation = res;
        });
        // 获取当前成员
        this.store.select(currentMemberListSelector).subscribe(res => {
            this.currentMemberList = res;
        });
    }
    login(userId, userSig) {
        if (!userSig) {
            throw new Error('请配置签名！');
        }
        this.tim.login({ userID: userId, userSig })
            .then((imResponse) => {
            this.eventBus$.next('login');
            this.store.dispatch(loginAction({ isLogin: true }));
            // this.store.dispatch(startComputeCurrentAction());
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.success, message: '登录成功！' }));
            if (imResponse.data.repeatLogin === true) {
                // 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
                console.log(imResponse.data.errorInfo);
            }
        }).catch((imError) => {
            console.warn('login error:', imError); // 登录失败的相关信息
        });
    }
    logout() {
        // 若有当前会话，在退出登录时已读上报
        if (this.conversation.currentConversation.conversationID) {
            this.tim.setMessageRead({ conversationID: this.conversation.currentConversation.conversationID });
        }
        this.tim.logout().then((res) => {
            this.eventBus$.next('logout');
            // this.store.dispatch(stopComputeCurrentAction());
            this.store.dispatch(loginAction({ isLogin: false }));
            this.store.dispatch(resetUserAction());
            this.store.dispatch(resetConversationAction());
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.success, message: '已退出！' }));
        });
    }
    // 初始化tim监听函数
    initListener() {
        // sdk ready
        this.tim.on(TIM$1.EVENT.SDK_READY, this.onReadyStateUpdate, this);
        // SDK NOT READT
        this.tim.on(TIM$1.EVENT.SDK_NOT_READY, this.onReadyStateUpdate, this);
        // 被踢出
        this.tim.on(TIM$1.EVENT.KICKED_OUT, this.onKickOut, this);
        // SDK内部出错
        this.tim.on(TIM$1.EVENT.ERROR, this.onError, this);
        // 收到新消息
        this.tim.on(TIM$1.EVENT.MESSAGE_RECEIVED, this.onReceiveMessage, this);
        // 会话列表更新
        this.tim.on(TIM$1.EVENT.CONVERSATION_LIST_UPDATED, this.onUpdateConversationList, this);
        // 群组列表更新
        this.tim.on(TIM$1.EVENT.GROUP_LIST_UPDATED, this.onUpdateGroupList, this);
        // 网络监测
        this.tim.on(TIM$1.EVENT.NET_STATE_CHANGE, this.onNetStateChange, this);
        // 已读回执
        this.tim.on(TIM$1.EVENT.MESSAGE_READ_BY_PEER, this.onMessageReadByPeer, this);
    }
    onReadyStateUpdate({ name }) {
        const isSDKReady = name === TIM$1.EVENT.SDK_READY ? true : false;
        this.store.dispatch(SDKReadyAction({ SDKReadyState: isSDKReady }));
        if (isSDKReady) {
            this.tim.getMyProfile()
                .then(({ data }) => {
                this.store.dispatch(updateCurrentUserProfileAction({ profile: data }));
            })
                .catch(error => {
                this.store.dispatch(showAction({
                    msgType: MESSAGE_STATUS.warning,
                    message: error.message
                }));
            });
        }
    }
    onKickOut(event) {
        this.eventBus$.next('logout');
        // this.store.dispatch(stopComputeCurrentAction());
        this.store.dispatch(loginAction({ isLogin: false }));
        this.store.dispatch(resetUserAction());
        this.store.dispatch(resetConversationAction());
        this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: '由于多实例登录被踢出，请重新登录!' }));
    }
    onError({ data }) {
        if (data.message !== 'Network Error') {
            console.log('%c error', 'color:red;font-size:20px;', data);
        }
    }
    onMessageReadByPeer(event) {
        console.log('已回执', event);
    }
    onReceiveMessage({ data: messageList }) {
        // this.handleVideoMessage(messageList);
        // this.handleAt(messageList);
        // this.handleQuitGroupTip(messageList);
        this.store.dispatch(pushCurrentMessageListAction({ message: messageList }));
    }
    // 会话列表更新
    onUpdateConversationList(event) {
        this.store.dispatch(updateConversationListAction({ conversationList: event.data }));
    }
    // 群列表更新
    onUpdateGroupList(event) {
        this.store.dispatch(updateGroupListAction({ groupList: event.data }));
    }
    onNetStateChange(event) {
        console.log('网络监测::', event);
    }
    /**
     * 切换会话
     * 调用时机：切换会话时
     */
    checkoutConversation(conversationID) {
        this.store.dispatch(resetCurrentMemberListAction());
        // 1.切换会话前，将切换前的会话进行已读上报
        if (this.conversation.currentConversation.conversationID) {
            const prevConversationID = this.conversation.currentConversation.conversationID;
            this.tim.setMessageRead({ conversationID: prevConversationID });
        }
        // 2.待切换的会话也进行已读上报
        this.tim.setMessageRead({ conversationID });
        // 3. 获取会话信息
        return this.tim.getConversationProfile(conversationID).then((res) => {
            // 3.1 更新当前会话
            this.store.dispatch(updateCurrentConversationAction({ conversation: res.data.conversation }));
            // 3.2 获取消息列表
            this.getMessageList(conversationID);
            if (res.data.conversation.type === TIM$1.TYPES.CONV_GROUP) {
                this.getGroupMemberList(res.data.conversation.groupProfile.groupID);
            }
            return Promise.resolve();
        });
        // .catch(err => {
        //   this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: err }));
        // });
    }
    /**
     * @description 获取消息
     */
    getMessageList(conversationID) {
        if (this.conversation.isCompleted) {
            this.store.dispatch(showAction({
                msgType: MESSAGE_STATUS.info,
                message: '已经没有更多的历史消息了哦'
            }));
            return;
        }
        const { nextReqMessageID, currentMessageList } = this.conversation;
        this.tim.getMessageList({ conversationID, nextReqMessageID, count: 15 })
            .then((imResponse) => {
            this.store.dispatch(updateMessageAction({
                nextReqMessageID: imResponse.data.nextReqMessageID,
                isCompleted: imResponse.data.isCompleted,
                currentMessageList: [...imResponse.data.messageList, ...currentMessageList]
            }));
        });
    }
    /**
     * @description 获取群成员
     */
    getGroupMemberList(groupID) {
        this.tim.getGroupMemberList({
            groupID,
            offset: this.currentMemberList.length,
            count: 30
        }).then((imResponse) => {
            this.store.dispatch(updateCurrentMemberListAction({ currentMemberList: imResponse.data.memberList }));
        });
    }
    initTim(config) {
        // const cosImport = await import('cos-js-sdk-v5');
        // const timImport = await import('tim-js-sdk');
        this.tim = TIM$1.create({
            SDKAppID: config.sdkAppId,
            oversea: config.oversea,
        });
        // 无日志级别
        this.tim.setLogLevel(config.level || 1);
        // 注册 cos
        this.tim.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin });
    }
}
TimHelperService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TimHelperService, deps: [{ token: i1.Store }, { token: NG_Tim_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
TimHelperService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TimHelperService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TimHelperService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () {
        return [{ type: i1.Store }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [NG_Tim_CONFIG]
                    }] }];
    } });

function titleNotify(count) {
    const hasNewMessage = count > 0;
    if (hasNewMessage) {
        if (document.title.search(/\((.*?)\)/) >= 0) {
            document.title = document.title.replace(/\((.*?)\)/, `(${count > 99 ? '99+' : count})`);
        }
        else {
            document.title = `(${count})${document.title}`;
        }
    }
    else {
        document.title = document.title.replace(/\((.*?)\)/, '');
    }
}

class EditProfileComponent {
    constructor(fb, modalRef, store, timHelperService) {
        this.fb = fb;
        this.modalRef = modalRef;
        this.store = store;
        this.timHelperService = timHelperService;
        this.radioOption = [
            { label: '男', value: TIM.TYPES.GENDER_MALE },
            { label: '女', value: TIM.TYPES.GENDER_FEMALE },
            { label: '不显示', value: TIM.TYPES.GENDER_UNKNOWN },
        ];
    }
    ngOnInit() {
        this.form = this.fb.group({
            avatar: [this.userProfile.avatar],
            nick: [this.userProfile.nick],
            gender: [this.userProfile.gender]
        });
    }
    submitForm() {
        const formValue = this.form.value;
        if (formValue.avatar && formValue.avatar.indexOf('http') === -1) {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: '头像应该是 Url 地址' }));
            formValue.avatar = '';
            return;
        }
        const options = {};
        // 过滤空串
        Object.keys(formValue).forEach(key => {
            if (formValue[key]) {
                options[key] = formValue[key];
            }
        });
        this.timHelperService.tim
            .updateMyProfile(options)
            .then(() => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.success, message: '修改成功' }));
            this.modalRef.destroy();
        })
            .catch(imError => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: imError.message }));
        });
    }
}
EditProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: EditProfileComponent, deps: [{ token: i1$1.FormBuilder }, { token: i2.NzModalRef }, { token: i1.Store }, { token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
EditProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: EditProfileComponent, selector: "im-edit-profile", inputs: { userProfile: "userProfile" }, ngImport: i0, template: "<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\r\n      <span>\u5934\u50CF</span>\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"avatar\" placeholder=\"\u5934\u50CF\u5730\u5740\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"avatar\">\u6635\u79F0</nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"nick\" placeholder=\"\u6635\u79F0\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u6027\u522B\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <nz-radio-group formControlName=\"gender\">\r\n        <label *ngFor=\"let item of radioOption\" nz-radio\r\n          [nzValue]=\"item.value\">{{item.label}}</label>\r\n      </nz-radio-group>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n\r\n  <nz-form-item nz-row nzJustify=\"center\">\r\n    <nz-form-control [nzSpan]=\"12\" nzPush=\"8\">\r\n      <button nz-button nzType=\"primary\">\u786E\u5B9A</button>\r\n    </nz-form-control>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"default\" type=\"button\" (click)=\"modalRef.destroy()\">\u53D6\u6D88</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n", styles: [""], components: [{ type: i5.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { type: i5.NzFormLabelComponent, selector: "nz-form-label", inputs: ["nzFor", "nzRequired", "nzNoColon", "nzTooltipTitle", "nzTooltipIcon"], exportAs: ["nzFormLabel"] }, { type: i5.NzFormControlComponent, selector: "nz-form-control", inputs: ["nzSuccessTip", "nzWarningTip", "nzErrorTip", "nzValidatingTip", "nzExtra", "nzAutoTips", "nzDisableAutoTips", "nzHasFeedback", "nzValidateStatus"], exportAs: ["nzFormControl"] }, { type: i6.NzRadioGroupComponent, selector: "nz-radio-group", inputs: ["nzDisabled", "nzButtonStyle", "nzSize", "nzName"], exportAs: ["nzRadioGroup"] }, { type: i6.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { type: i7.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }], directives: [{ type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5.NzFormDirective, selector: "[nz-form]", inputs: ["nzLayout", "nzNoColon", "nzAutoTips", "nzDisableAutoTips", "nzTooltipIcon"], exportAs: ["nzForm"] }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i8.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i8.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i9.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i5$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i10.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: EditProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'im-edit-profile', changeDetection: ChangeDetectionStrategy.OnPush, template: "<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\r\n      <span>\u5934\u50CF</span>\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"avatar\" placeholder=\"\u5934\u50CF\u5730\u5740\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"avatar\">\u6635\u79F0</nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"nick\" placeholder=\"\u6635\u79F0\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u6027\u522B\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <nz-radio-group formControlName=\"gender\">\r\n        <label *ngFor=\"let item of radioOption\" nz-radio\r\n          [nzValue]=\"item.value\">{{item.label}}</label>\r\n      </nz-radio-group>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n\r\n  <nz-form-item nz-row nzJustify=\"center\">\r\n    <nz-form-control [nzSpan]=\"12\" nzPush=\"8\">\r\n      <button nz-button nzType=\"primary\">\u786E\u5B9A</button>\r\n    </nz-form-control>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"default\" type=\"button\" (click)=\"modalRef.destroy()\">\u53D6\u6D88</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }, { type: i2.NzModalRef }, { type: i1.Store }, { type: TimHelperService }]; }, propDecorators: { userProfile: [{
                type: Input
            }] } });

class AvatarComponent {
    constructor() {
        this.shape = 'circle';
        this.size = 'large';
        this.type = 'C2C';
    }
    set src(value) {
        this._src = value;
        if (/^(https:|http:|\/\/)/.test(value)) {
            this.avatarSrc = value;
        }
        else {
            this.avatarSrc = this.getDefaultAvatar();
        }
    }
    ;
    get src() {
        return this._src;
    }
    ngOnInit() {
    }
    getDefaultAvatar() {
        switch (this.type) {
            case 'C2C':
                // 个人头像
                return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-2.png';
            case 'GROUP':
                // 群默认头像
                return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-3.png';
            case TIM.TYPES.CONV_SYSTEM:
                return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACpCAMAAAHy0MbyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJYUExURQrBYAvBYRPDZhzGbCXIcSrJdSHHbxjFaQ7CYwzBYSnJdEzSi3bcpqLnw87z3+X47uj58Ov68uz68+n58ef579/36rzu05Djt2TYmz7OghnFai/KeIHfrcPw2OP47fz+/f////P8+Nb15K7ry1vVlBrFaw7CYlDTjqrqyPP899j15YrhsxDCZFfUksDv1vr+/C7KdyzKdq3qynLbo2HXmf7//rTszhTDZo/jtk7SjCjJc7nt0fX9+THLes3y3/3//oXgsA3CYjTMe5HjuA/CY8/z4IDfrRbEaLft0GbYnO779Pb9+cLv1x3GbNL04ub575zmv5flvEDPgzDLeaXoxIzitPD79TXMfB7GbeL47F7WlhLDZavqyfj9+03SjN326YvitEbQh3jdqO/79CLHcLHrzE/TjSPHcOT47vH79rHrzUvSivf9+vn++8zy3lXUkdf15SDHblnVk+D36ybIclrVlGfZnHjdpznNf1HTjhfEadv26I3itUfRiMfx26Pow0HPhJPkuZjlvMHv1zjNfkTQhWnZnhvFa8ry3TLLepXkurbt0Gvan4LfrknRiV/Wl9X05HHbo7/v1Z3mv8jx24jhskjRiTrNf8nx3Mvy3WLXmUfQh0XQhu3681LTj9n15ljVk2XYm6/ry+H37Or68bXsz2PYmjfMfW3aoLvu0zbMfTPLe77u1S7KeErRirDrzNr253fcpkPPhSvJdafpxr3u1N736n/frPL89o7itW/boWDXl3ndqJvmvvv+/Xveqsbx2tz26fT8+BHDZD3OgYTgr4fhsQAAAKRC35oAAADIdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A9ppxxwAAAAlwSFlzAAAXEQAAFxEByibzPwAABVpJREFUaEPt2zuP2koUB3BaN1dCLikwols5fVb5Cim3QaxEtNomDdJKaHWbbaBASPcTUKVBShv6NNH6e2Uefxs/5u0H7NX5NXiOzwwjY+yxPR4N422MhYqEw/KFiDbiZ3UY0V7D1ThizDMiAmIcIkIURaycxlGEQCFLRvUvlDJ8/j+MP2OhTGymxoqxCDc2ioz6/mgo5hB1C39BtBZGkEFAQIiLERKiKN2xtc0ffpSkD1MsVhzxSZxgoydLlA2QKfyLmA7S4Buiaitk5RBWQ04BYTXkFBBWQ04BYTXkFA6IqyCl5AvWNGB9DVbWYW3NGWvVZGOZsb8X8i+MAiHe5rOFeYfMbcSuliQzlA3WSGUQ0fqGPAExHWRJvxFUwzk2h6gacnKIqiEnt0VYCTm5FcJKyMlVzrB1yMl9tFzTBn5ASgFxFWRc6I+YSCjDmoZGDzisq8PaKuWQR52qaTi/BKjB2jo28mZjb7k2TkRRLGv9lCcgTUdrkiQbpbZTVk5003VYH2X3lo4SQkiAN3EokhYbBNuqDFWkN6xqoTRWKmt5d2SJZhSQESQfAyohJwRa0ECSvzka0LhHmrcZGtBYI80b6usYR1kG7ARuRO1KH63d0D8GausFdfiAykbI9fAdNS0+Id2RU2cl1HCivHrQ8bgPihpuvqOSi/RxFRd4XSwyU1bEIndKUcVbym8fYplhBeNlswfWVIJuTXh35WIH7lhjvEHhAcEuRO9/ZKOrPSKEEEIIIVey+e+f8Wy8e3V4yuxuWb4AV02QCFO/rH9CvB3FLRPlbB5P6lsmWBnuBQ3VYXUwNNPg8NTPhA+o1Vr9eKb7UUgJUnt8WDFHTgDDXTkGSQHM97ncHt6ooAGN4NtctstZZHnbo74O0rxpHsgVkObtHvV1Qq+4be2G3hCndiVqV6J2pb7afUJ9HbcpYk316Xx15smAeqiuhzxPW9TWq8xQdmW9u+53J7VQ3Dc0CJgCa98KHJLd2c5tOaQ7QzUr46yoJpeNK3ndY85QyYXPcApV3KCOA9cfTZqglp1fu+7/utT9Z9NNoFJLj2s8nuBYZSxx1dKd919OTKxixLOiNC+OnnkJBdtUKzN+ALo8gub/byy2xVq6bMRKoR3WxekjllfsJw1+fl7H+pjEfHd65ztKV90did/q8hynw+lmomEIfi6mdEKr284nx02y7GlPU+4IIYQQQgghhBBisVxuNptOp4j0YpOt60/wF/MfN9nvHzt0UGH2OfTJUT9eTdMipPmt9Hhj2K4Vr6hwTYcFOuOiu3lUYZauWzZ31S3s90hD2F3vQKF4xdBudq3/3G90wFfoc+t2grYtN75Gf1/x5QEWaGJAL7YpBSah0w3C2SZWGI0HPzzoJ0+66GZ2rDuPV+tUWkyvDGKbvGOx7vbxn9UnfG+g1cDnirbdfUE7A6Hu9om62yfqbp+ou336YN1tMTjn4oFPwm5TR/U6m+flJOCKvSr8vZQA5ZlggQa8/jn7TMTU8ZpZ20ary7SLfMpiv9J2V2klsfuE3WBHfFcnMjTal32buwsKcfgbcQ463bRSfxeZ6Rpf0a2A9xtcTLo4fKn0soH3fAp6P/o4xfWw3+amPfzhetpzuR2+olv3fMp89+56HJ1F+4kCdpQTihVnuc/HB5TLDpOB75VJE9GjZKX6cow1Bx0xWkR4A+AB5ZIU58Gejq5hnnGUaxxCMdacnlC+EZP8qHwqvwyB/ZZF0xt7RSJdF4eN6Wl7PP7asoHmFNv2J5JuyVk3Wnu8yt/fKkq32Jwlq/tbflMmet/e/ZEdncZfj0Gvvw4s35ztXpkjhBBCCCGkrdHoLzv9X1u4OdoGAAAAAElFTkSuQmCC';
            default:
                // 默认头像
                return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-1.png';
        }
    }
}
AvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: AvatarComponent, selector: "im-avatar", inputs: { shape: "shape", size: "size", type: "type", title: "title", src: "src" }, ngImport: i0, template: "<nz-avatar [nzSize]=\"size\" [nzShape]=\"shape\" [nzSrc]=\"avatarSrc\" [nzAlt]=\"title\" [title]=\"title\"></nz-avatar>\r\n", styles: [""], components: [{ type: i1$2.NzAvatarComponent, selector: "nz-avatar", inputs: ["nzShape", "nzSize", "nzGap", "nzText", "nzSrc", "nzSrcSet", "nzAlt", "nzIcon"], outputs: ["nzError"], exportAs: ["nzAvatar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'im-avatar', template: "<nz-avatar [nzSize]=\"size\" [nzShape]=\"shape\" [nzSrc]=\"avatarSrc\" [nzAlt]=\"title\" [title]=\"title\"></nz-avatar>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { shape: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], title: [{
                type: Input
            }], src: [{
                type: Input
            }] } });

class ProfileCardComponent {
    constructor() { }
    set userProfile(value) {
        this._userProfile = value;
        switch (value.gender) {
            case TIM.TYPES.GENDER_MALE:
                this.className = 'icon-male';
                break;
            case TIM.TYPES.GENDER_FEMALE:
                this.className = 'icon-female';
                break;
            default:
                this.className = null;
        }
    }
    ;
    get userProfile() {
        return this._userProfile;
    }
    ;
    ngOnInit() {
    }
}
ProfileCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ProfileCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProfileCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ProfileCardComponent, selector: "im-profile-card", inputs: { userProfile: "userProfile" }, ngImport: i0, template: "<div class=\"profile-card-wrapper\">\r\n  <div class=\"content\">\r\n    <im-avatar [src]=\"userProfile?.avatar\"></im-avatar>\r\n    <div class=\"basic\">\r\n      <span class=\"nick text-ellipsis\">{{ userProfile?.nick || userProfile?.userID }}</span>\r\n      <span class=\"iconfont\" [class]=\"className\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".profile-header{display:flex;margin-bottom:12px}.profile-card-wrapper .content{display:flex;justify-content:center;flex-direction:column;align-items:center}.basic{display:flex;align-items:center;margin-top:12px}.icon-male{color:#6391f3}.icon-female{color:#ff8096}.nick{font-size:18px;margin-right:8px;max-width:100px;display:inline-block}im-avatar::ng-deep .avatar{width:70px;height:70px}\n"], components: [{ type: AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ProfileCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'im-profile-card', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"profile-card-wrapper\">\r\n  <div class=\"content\">\r\n    <im-avatar [src]=\"userProfile?.avatar\"></im-avatar>\r\n    <div class=\"basic\">\r\n      <span class=\"nick text-ellipsis\">{{ userProfile?.nick || userProfile?.userID }}</span>\r\n      <span class=\"iconfont\" [class]=\"className\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".profile-header{display:flex;margin-bottom:12px}.profile-card-wrapper .content{display:flex;justify-content:center;flex-direction:column;align-items:center}.basic{display:flex;align-items:center;margin-top:12px}.icon-male{color:#6391f3}.icon-female{color:#ff8096}.nick{font-size:18px;margin-right:8px;max-width:100px;display:inline-block}im-avatar::ng-deep .avatar{width:70px;height:70px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { userProfile: [{
                type: Input
            }] } });

class MyProfileComponent {
    constructor(store, modal) {
        this.store = store;
        this.modal = modal;
    }
    ngOnInit() {
        this.subscription = this.store.select(currentUserProfileSelector)
            .subscribe(res => {
            if (res) {
                this.currentUserProfile = res;
            }
        });
    }
    editProfile() {
        this.modal.create({
            nzTitle: `编辑资料`,
            nzContent: EditProfileComponent,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: '40%',
            nzStyle: { top: '20px' },
            nzComponentParams: {
                userProfile: this.currentUserProfile
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
MyProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MyProfileComponent, deps: [{ token: i1.Store }, { token: i2.NzModalService }], target: i0.ɵɵFactoryTarget.Component });
MyProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MyProfileComponent, selector: "app-my-profile", ngImport: i0, template: "<ng-template #titleTemplate>\r\n  <div class=\"title-container\">\r\n    <span>\u5F53\u524D\u7528\u6237</span>\r\n    <i nz-icon nzType=\"setting\" nzTheme=\"outline\" (click)=\"editProfile()\"></i>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #contentTemplate>\r\n  <im-profile-card [userProfile]=\"currentUserProfile\"></im-profile-card>\r\n</ng-template>\r\n\r\n<div class=\"my-profile-wrapper\">\r\n  <div nz-button nz-popover nzType=\"primary\" nzPopoverTrigger=\"click\"\r\n    [nzPopoverTitle]=\"titleTemplate\" nzPopoverPlacement=\"right\"\r\n    [nzPopoverContent]=\"contentTemplate\">\r\n    <im-avatar [src]=\"currentUserProfile.avatar\"></im-avatar>\r\n  </div>\r\n</div>\r\n", styles: [".title-container{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}.title-container i{cursor:pointer}.my-profile-wrapper{margin:15px}.my-profile-wrapper im-avatar{cursor:pointer}.edit-my-profile{position:absolute;top:10px;right:10px;cursor:pointer}\n"], components: [{ type: ProfileCardComponent, selector: "im-profile-card", inputs: ["userProfile"] }, { type: AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }], directives: [{ type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i7$1.NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MyProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-my-profile', template: "<ng-template #titleTemplate>\r\n  <div class=\"title-container\">\r\n    <span>\u5F53\u524D\u7528\u6237</span>\r\n    <i nz-icon nzType=\"setting\" nzTheme=\"outline\" (click)=\"editProfile()\"></i>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #contentTemplate>\r\n  <im-profile-card [userProfile]=\"currentUserProfile\"></im-profile-card>\r\n</ng-template>\r\n\r\n<div class=\"my-profile-wrapper\">\r\n  <div nz-button nz-popover nzType=\"primary\" nzPopoverTrigger=\"click\"\r\n    [nzPopoverTitle]=\"titleTemplate\" nzPopoverPlacement=\"right\"\r\n    [nzPopoverContent]=\"contentTemplate\">\r\n    <im-avatar [src]=\"currentUserProfile.avatar\"></im-avatar>\r\n  </div>\r\n</div>\r\n", styles: [".title-container{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center}.title-container i{cursor:pointer}.my-profile-wrapper{margin:15px}.my-profile-wrapper im-avatar{cursor:pointer}.edit-my-profile{position:absolute;top:10px;right:10px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: i2.NzModalService }]; } });

/**
 * 返回年月日
 * @export
 * @param {Date} date
 * @param {string} [splitor='-']
 * @returns
 */
function getDate(date, splitor = '-') {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}${splitor}${addZeroPrefix(month)}${splitor}${addZeroPrefix(day)}`;
}
/**
 * 返回时分秒/时分
 * @export
 * @param {*} date
 * @param {boolean} [withSecond=false]
 * @returns
 */
function getTime(date, withSecond = false) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return withSecond ? `${addZeroPrefix(hour)}:${addZeroPrefix(minute)}:${addZeroPrefix(second)}` : `${hour}:${addZeroPrefix(minute)}`;
}
function getFullDate(date) {
    return `${getDate(date)} ${getTime(date)}`;
}
function isToday(date) {
    return date.toDateString() === new Date().toDateString();
}
/**
 * 个位数，加0前缀
 * @param {*} number
 * @returns
 */
function addZeroPrefix(number) {
    return number < 10 ? `0${number}` : number;
}

class ConversationItemComponent {
    constructor(store, timHelperService) {
        this.store = store;
        this.timHelperService = timHelperService;
        this.TIM = TIM$1;
    }
    ngOnInit() {
        this.profileSubscription = this.store.select(currentUserProfileSelector)
            .subscribe(res => {
            this.currentUserProfile = res;
        });
    }
    selectConversation() {
        if (this.conversation.conversationID !== this.currentConversation.conversationID) {
            this.timHelperService.checkoutConversation(this.conversation.conversationID);
            // this.timHelperService.eventBus$.next('select-item');
        }
    }
    get avatarSrc() {
        var _a, _b;
        switch (this.conversation.type) {
            case 'GROUP':
                return (_a = this.conversation.groupProfile) === null || _a === void 0 ? void 0 : _a.avatar;
            case 'C2C':
                return (_b = this.conversation.userProfile) === null || _b === void 0 ? void 0 : _b.avatar;
            default:
                return null;
        }
    }
    ;
    get date() {
        if (!this.conversation.lastMessage || !this.conversation.lastMessage.lastTime) {
            return '';
        }
        const date = new Date(this.conversation.lastMessage.lastTime * 1000);
        if (isToday(date)) {
            return getTime(date);
        }
        return getDate(date);
    }
    get messageForShow() {
        var _a;
        if (this.conversation.lastMessage.isRevoked) {
            if (this.conversation.lastMessage.fromAccount === ((_a = this.currentUserProfile) === null || _a === void 0 ? void 0 : _a.userID)) {
                return '你撤回了一条消息';
            }
            if (this.conversation.type === TIM$1.TYPES.CONV_C2C) {
                return '对方撤回了一条消息';
            }
            return `${this.conversation.lastMessage.fromAccount}撤回了一条消息`;
        }
        return this.conversation.lastMessage.messageForShow;
    }
    get conversationName() {
        if (this.conversation.type === TIM$1.TYPES.CONV_C2C) {
            return this.conversation.userProfile.nick || this.conversation.userProfile.userID;
        }
        if (this.conversation.type === TIM$1.TYPES.CONV_GROUP) {
            return this.conversation.groupProfile.name || this.conversation.groupProfile.groupID;
        }
        if (this.conversation.type === TIM$1.TYPES.CONV_SYSTEM) {
            return '系统通知';
        }
        return '';
    }
    deleteConversation(event) {
        // 停止冒泡，避免和点击会话的事件冲突
        event.stopPropagation();
        this.timHelperService.tim
            .deleteConversation(this.conversation.conversationID)
            .then(() => {
            this.store.dispatch(showAction({
                message: `会话【${this.conversationName}】删除成功!`,
                msgType: MESSAGE_STATUS.success
            }));
            this.store.dispatch(resetCurrentConversationAction());
        })
            .catch(error => {
            this.store.dispatch(showAction({
                message: `会话【${this.conversationName}】删除失败!, error=${error.message}`,
                msgType: MESSAGE_STATUS.error
            }));
        });
    }
    ngOnDestroy() {
        if (this.profileSubscription) {
            this.profileSubscription.unsubscribe();
        }
    }
}
ConversationItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConversationItemComponent, deps: [{ token: i1.Store }, { token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
ConversationItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ConversationItemComponent, selector: "app-conversation-item", inputs: { currentConversation: "currentConversation", conversation: "conversation" }, ngImport: i0, template: "<div class=\"conversation-item-container\"\r\n  [ngClass]=\"{'choose': conversation.conversationID === currentConversation.conversationID }\"\r\n  (click)=\"selectConversation()\">\r\n  <div class=\"close-btn\">\r\n    <span class=\"tim-icon-close\" title=\"\u5220\u9664\u4F1A\u8BDD\" (click)=\"deleteConversation($event)\"></span>\r\n  </div>\r\n  <div class=\"warp\">\r\n    <im-avatar [src]=\"avatarSrc\" [type]=\"conversation.type\"></im-avatar>\r\n    <div class=\"content\">\r\n      <div class=\"row-1\">\r\n        <div class=\"name\">\r\n          <div class=\"text-ellipsis\">\r\n            <span [title]=\"conversation.userProfile.nick || conversation.userProfile.userID\"\r\n              *ngIf=\"conversation.type ===  TIM.TYPES.CONV_C2C\">\r\n              {{conversation.userProfile.nick || conversation.userProfile.userID}}\r\n            </span>\r\n            <span [title]=\"conversation.groupProfile.name || conversation.groupProfile.groupID\"\r\n              *ngIf=\"conversation.type===TIM.TYPES.CONV_GROUP\">\r\n              {{conversation.groupProfile.name || conversation.groupProfile.groupID}}\r\n            </span>\r\n            <span *ngIf=\"conversation.type === TIM.TYPES.CONV_SYSTEM\">\u7CFB\u7EDF\u901A\u77E5\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"unread-count\">\r\n          <span class=\"badge\" *ngIf=\"this.conversation.unreadCount > 0\">\r\n            {{conversation.unreadCount > 99 ? '99+' : conversation.unreadCount}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row-2\">\r\n        <div class=\"summary\">\r\n          <div v-if=\"conversation.lastMessage\" class=\"text-ellipsis\">\r\n            <!-- <span class=\"remind\" style=\"color:red;\">[\u6709\u4EBA\u63D0\u5230\u6211]</span> -->\r\n            <span class=\"text\" [title]=\"conversation.lastMessage.messageForShow\">\r\n              {{messageForShow}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"date\">\r\n          {{date}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".conversation-item-container{padding:15px 10px;cursor:pointer;position:relative;overflow:hidden;transition:.2s}.conversation-item-container:hover{background-color:#404953}.conversation-item-container:hover .close-btn{right:3px}.conversation-item-container .close-btn{position:absolute;right:-20px;top:3px;color:#76828c;transition:all .2s ease}.conversation-item-container .close-btn:hover{color:#f35f5f}.conversation-item-container .warp{display:flex}.conversation-item-container .warp im-avatar{padding-right:10px}.conversation-item-container .content{flex:1;height:40px;overflow:hidden}.conversation-item-container .content .row-1{display:flex;line-height:21px}.conversation-item-container .content .row-1 .name{color:#f7f7f8;flex:1;min-width:0px}.conversation-item-container .content .row-1 .unread-count{padding-left:10px;flex-shrink:0;color:#76828c;font-size:12px}.conversation-item-container .content .row-1 .unread-count .badge{vertical-align:bottom;background-color:#f35f5f;border-radius:10px;color:#fff;display:inline-block;font-size:12px;height:18px;max-width:40px;line-height:18px;padding:0 6px;text-align:center;white-space:nowrap}.conversation-item-container .content .row-2{display:flex;font-size:12px;padding-top:3px}.conversation-item-container .content .row-2 .summary{flex:1;overflow:hidden;min-width:0px;color:#a5b5c1}.conversation-item-container .content .row-2 .summary .remind{color:#f35f5f}.conversation-item-container .content .row-2 .date{padding-left:10px;flex-shrink:0;text-align:right;color:#76828c}.choose{background-color:#404953}.context-menu-button{padding:10px;border:2px solid #2d8cf0;border-radius:8px}\n"], components: [{ type: AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }], directives: [{ type: i5$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConversationItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-conversation-item', template: "<div class=\"conversation-item-container\"\r\n  [ngClass]=\"{'choose': conversation.conversationID === currentConversation.conversationID }\"\r\n  (click)=\"selectConversation()\">\r\n  <div class=\"close-btn\">\r\n    <span class=\"tim-icon-close\" title=\"\u5220\u9664\u4F1A\u8BDD\" (click)=\"deleteConversation($event)\"></span>\r\n  </div>\r\n  <div class=\"warp\">\r\n    <im-avatar [src]=\"avatarSrc\" [type]=\"conversation.type\"></im-avatar>\r\n    <div class=\"content\">\r\n      <div class=\"row-1\">\r\n        <div class=\"name\">\r\n          <div class=\"text-ellipsis\">\r\n            <span [title]=\"conversation.userProfile.nick || conversation.userProfile.userID\"\r\n              *ngIf=\"conversation.type ===  TIM.TYPES.CONV_C2C\">\r\n              {{conversation.userProfile.nick || conversation.userProfile.userID}}\r\n            </span>\r\n            <span [title]=\"conversation.groupProfile.name || conversation.groupProfile.groupID\"\r\n              *ngIf=\"conversation.type===TIM.TYPES.CONV_GROUP\">\r\n              {{conversation.groupProfile.name || conversation.groupProfile.groupID}}\r\n            </span>\r\n            <span *ngIf=\"conversation.type === TIM.TYPES.CONV_SYSTEM\">\u7CFB\u7EDF\u901A\u77E5\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"unread-count\">\r\n          <span class=\"badge\" *ngIf=\"this.conversation.unreadCount > 0\">\r\n            {{conversation.unreadCount > 99 ? '99+' : conversation.unreadCount}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row-2\">\r\n        <div class=\"summary\">\r\n          <div v-if=\"conversation.lastMessage\" class=\"text-ellipsis\">\r\n            <!-- <span class=\"remind\" style=\"color:red;\">[\u6709\u4EBA\u63D0\u5230\u6211]</span> -->\r\n            <span class=\"text\" [title]=\"conversation.lastMessage.messageForShow\">\r\n              {{messageForShow}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"date\">\r\n          {{date}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".conversation-item-container{padding:15px 10px;cursor:pointer;position:relative;overflow:hidden;transition:.2s}.conversation-item-container:hover{background-color:#404953}.conversation-item-container:hover .close-btn{right:3px}.conversation-item-container .close-btn{position:absolute;right:-20px;top:3px;color:#76828c;transition:all .2s ease}.conversation-item-container .close-btn:hover{color:#f35f5f}.conversation-item-container .warp{display:flex}.conversation-item-container .warp im-avatar{padding-right:10px}.conversation-item-container .content{flex:1;height:40px;overflow:hidden}.conversation-item-container .content .row-1{display:flex;line-height:21px}.conversation-item-container .content .row-1 .name{color:#f7f7f8;flex:1;min-width:0px}.conversation-item-container .content .row-1 .unread-count{padding-left:10px;flex-shrink:0;color:#76828c;font-size:12px}.conversation-item-container .content .row-1 .unread-count .badge{vertical-align:bottom;background-color:#f35f5f;border-radius:10px;color:#fff;display:inline-block;font-size:12px;height:18px;max-width:40px;line-height:18px;padding:0 6px;text-align:center;white-space:nowrap}.conversation-item-container .content .row-2{display:flex;font-size:12px;padding-top:3px}.conversation-item-container .content .row-2 .summary{flex:1;overflow:hidden;min-width:0px;color:#a5b5c1}.conversation-item-container .content .row-2 .summary .remind{color:#f35f5f}.conversation-item-container .content .row-2 .date{padding-left:10px;flex-shrink:0;text-align:right;color:#76828c}.choose{background-color:#404953}.context-menu-button{padding:10px;border:2px solid #2d8cf0;border-radius:8px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: TimHelperService }]; }, propDecorators: { currentConversation: [{
                type: Input
            }], conversation: [{
                type: Input
            }] } });

class ConversationListComponent {
    constructor(store, timHelperService) {
        this.store = store;
        this.timHelperService = timHelperService;
        this.conversationList = [];
        this.timeout = null;
        this.showDialog = false;
        this.userID = '';
    }
    ngOnInit() {
        this.storeSubscription = this.store.select(currentConversationSelector)
            .subscribe(res => {
            this.currentConversation = res;
        });
        // 获取当前list会话
        this.subscription = this.store.select(conversationListSelector)
            .subscribe(res => {
            this.conversationList = res;
        });
    }
    ;
    add() {
        this.showDialog = true;
    }
    handleOk() {
        if (this.userID !== '@TIM#SYSTEM') {
            this.timHelperService.checkoutConversation(`C2C${this.userID}`);
            this.showDialog = false;
        }
        this.userID = '';
    }
    handleCancel() {
        this.showDialog = false;
    }
    refresh() {
        // if (!this.timeout) {
        //   this.timeout = setTimeout(() => {
        //     this.timeout = null;
        //   }, 1000);
        // }
        // 拉取会话列表
        this.timHelperService.tim.getConversationList().then(({ data }) => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.success, message: '刷新成功！' }));
        }).catch((imError) => {
            console.error('getConversationList error:', imError); // 获取会话列表失败的相关信息
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.storeSubscription) {
            this.storeSubscription.unsubscribe();
        }
    }
}
ConversationListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConversationListComponent, deps: [{ token: i1.Store }, { token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
ConversationListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ConversationListComponent, selector: "app-conversation-list", ngImport: i0, template: "<div class=\"list-container\">\r\n  <div class=\"header-bar\">\r\n    <button title=\"\u5237\u65B0\u5217\u8868\" (click)=\"refresh()\">\r\n      <i class=\"tim-icon-refresh\"></i>\r\n    </button>\r\n    <button title=\"\u521B\u5EFA\u4F1A\u8BDD\" (click)=\"add()\">\r\n      <i class=\"tim-icon-add\"></i>\r\n    </button>\r\n  </div>\r\n  <div class=\"scroll-container\">\r\n    <app-conversation-item [currentConversation]=\"currentConversation\" [conversation]=\"item\"\r\n      *ngFor=\"let item of conversationList\">\r\n    </app-conversation-item>\r\n  </div>\r\n</div>\r\n\r\n<nz-modal [(nzVisible)]=\"showDialog\" nzTitle=\"\u53D1\u8D77\u4F1A\u8BDD\" [nzContent]=\"content\"\r\n  (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\r\n</nz-modal>\r\n\r\n<ng-template #content>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\">\u7528\u6237ID</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\">\r\n      <input nz-input [(ngModel)]=\"userID\">\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</ng-template>\r\n", styles: [".list-container{height:100%;width:100%;display:flex flex-direction column}.header-bar{flex-shrink:0;height:50px;border-bottom:1px solid #303841;padding:10px 10px 10px 20px}.header-bar button{float:right;display:inline-block;cursor:pointer;background:#303841;border:none;color:#76828c;box-sizing:border-box;transition:.3s;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin:0 10px 0 0;padding:0;width:30px;height:30px;line-height:34px;font-size:24px;text-align:center;white-space:nowrap;border-radius:50%;outline:0}.header-bar button:hover{transform:rotate(360deg);color:#5cadff}.header-bar .scroll-container{overflow-y:scroll;flex:1}.bottom-circle-btn{position:absolute;bottom:20px;right:20px}.refresh{bottom:70px}\n"], components: [{ type: ConversationItemComponent, selector: "app-conversation-item", inputs: ["currentConversation", "conversation"] }, { type: i2.NzModalComponent, selector: "nz-modal", inputs: ["nzMask", "nzMaskClosable", "nzCloseOnNavigation", "nzVisible", "nzClosable", "nzOkLoading", "nzOkDisabled", "nzCancelDisabled", "nzCancelLoading", "nzKeyboard", "nzNoAnimation", "nzCentered", "nzContent", "nzComponentParams", "nzFooter", "nzZIndex", "nzWidth", "nzWrapClassName", "nzClassName", "nzStyle", "nzTitle", "nzCloseIcon", "nzMaskStyle", "nzBodyStyle", "nzOkText", "nzCancelText", "nzOkType", "nzOkDanger", "nzIconType", "nzModalType", "nzAutofocus", "nzOnOk", "nzOnCancel"], outputs: ["nzOnOk", "nzOnCancel", "nzAfterOpen", "nzAfterClose", "nzVisibleChange"], exportAs: ["nzModal"] }, { type: i5.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { type: i5.NzFormLabelComponent, selector: "nz-form-label", inputs: ["nzFor", "nzRequired", "nzNoColon", "nzTooltipTitle", "nzTooltipIcon"], exportAs: ["nzFormLabel"] }, { type: i5.NzFormControlComponent, selector: "nz-form-control", inputs: ["nzSuccessTip", "nzWarningTip", "nzErrorTip", "nzValidatingTip", "nzExtra", "nzAutoTips", "nzDisableAutoTips", "nzHasFeedback", "nzValidateStatus"], exportAs: ["nzFormControl"] }], directives: [{ type: i5$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i8.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i8.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i9.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConversationListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-conversation-list', template: "<div class=\"list-container\">\r\n  <div class=\"header-bar\">\r\n    <button title=\"\u5237\u65B0\u5217\u8868\" (click)=\"refresh()\">\r\n      <i class=\"tim-icon-refresh\"></i>\r\n    </button>\r\n    <button title=\"\u521B\u5EFA\u4F1A\u8BDD\" (click)=\"add()\">\r\n      <i class=\"tim-icon-add\"></i>\r\n    </button>\r\n  </div>\r\n  <div class=\"scroll-container\">\r\n    <app-conversation-item [currentConversation]=\"currentConversation\" [conversation]=\"item\"\r\n      *ngFor=\"let item of conversationList\">\r\n    </app-conversation-item>\r\n  </div>\r\n</div>\r\n\r\n<nz-modal [(nzVisible)]=\"showDialog\" nzTitle=\"\u53D1\u8D77\u4F1A\u8BDD\" [nzContent]=\"content\"\r\n  (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\r\n</nz-modal>\r\n\r\n<ng-template #content>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\">\u7528\u6237ID</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\">\r\n      <input nz-input [(ngModel)]=\"userID\">\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</ng-template>\r\n", styles: [".list-container{height:100%;width:100%;display:flex flex-direction column}.header-bar{flex-shrink:0;height:50px;border-bottom:1px solid #303841;padding:10px 10px 10px 20px}.header-bar button{float:right;display:inline-block;cursor:pointer;background:#303841;border:none;color:#76828c;box-sizing:border-box;transition:.3s;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin:0 10px 0 0;padding:0;width:30px;height:30px;line-height:34px;font-size:24px;text-align:center;white-space:nowrap;border-radius:50%;outline:0}.header-bar button:hover{transform:rotate(360deg);color:#5cadff}.header-bar .scroll-container{overflow-y:scroll;flex:1}.bottom-circle-btn{position:absolute;bottom:20px;right:20px}.refresh{bottom:70px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: TimHelperService }]; } });

class CreateGroupComponent {
    constructor(fb, store, cd, modalRef, timeHelper) {
        this.fb = fb;
        this.store = store;
        this.cd = cd;
        this.modalRef = modalRef;
        this.timeHelper = timeHelper;
        this.captchaTooltipIcon = {
            type: 'info-circle',
            theme: 'twotone'
        };
        this.groupTypeOption = [
            { label: 'Work', value: TIM_TYPES.GRP_WORK },
            { label: 'Public', value: TIM_TYPES.GRP_PUBLIC },
            { label: 'Meeting', value: TIM_TYPES.GRP_MEETING },
            { label: 'AVChatRoom', value: TIM_TYPES.GRP_AVCHATROOM },
        ];
        this.memberListOfOption = [];
        this.loading = false;
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            groupID: [null, []],
            name: [null, [Validators.required]],
            type: [TIM_TYPES.GRP_WORK, [Validators.required]],
            avatar: [null, []],
            introduction: [],
            notification: [null, []],
            joinOption: [{ value: 'FreeAccess', disabled: true }, []],
            memberList: [[], []]
        });
        this.validateForm.get('type').valueChanges.subscribe((value) => {
            switch (value) {
                case TIM_TYPES.GRP_WORK:
                    this.validateForm.get('joinOption').disable();
                    this.validateForm.get('memberList').enable();
                    break;
                case TIM_TYPES.GRP_PUBLIC:
                    this.validateForm.get('joinOption').enable();
                    this.validateForm.get('memberList').enable();
                    break;
                case TIM_TYPES.GRP_MEETING:
                    this.validateForm.get('joinOption').disable();
                    this.validateForm.get('memberList').enable();
                    break;
                case TIM_TYPES.GRP_AVCHATROOM:
                    this.validateForm.get('joinOption').disable();
                    this.validateForm.get('memberList').disable();
                    break;
                default:
                    break;
            }
        });
        this.nzSelect.nzOnSearch.pipe(debounceTime(600), distinctUntilChanged())
            .subscribe((res) => {
            this.handleSearchUser(res);
        });
    }
    handleSearchUser(userID) {
        if (userID !== '') {
            this.loading = true;
            this.timeHelper.tim.getUserProfile({ userIDList: [userID] }).then(({ data }) => {
                this.memberListOfOption = data.map(item => item.userID);
                this.loading = false;
                this.cd.markForCheck();
            }).catch((error) => {
                this.store.dispatch(showAction({
                    msgType: MESSAGE_STATUS.error,
                    message: error.message
                }));
            });
        }
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.timeHelper.tim.createGroup(this.getOptions()).then((imResponse) => {
            this.store.dispatch(showAction({
                msgType: MESSAGE_STATUS.success,
                message: `群组：【${imResponse.data.group.name}】创建成功`
            }));
            this.modalRef.destroy();
        }).catch(error => {
            this.store.dispatch(showAction({
                msgType: MESSAGE_STATUS.error,
                message: error.message
            }));
        });
    }
    getOptions() {
        let options = Object.assign(Object.assign({}, this.validateForm.value), { memberList: this.validateForm.value.memberList.map(userID => ({ userID })) });
        if ([TIM_TYPES.GRP_WORK, TIM_TYPES.GRP_AVCHATROOM].includes(this.validateForm.value.type)) {
            delete options.joinOption;
        }
        return options;
    }
}
CreateGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CreateGroupComponent, deps: [{ token: i1$1.FormBuilder }, { token: i1.Store }, { token: i0.ChangeDetectorRef }, { token: i2.NzModalRef }, { token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
CreateGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: CreateGroupComponent, selector: "im-create-group", viewQueries: [{ propertyName: "nzSelect", first: true, predicate: ["search"], descendants: true, static: true }], ngImport: i0, template: "<form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"groupID\">\u7FA4ID</nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"groupID\" id=\"groupID\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired>\r\n      <span>\u7FA4\u540D\u79F0</span>\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"\u8BF7\u8F93\u5165\u540D\u79F0!\">\r\n      <input nz-input formControlName=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired>\u7FA4\u7C7B\u578B\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <nz-select formControlName=\"type\">\r\n        <nz-option *ngFor=\"let item of groupTypeOption\" [nzLabel]=\"item.label\"\r\n          [nzValue]=\"item.value\">\r\n        </nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"avatar\">\u7FA4\u5934\u50CF\u5730\u5740</nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <input nz-input id=\"avatar\" formControlName=\"avatar\" placeholder=\"avatar\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u7FA4\u7B80\u4ECB</nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <textarea nz-input formControlName=\"introduction\" placeholder=\"\u7FA4\u7B80\u4ECB\" [maxlength]=\"240\"\r\n        [nzAutosize]=\"{ minRows: 3, maxRows: 5 }\"></textarea>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u7FA4\u516C\u544A\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <textarea nz-input formControlName=\"notification\" placeholder=\"\u7FA4\u516C\u544A\" [maxlength]=\"300\"\r\n        [nzAutosize]=\"{ minRows: 3, maxRows: 5 }\"></textarea>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u52A0\u7FA4\u65B9\u5F0F\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <nz-radio-group formControlName=\"joinOption\">\r\n        <label nz-radio nzValue=\"FreeAccess\">\u81EA\u7531\u52A0\u7FA4</label>\r\n        <label nz-radio nzValue=\"NeedPermission\">\u9700\u8981\u9A8C\u8BC1</label>\r\n        <label nz-radio nzValue=\"DisableApply\">\u7981\u6B62\u52A0\u7FA4</label>\r\n      </nz-radio-group>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u7FA4\u6210\u5458\u5217\u8868\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <nz-select #search nzMode=\"multiple\" [nzLoading]=\"loading\" nzPlaceHolder=\"\u8BF7\u8F93\u5165\u7FA4\u6210\u5458 userID\"\r\n        formControlName=\"memberList\">\r\n        <nz-option *ngFor=\"let item of memberListOfOption\" [nzLabel]=\"item\" [nzValue]=\"item\">\r\n        </nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item nz-row nzJustify=\"center\">\r\n    <nz-form-control [nzSpan]=\"12\" nzPush=\"8\">\r\n      <button nz-button nzType=\"primary\">\u7ACB\u5373\u521B\u5EFA</button>\r\n    </nz-form-control>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"default\" type=\"button\" (click)=\"modalRef.destroy()\">\u53D6\u6D88</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n", styles: [""], components: [{ type: i5.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { type: i5.NzFormLabelComponent, selector: "nz-form-label", inputs: ["nzFor", "nzRequired", "nzNoColon", "nzTooltipTitle", "nzTooltipIcon"], exportAs: ["nzFormLabel"] }, { type: i5.NzFormControlComponent, selector: "nz-form-control", inputs: ["nzSuccessTip", "nzWarningTip", "nzErrorTip", "nzValidatingTip", "nzExtra", "nzAutoTips", "nzDisableAutoTips", "nzHasFeedback", "nzValidateStatus"], exportAs: ["nzFormControl"] }, { type: i6$3.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i6$3.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { type: i6.NzRadioGroupComponent, selector: "nz-radio-group", inputs: ["nzDisabled", "nzButtonStyle", "nzSize", "nzName"], exportAs: ["nzRadioGroup"] }, { type: i6.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { type: i7.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }], directives: [{ type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5.NzFormDirective, selector: "[nz-form]", inputs: ["nzLayout", "nzNoColon", "nzAutoTips", "nzDisableAutoTips", "nzTooltipIcon"], exportAs: ["nzForm"] }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i8.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i8.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i9.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i5$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i9.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { type: i1$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i10.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CreateGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'im-create-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"groupID\">\u7FA4ID</nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"groupID\" id=\"groupID\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired>\r\n      <span>\u7FA4\u540D\u79F0</span>\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"\u8BF7\u8F93\u5165\u540D\u79F0!\">\r\n      <input nz-input formControlName=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired>\u7FA4\u7C7B\u578B\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <nz-select formControlName=\"type\">\r\n        <nz-option *ngFor=\"let item of groupTypeOption\" [nzLabel]=\"item.label\"\r\n          [nzValue]=\"item.value\">\r\n        </nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"avatar\">\u7FA4\u5934\u50CF\u5730\u5740</nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <input nz-input id=\"avatar\" formControlName=\"avatar\" placeholder=\"avatar\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u7FA4\u7B80\u4ECB</nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <textarea nz-input formControlName=\"introduction\" placeholder=\"\u7FA4\u7B80\u4ECB\" [maxlength]=\"240\"\r\n        [nzAutosize]=\"{ minRows: 3, maxRows: 5 }\"></textarea>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u7FA4\u516C\u544A\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <textarea nz-input formControlName=\"notification\" placeholder=\"\u7FA4\u516C\u544A\" [maxlength]=\"300\"\r\n        [nzAutosize]=\"{ minRows: 3, maxRows: 5 }\"></textarea>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u52A0\u7FA4\u65B9\u5F0F\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <nz-radio-group formControlName=\"joinOption\">\r\n        <label nz-radio nzValue=\"FreeAccess\">\u81EA\u7531\u52A0\u7FA4</label>\r\n        <label nz-radio nzValue=\"NeedPermission\">\u9700\u8981\u9A8C\u8BC1</label>\r\n        <label nz-radio nzValue=\"DisableApply\">\u7981\u6B62\u52A0\u7FA4</label>\r\n      </nz-radio-group>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">\u7FA4\u6210\u5458\u5217\u8868\r\n    </nz-form-label>\r\n    <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n      <nz-select #search nzMode=\"multiple\" [nzLoading]=\"loading\" nzPlaceHolder=\"\u8BF7\u8F93\u5165\u7FA4\u6210\u5458 userID\"\r\n        formControlName=\"memberList\">\r\n        <nz-option *ngFor=\"let item of memberListOfOption\" [nzLabel]=\"item\" [nzValue]=\"item\">\r\n        </nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item nz-row nzJustify=\"center\">\r\n    <nz-form-control [nzSpan]=\"12\" nzPush=\"8\">\r\n      <button nz-button nzType=\"primary\">\u7ACB\u5373\u521B\u5EFA</button>\r\n    </nz-form-control>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"default\" type=\"button\" (click)=\"modalRef.destroy()\">\u53D6\u6D88</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }, { type: i1.Store }, { type: i0.ChangeDetectorRef }, { type: i2.NzModalRef }, { type: TimHelperService }]; }, propDecorators: { nzSelect: [{
                type: ViewChild,
                args: ['search', { static: true }]
            }] } });

class GroupItemComponent {
    constructor(timHelperService) {
        this.timHelperService = timHelperService;
    }
    ngOnInit() {
    }
    handleGroupClick() {
        const conversationID = `GROUP${this.group.groupID}`;
        this.timHelperService.checkoutConversation(conversationID);
    }
}
GroupItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupItemComponent, deps: [{ token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
GroupItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupItemComponent, selector: "app-group-item", inputs: { group: "group" }, ngImport: i0, template: "<div (click)=\"handleGroupClick()\" class=\"scroll-container\">\r\n  <div class=\"group-item\">\r\n    <im-avatar [src]=\"group?.avatar\"></im-avatar>\r\n    <div class=\"group-name text-ellipsis\">{{ group?.name }}</div>\r\n  </div>\r\n</div>\r\n", styles: [".scroll-container{overflow-y:scroll;flex:1}.scroll-container .group-item{display:flex;padding:10px 20px;cursor:pointer;position:relative;overflow:hidden;transition:.2s}.scroll-container .group-item:hover{background-color:#404953}.scroll-container .group-item im-avatar::ng-deep .avatar{width:30px;height:30px;border-radius:50%;margin-right:10px;flex-shrink:0}.scroll-container .group-item .group-name{flex:1;color:#f7f7f8;line-height:30px}\n"], components: [{ type: AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-item', template: "<div (click)=\"handleGroupClick()\" class=\"scroll-container\">\r\n  <div class=\"group-item\">\r\n    <im-avatar [src]=\"group?.avatar\"></im-avatar>\r\n    <div class=\"group-name text-ellipsis\">{{ group?.name }}</div>\r\n  </div>\r\n</div>\r\n", styles: [".scroll-container{overflow-y:scroll;flex:1}.scroll-container .group-item{display:flex;padding:10px 20px;cursor:pointer;position:relative;overflow:hidden;transition:.2s}.scroll-container .group-item:hover{background-color:#404953}.scroll-container .group-item im-avatar::ng-deep .avatar{width:30px;height:30px;border-radius:50%;margin-right:10px;flex-shrink:0}.scroll-container .group-item .group-name{flex:1;color:#f7f7f8;line-height:30px}\n"] }]
        }], ctorParameters: function () { return [{ type: TimHelperService }]; }, propDecorators: { group: [{
                type: Input
            }] } });

class GroupListComponent {
    constructor(store, cd, modal, timHelper) {
        this.store = store;
        this.cd = cd;
        this.modal = modal;
        this.timHelper = timHelper;
        this.loading = false;
        this.groupList = [];
        this.groupListOfOption = [];
    }
    ngOnInit() {
        this.subscription = this.store.select(groupListSelector).subscribe(res => {
            this.groupList = res;
            this.cd.markForCheck();
        });
        this.selectGroup.nzOnSearch.pipe(debounceTime(600), distinctUntilChanged())
            .subscribe((res) => {
            this.searchGroupByID(res);
        });
    }
    searchGroupByID(queryString) {
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
                this.loading = false;
            });
        }
    }
    applyJoinGroup(group) {
        this.timHelper.tim
            .joinGroup({ groupID: group.groupID, applyMessage: '' })
            .then((res) => __awaiter(this, void 0, void 0, function* () {
            switch (res.data.status) {
                case TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL:
                    this.store.dispatch(showAction({
                        msgType: MESSAGE_STATUS.info,
                        message: '申请成功，等待群管理员确认！'
                    }));
                    this.group = null;
                    this.groupListOfOption = [];
                    break;
                case TIM.TYPES.JOIN_STATUS_SUCCESS:
                    yield this.timHelper.checkoutConversation(`GROUP${res.data.group.groupID}`);
                    this.store.dispatch(showAction({
                        msgType: MESSAGE_STATUS.success,
                        message: '加群成功'
                    }));
                    this.group = null;
                    this.groupListOfOption = [];
                    break;
                case TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP:
                    this.store.dispatch(showAction({
                        msgType: MESSAGE_STATUS.warning,
                        message: '您已经是群成员了，请勿重复加群哦！'
                    }));
                    this.group = null;
                    this.groupListOfOption = [];
                    break;
                default: break;
            }
            this.cd.markForCheck();
        }))
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
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
GroupListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupListComponent, deps: [{ token: i1.Store }, { token: i0.ChangeDetectorRef }, { token: i2.NzModalService }, { token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
GroupListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupListComponent, selector: "app-group-list", viewQueries: [{ propertyName: "selectGroup", first: true, predicate: ["search"], descendants: true, static: true }], ngImport: i0, template: "<div class=\"list-container\">\r\n  <div class=\"header-bar\">\r\n    <nz-select #search nzShowSearch nzServerSearch nzSize=\"small\" [nzLoading]=\"loading\"\r\n      nzPlaceHolder=\"\u8F93\u5165\u7FA4ID\u641C\u7D22\" [(ngModel)]=\"group\" (ngModelChange)=\"applyJoinGroup($event)\">\r\n      <nz-option *ngFor=\"let item of groupListOfOption\" [nzLabel]=\"item.groupID\" [nzValue]=\"item\">\r\n      </nz-option>\r\n    </nz-select>\r\n    <button title=\"\u521B\u5EFA\u7FA4\u7EC4\" (click)=\"createGroup()\">\r\n      <i class=\"tim-icon-add\"></i>\r\n    </button>\r\n  </div>\r\n  <div class=\"group-container\">\r\n    <app-group-item [group]=\"group\" *ngFor=\"let group of groupList\">\r\n    </app-group-item>\r\n  </div>\r\n</div>\r\n", styles: [".list-container{height:100%;width:100%;display:flex;flex-direction:column}.list-container .group-container{overflow-y:scroll}.list-container .header-bar{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;align-content:center;flex-shrink:0;height:50px;border-bottom:1px solid #303841;padding:10px 10px 10px 20px}.list-container .header-bar nz-select{width:100%}.list-container .header-bar .group-seach-bar{width:100%;margin-right:10px}.list-container .header-bar button{float:right;display:inline-block;cursor:pointer;background:#303841;border:none;color:#76828c;box-sizing:border-box;transition:.3s;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin:0;padding:0;width:30px;height:30px;line-height:34px;font-size:24px;text-align:center;white-space:nowrap;border-radius:50%;outline:0;flex-shrink:0}.list-container .header-bar button:hover{transform:rotate(360deg);color:#5cadff}.list-container .scroll-container{overflow-y:scroll;flex:1}\n"], components: [{ type: i6$3.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i6$3.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { type: GroupItemComponent, selector: "app-group-item", inputs: ["group"] }], directives: [{ type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-list', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"list-container\">\r\n  <div class=\"header-bar\">\r\n    <nz-select #search nzShowSearch nzServerSearch nzSize=\"small\" [nzLoading]=\"loading\"\r\n      nzPlaceHolder=\"\u8F93\u5165\u7FA4ID\u641C\u7D22\" [(ngModel)]=\"group\" (ngModelChange)=\"applyJoinGroup($event)\">\r\n      <nz-option *ngFor=\"let item of groupListOfOption\" [nzLabel]=\"item.groupID\" [nzValue]=\"item\">\r\n      </nz-option>\r\n    </nz-select>\r\n    <button title=\"\u521B\u5EFA\u7FA4\u7EC4\" (click)=\"createGroup()\">\r\n      <i class=\"tim-icon-add\"></i>\r\n    </button>\r\n  </div>\r\n  <div class=\"group-container\">\r\n    <app-group-item [group]=\"group\" *ngFor=\"let group of groupList\">\r\n    </app-group-item>\r\n  </div>\r\n</div>\r\n", styles: [".list-container{height:100%;width:100%;display:flex;flex-direction:column}.list-container .group-container{overflow-y:scroll}.list-container .header-bar{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;align-content:center;flex-shrink:0;height:50px;border-bottom:1px solid #303841;padding:10px 10px 10px 20px}.list-container .header-bar nz-select{width:100%}.list-container .header-bar .group-seach-bar{width:100%;margin-right:10px}.list-container .header-bar button{float:right;display:inline-block;cursor:pointer;background:#303841;border:none;color:#76828c;box-sizing:border-box;transition:.3s;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin:0;padding:0;width:30px;height:30px;line-height:34px;font-size:24px;text-align:center;white-space:nowrap;border-radius:50%;outline:0;flex-shrink:0}.list-container .header-bar button:hover{transform:rotate(360deg);color:#5cadff}.list-container .scroll-container{overflow-y:scroll;flex:1}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: i0.ChangeDetectorRef }, { type: i2.NzModalService }, { type: TimHelperService }]; }, propDecorators: { selectGroup: [{
                type: ViewChild,
                args: ['search', { static: true }]
            }] } });

class SideBarComponent {
    constructor(store, timHelperService) {
        this.store = store;
        this.timHelperService = timHelperService;
        this.activeName = {
            CONVERSATION_LIST: 'conversation-list',
            GROUP_LIST: 'group-list',
            FRIEND_LIST: 'friend-list',
            BLACK_LIST: 'black-list',
        };
        this.totalUnreadCount = 0;
        this.active = this.activeName.CONVERSATION_LIST;
        this.showConversationList = false;
    }
    ngOnInit() {
        // 获取当前会话
        this.store.select(conversationSelector).subscribe(res => {
            this.computeCount(res);
        });
    }
    handleClick(event) {
        switch (event.target.id) {
            case this.activeName.CONVERSATION_LIST:
                this.checkoutActive(this.activeName.CONVERSATION_LIST);
                break;
            case this.activeName.GROUP_LIST:
                this.checkoutActive(this.activeName.GROUP_LIST);
                break;
            case this.activeName.FRIEND_LIST:
                this.checkoutActive(this.activeName.FRIEND_LIST);
                break;
            case this.activeName.BLACK_LIST:
                this.checkoutActive(this.activeName.BLACK_LIST);
                break;
        }
    }
    checkoutActive(name) {
        this.active = name;
    }
    logout() {
        this.timHelperService.logout();
    }
    getGroupList() {
        this.timHelperService.tim
            .getGroupList()
            .then(({ data: groupList }) => {
            this.store.dispatch(updateGroupListAction({ groupList }));
        })
            .catch((error) => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
        });
    }
    computeCount(state) {
        const result = state.conversationList.reduce((count, conversation) => {
            // 当前会话不计算总未读
            if (!this.hidden() && state.currentConversation.conversationID === conversation.conversationID) {
                return this.totalUnreadCount = count;
            }
            return this.totalUnreadCount = count + conversation.unreadCount;
        }, 0);
        titleNotify(result);
        this.timHelperService.totalUnRead.next(result);
        return this.totalUnreadCount = result;
    }
    hidden() {
        if (typeof document.hasFocus !== 'function') {
            return document.hidden;
        }
        return !document.hasFocus();
    }
}
SideBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: SideBarComponent, deps: [{ token: i1.Store }, { token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
SideBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: SideBarComponent, selector: "app-side-bar", ngImport: i0, template: "<div class=\"side-bar-wrapper\">\r\n  <div class=\"bar-left\">\r\n    <app-my-profile></app-my-profile>\r\n    <div class=\"tab-items\" (click)=\"handleClick($event)\">\r\n      <div id=\"conversation-list\" class=\"iconfont icon-conversation\" title=\"\u4F1A\u8BDD\u5217\u8868\"\r\n        [ngClass]=\"{'active': active ===activeName.CONVERSATION_LIST }\">\r\n        <sup class=\"unread\" *ngIf=\"totalUnreadCount !== 0\">\r\n          <span *ngIf=\"totalUnreadCount > 99;else count\">99+</span>\r\n          <ng-template #count>\r\n            {{totalUnreadCount}}\r\n          </ng-template>\r\n        </sup>\r\n      </div>\r\n      <div id=\"group-list\" class=\"iconfont icon-group\" title=\"\u7FA4\u7EC4\u5217\u8868\"\r\n        [ngClass]=\"{'active': active ===activeName.GROUP_LIST}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"bottom\">\r\n      <div class=\"iconfont icon-tuichu\" title=\"\u9000\u51FA\" (click)=\"logout()\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bar-right\">\r\n    <app-conversation-list *ngIf=\"active ===activeName.CONVERSATION_LIST\"></app-conversation-list>\r\n    <app-group-list *ngIf=\"active ===activeName.GROUP_LIST\"></app-group-list>\r\n  </div>\r\n</div>\r\n", styles: [".side-bar-wrapper{height:100%;color:#000;display:flex;overflow:hidden}.side-bar-wrapper .bar-right{width:14rem;min-width:0;height:80vh;position:relative;background-color:#363e47}.side-bar-wrapper .bar-left{display:flex;flex-shrink:0;flex-direction:column;align-items:center;width:4rem;height:80vh;background-color:#303841}.side-bar-wrapper .bar-left .tab-items{display:flex;flex-direction:column;flex-grow:1}.side-bar-wrapper .bar-left .tab-items .iconfont{position:relative;margin:0;height:70px;line-height:70px;text-align:center;font-size:30px;cursor:pointer;color:#a5b5c1;-webkit-user-select:none;user-select:none;-moz-user-select:none}.side-bar-wrapper .bar-left .tab-items .active{color:#fff}.side-bar-wrapper .bar-left .tab-items .unread{position:absolute;top:10px;right:10px;z-index:999;display:inline-block;height:18px;padding:0 6px;font-size:12px;color:#fff;line-height:18px;text-align:center;white-space:nowrap;border-radius:10px;background-color:#f35f5f}.side-bar-wrapper .bar-left .bottom{height:70px}.side-bar-wrapper .bar-left .bottom>span{display:block}.side-bar-wrapper .bar-left .bottom .btn-more{width:100%;height:70px;line-height:70px;font-size:30px;color:#a5b5c1;text-align:center;cursor:pointer}.side-bar-wrapper .bar-left .bottom .iconfont{height:70px;line-height:70px;text-align:center;font-size:30px;cursor:pointer;color:#a5b5c1;-webkit-user-select:none;user-select:none;-moz-user-select:none}.side-bar-wrapper .bar-left .bottom .iconfont:hover,.side-bar-wrapper .bar-left .btn-more:hover{color:#fff}\n"], components: [{ type: MyProfileComponent, selector: "app-my-profile" }, { type: ConversationListComponent, selector: "app-conversation-list" }, { type: GroupListComponent, selector: "app-group-list" }], directives: [{ type: i5$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: SideBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-side-bar', template: "<div class=\"side-bar-wrapper\">\r\n  <div class=\"bar-left\">\r\n    <app-my-profile></app-my-profile>\r\n    <div class=\"tab-items\" (click)=\"handleClick($event)\">\r\n      <div id=\"conversation-list\" class=\"iconfont icon-conversation\" title=\"\u4F1A\u8BDD\u5217\u8868\"\r\n        [ngClass]=\"{'active': active ===activeName.CONVERSATION_LIST }\">\r\n        <sup class=\"unread\" *ngIf=\"totalUnreadCount !== 0\">\r\n          <span *ngIf=\"totalUnreadCount > 99;else count\">99+</span>\r\n          <ng-template #count>\r\n            {{totalUnreadCount}}\r\n          </ng-template>\r\n        </sup>\r\n      </div>\r\n      <div id=\"group-list\" class=\"iconfont icon-group\" title=\"\u7FA4\u7EC4\u5217\u8868\"\r\n        [ngClass]=\"{'active': active ===activeName.GROUP_LIST}\">\r\n      </div>\r\n    </div>\r\n    <div class=\"bottom\">\r\n      <div class=\"iconfont icon-tuichu\" title=\"\u9000\u51FA\" (click)=\"logout()\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bar-right\">\r\n    <app-conversation-list *ngIf=\"active ===activeName.CONVERSATION_LIST\"></app-conversation-list>\r\n    <app-group-list *ngIf=\"active ===activeName.GROUP_LIST\"></app-group-list>\r\n  </div>\r\n</div>\r\n", styles: [".side-bar-wrapper{height:100%;color:#000;display:flex;overflow:hidden}.side-bar-wrapper .bar-right{width:14rem;min-width:0;height:80vh;position:relative;background-color:#363e47}.side-bar-wrapper .bar-left{display:flex;flex-shrink:0;flex-direction:column;align-items:center;width:4rem;height:80vh;background-color:#303841}.side-bar-wrapper .bar-left .tab-items{display:flex;flex-direction:column;flex-grow:1}.side-bar-wrapper .bar-left .tab-items .iconfont{position:relative;margin:0;height:70px;line-height:70px;text-align:center;font-size:30px;cursor:pointer;color:#a5b5c1;-webkit-user-select:none;user-select:none;-moz-user-select:none}.side-bar-wrapper .bar-left .tab-items .active{color:#fff}.side-bar-wrapper .bar-left .tab-items .unread{position:absolute;top:10px;right:10px;z-index:999;display:inline-block;height:18px;padding:0 6px;font-size:12px;color:#fff;line-height:18px;text-align:center;white-space:nowrap;border-radius:10px;background-color:#f35f5f}.side-bar-wrapper .bar-left .bottom{height:70px}.side-bar-wrapper .bar-left .bottom>span{display:block}.side-bar-wrapper .bar-left .bottom .btn-more{width:100%;height:70px;line-height:70px;font-size:30px;color:#a5b5c1;text-align:center;cursor:pointer}.side-bar-wrapper .bar-left .bottom .iconfont{height:70px;line-height:70px;text-align:center;font-size:30px;cursor:pointer;color:#a5b5c1;-webkit-user-select:none;user-select:none;-moz-user-select:none}.side-bar-wrapper .bar-left .bottom .iconfont:hover,.side-bar-wrapper .bar-left .btn-more:hover{color:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: TimHelperService }]; } });

class TitleComponent {
    constructor(store, config) {
        this.store = store;
        this.config = config;
        this.detailBtnClick = new EventEmitter();
        this.minimizeClick = new EventEmitter();
    }
    ngOnInit() {
        this.subscription = this.store.select(currentConversationSelector).subscribe((res) => {
            this.currentConversation = res;
        });
    }
    get detailIsHidden() {
        var _a;
        const none = JSON.stringify(this.currentConversation) === '{}';
        return none || (!none && ((_a = this.currentConversation) === null || _a === void 0 ? void 0 : _a.conversationID.includes('SYSTEM')));
    }
    get name() {
        var _a;
        switch ((_a = this.currentConversation) === null || _a === void 0 ? void 0 : _a.type) {
            case CONVERSATION_TYPE.client:
                return this.currentConversation.userProfile.nick || this.currentConversation.userProfile.userID;
            case CONVERSATION_TYPE.group:
                return this.currentConversation.groupProfile.name;
            case CONVERSATION_TYPE.system:
                return '系统通知';
            default:
                return null;
        }
    }
    handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.detailBtnClick.emit();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TitleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TitleComponent, deps: [{ token: i1.Store }, { token: NG_Tim_CONFIG }], target: i0.ɵɵFactoryTarget.Component });
TitleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: TitleComponent, selector: "lib-title", outputs: { detailBtnClick: "detailBtnClick", minimizeClick: "minimizeClick" }, ngImport: i0, template: "<div nz-row class=\"title\">\r\n  <div nz-col nzSpan=\"12\">\r\n    <span class=\"title-name\">\r\n      {{name}}\r\n    </span>\r\n  </div>\r\n  <div nz-col nzSpan=\"12\" class=\"icon-content\">\r\n    <div class=\"minimize\">\r\n      <i [hidden]=\"!config.minimized\" nz-icon nzType=\"minus\" nzTheme=\"outline\"\r\n        (click)=\"minimizeClick.emit()\"></i>\r\n    </div>\r\n    <div>\r\n      <i [hidden]=\"detailIsHidden\" nz-icon nzType=\"small-dash\" nzTheme=\"outline\" title=\"\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\"\r\n        (click)=\"handleClick($event)\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".title{background-color:#f5f5f5}.title-name{padding:0 20px;color:#1c2438;font-size:18px;font-weight:700;line-height:50px;text-shadow:#76828c 0 0 .1em}.icon-content{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.icon-content .minimize{flex:1}i{padding:6px;cursor:pointer}i:hover{background-color:#e5e5e5}\n"], directives: [{ type: i8.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i8.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-title', template: "<div nz-row class=\"title\">\r\n  <div nz-col nzSpan=\"12\">\r\n    <span class=\"title-name\">\r\n      {{name}}\r\n    </span>\r\n  </div>\r\n  <div nz-col nzSpan=\"12\" class=\"icon-content\">\r\n    <div class=\"minimize\">\r\n      <i [hidden]=\"!config.minimized\" nz-icon nzType=\"minus\" nzTheme=\"outline\"\r\n        (click)=\"minimizeClick.emit()\"></i>\r\n    </div>\r\n    <div>\r\n      <i [hidden]=\"detailIsHidden\" nz-icon nzType=\"small-dash\" nzTheme=\"outline\" title=\"\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\"\r\n        (click)=\"handleClick($event)\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".title{background-color:#f5f5f5}.title-name{padding:0 20px;color:#1c2438;font-size:18px;font-weight:700;line-height:50px;text-shadow:#76828c 0 0 .1em}.icon-content{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.icon-content .minimize{flex:1}i{padding:6px;cursor:pointer}i:hover{background-color:#e5e5e5}\n"] }]
        }], ctorParameters: function () {
        return [{ type: i1.Store }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [NG_Tim_CONFIG]
                    }] }];
    }, propDecorators: { detailBtnClick: [{
                type: Output
            }], minimizeClick: [{
                type: Output
            }] } });

class MessageStatusIconComponent {
    constructor(timHelperService) {
        this.timHelperService = timHelperService;
    }
    ngOnInit() {
    }
    get messageIconClass() {
        switch (this.message.status) {
            case 'unSend':
                return 'el-icon-loading';
            case 'fail':
                return 'message-send-fail';
            default:
                return '';
        }
    }
    handleIconClick() {
        if (this.messageIconClass === 'message-send-fail') {
            this.timHelperService.tim.resendMessage(this.message).catch(imError => {
                console.error(imError.message);
            });
        }
    }
}
MessageStatusIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageStatusIconComponent, deps: [{ token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
MessageStatusIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageStatusIconComponent, selector: "app-message-status-icon", inputs: { message: "message" }, ngImport: i0, template: "<div style=\"width:16px;height:16px;\" [class]=\"messageIconClass\" (click)=\"handleIconClick()\">\r\n  {{messageIconClass==='message-send-fail'? '!':''}}</div>\r\n", styles: [".message-send-fail{margin-right:8px;background-color:#f35f5f;color:#fff;border-radius:50%;text-align:center;line-height:16px;cursor:pointer}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageStatusIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-status-icon', template: "<div style=\"width:16px;height:16px;\" [class]=\"messageIconClass\" (click)=\"handleIconClick()\">\r\n  {{messageIconClass==='message-send-fail'? '!':''}}</div>\r\n", styles: [".message-send-fail{margin-right:8px;background-color:#f35f5f;color:#fff;border-radius:50%;text-align:center;line-height:16px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: TimHelperService }]; }, propDecorators: { message: [{
                type: Input
            }] } });

const emojiUrl = 'https://imgcache.qq.com/open/qcloud/tim/assets/emoji/';
const emojiMap = {
    '[NO]': 'emoji_0@2x.png',
    '[OK]': 'emoji_1@2x.png',
    '[下雨]': 'emoji_2@2x.png',
    '[么么哒]': 'emoji_3@2x.png',
    '[乒乓]': 'emoji_4@2x.png',
    '[便便]': 'emoji_5@2x.png',
    '[信封]': 'emoji_6@2x.png',
    '[偷笑]': 'emoji_7@2x.png',
    '[傲慢]': 'emoji_8@2x.png',
    '[再见]': 'emoji_9@2x.png',
    '[冷汗]': 'emoji_10@2x.png',
    '[凋谢]': 'emoji_11@2x.png',
    '[刀]': 'emoji_12@2x.png',
    '[删除]': 'emoji_13@2x.png',
    '[勾引]': 'emoji_14@2x.png',
    '[发呆]': 'emoji_15@2x.png',
    '[发抖]': 'emoji_16@2x.png',
    '[可怜]': 'emoji_17@2x.png',
    '[可爱]': 'emoji_18@2x.png',
    '[右哼哼]': 'emoji_19@2x.png',
    '[右太极]': 'emoji_20@2x.png',
    '[右车头]': 'emoji_21@2x.png',
    '[吐]': 'emoji_22@2x.png',
    '[吓]': 'emoji_23@2x.png',
    '[咒骂]': 'emoji_24@2x.png',
    '[咖啡]': 'emoji_25@2x.png',
    '[啤酒]': 'emoji_26@2x.png',
    '[嘘]': 'emoji_27@2x.png',
    '[回头]': 'emoji_28@2x.png',
    '[困]': 'emoji_29@2x.png',
    '[坏笑]': 'emoji_30@2x.png',
    '[多云]': 'emoji_31@2x.png',
    '[大兵]': 'emoji_32@2x.png',
    '[大哭]': 'emoji_33@2x.png',
    '[太阳]': 'emoji_34@2x.png',
    '[奋斗]': 'emoji_35@2x.png',
    '[奶瓶]': 'emoji_36@2x.png',
    '[委屈]': 'emoji_37@2x.png',
    '[害羞]': 'emoji_38@2x.png',
    '[尴尬]': 'emoji_39@2x.png',
    '[左哼哼]': 'emoji_40@2x.png',
    '[左太极]': 'emoji_41@2x.png',
    '[左车头]': 'emoji_42@2x.png',
    '[差劲]': 'emoji_43@2x.png',
    '[弱]': 'emoji_44@2x.png',
    '[强]': 'emoji_45@2x.png',
    '[彩带]': 'emoji_46@2x.png',
    '[彩球]': 'emoji_47@2x.png',
    '[得意]': 'emoji_48@2x.png',
    '[微笑]': 'emoji_49@2x.png',
    '[心碎了]': 'emoji_50@2x.png',
    '[快哭了]': 'emoji_51@2x.png',
    '[怄火]': 'emoji_52@2x.png',
    '[怒]': 'emoji_53@2x.png',
    '[惊恐]': 'emoji_54@2x.png',
    '[惊讶]': 'emoji_55@2x.png',
    '[憨笑]': 'emoji_56@2x.png',
    '[手枪]': 'emoji_57@2x.png',
    '[打哈欠]': 'emoji_58@2x.png',
    '[抓狂]': 'emoji_59@2x.png',
    '[折磨]': 'emoji_60@2x.png',
    '[抠鼻]': 'emoji_61@2x.png',
    '[抱抱]': 'emoji_62@2x.png',
    '[抱拳]': 'emoji_63@2x.png',
    '[拳头]': 'emoji_64@2x.png',
    '[挥手]': 'emoji_65@2x.png',
    '[握手]': 'emoji_66@2x.png',
    '[撇嘴]': 'emoji_67@2x.png',
    '[擦汗]': 'emoji_68@2x.png',
    '[敲打]': 'emoji_69@2x.png',
    '[晕]': 'emoji_70@2x.png',
    '[月亮]': 'emoji_71@2x.png',
    '[棒棒糖]': 'emoji_72@2x.png',
    '[汽车]': 'emoji_73@2x.png',
    '[沙发]': 'emoji_74@2x.png',
    '[流汗]': 'emoji_75@2x.png',
    '[流泪]': 'emoji_76@2x.png',
    '[激动]': 'emoji_77@2x.png',
    '[灯泡]': 'emoji_78@2x.png',
    '[炸弹]': 'emoji_79@2x.png',
    '[熊猫]': 'emoji_80@2x.png',
    '[爆筋]': 'emoji_81@2x.png',
    '[爱你]': 'emoji_82@2x.png',
    '[爱心]': 'emoji_83@2x.png',
    '[爱情]': 'emoji_84@2x.png',
    '[猪头]': 'emoji_85@2x.png',
    '[猫咪]': 'emoji_86@2x.png',
    '[献吻]': 'emoji_87@2x.png',
    '[玫瑰]': 'emoji_88@2x.png',
    '[瓢虫]': 'emoji_89@2x.png',
    '[疑问]': 'emoji_90@2x.png',
    '[白眼]': 'emoji_91@2x.png',
    '[皮球]': 'emoji_92@2x.png',
    '[睡觉]': 'emoji_93@2x.png',
    '[磕头]': 'emoji_94@2x.png',
    '[示爱]': 'emoji_95@2x.png',
    '[礼品袋]': 'emoji_96@2x.png',
    '[礼物]': 'emoji_97@2x.png',
    '[篮球]': 'emoji_98@2x.png',
    '[米饭]': 'emoji_99@2x.png',
    '[糗大了]': 'emoji_100@2x.png',
    '[红双喜]': 'emoji_101@2x.png',
    '[红灯笼]': 'emoji_102@2x.png',
    '[纸巾]': 'emoji_103@2x.png',
    '[胜利]': 'emoji_104@2x.png',
    '[色]': 'emoji_105@2x.png',
    '[药]': 'emoji_106@2x.png',
    '[菜刀]': 'emoji_107@2x.png',
    '[蛋糕]': 'emoji_108@2x.png',
    '[蜡烛]': 'emoji_109@2x.png',
    '[街舞]': 'emoji_110@2x.png',
    '[衰]': 'emoji_111@2x.png',
    '[西瓜]': 'emoji_112@2x.png',
    '[调皮]': 'emoji_113@2x.png',
    '[象棋]': 'emoji_114@2x.png',
    '[跳绳]': 'emoji_115@2x.png',
    '[跳跳]': 'emoji_116@2x.png',
    '[车厢]': 'emoji_117@2x.png',
    '[转圈]': 'emoji_118@2x.png',
    '[鄙视]': 'emoji_119@2x.png',
    '[酷]': 'emoji_120@2x.png',
    '[钞票]': 'emoji_121@2x.png',
    '[钻戒]': 'emoji_122@2x.png',
    '[闪电]': 'emoji_123@2x.png',
    '[闭嘴]': 'emoji_124@2x.png',
    '[闹钟]': 'emoji_125@2x.png',
    '[阴险]': 'emoji_126@2x.png',
    '[难过]': 'emoji_127@2x.png',
    '[雨伞]': 'emoji_128@2x.png',
    '[青蛙]': 'emoji_129@2x.png',
    '[面条]': 'emoji_130@2x.png',
    '[鞭炮]': 'emoji_131@2x.png',
    '[风车]': 'emoji_132@2x.png',
    '[飞吻]': 'emoji_133@2x.png',
    '[飞机]': 'emoji_134@2x.png',
    '[饥饿]': 'emoji_135@2x.png',
    '[香蕉]': 'emoji_136@2x.png',
    '[骷髅]': 'emoji_137@2x.png',
    '[麦克风]': 'emoji_138@2x.png',
    '[麻将]': 'emoji_139@2x.png',
    '[鼓掌]': 'emoji_140@2x.png',
    '[龇牙]': 'emoji_141@2x.png'
};
const emojiName = [
    '[龇牙]',
    '[调皮]',
    '[流汗]',
    '[偷笑]',
    '[再见]',
    '[敲打]',
    '[擦汗]',
    '[猪头]',
    '[玫瑰]',
    '[流泪]',
    '[大哭]',
    '[嘘]',
    '[酷]',
    '[抓狂]',
    '[委屈]',
    '[便便]',
    '[炸弹]',
    '[菜刀]',
    '[可爱]',
    '[色]',
    '[害羞]',
    '[得意]',
    '[吐]',
    '[微笑]',
    '[怒]',
    '[尴尬]',
    '[惊恐]',
    '[冷汗]',
    '[爱心]',
    '[示爱]',
    '[白眼]',
    '[傲慢]',
    '[难过]',
    '[惊讶]',
    '[疑问]',
    '[困]',
    '[么么哒]',
    '[憨笑]',
    '[爱情]',
    '[衰]',
    '[撇嘴]',
    '[阴险]',
    '[奋斗]',
    '[发呆]',
    '[右哼哼]',
    '[抱抱]',
    '[坏笑]',
    '[飞吻]',
    '[鄙视]',
    '[晕]',
    '[大兵]',
    '[可怜]',
    '[强]',
    '[弱]',
    '[握手]',
    '[胜利]',
    '[抱拳]',
    '[凋谢]',
    '[米饭]',
    '[蛋糕]',
    '[西瓜]',
    '[啤酒]',
    '[瓢虫]',
    '[勾引]',
    '[OK]',
    '[爱你]',
    '[咖啡]',
    '[月亮]',
    '[刀]',
    '[发抖]',
    '[差劲]',
    '[拳头]',
    '[心碎了]',
    '[太阳]',
    '[礼物]',
    '[皮球]',
    '[骷髅]',
    '[挥手]',
    '[闪电]',
    '[饥饿]',
    '[咒骂]',
    '[折磨]',
    '[抠鼻]',
    '[鼓掌]',
    '[糗大了]',
    '[左哼哼]',
    '[打哈欠]',
    '[快哭了]',
    '[吓]',
    '[篮球]',
    '[乒乓]',
    '[NO]',
    '[跳跳]',
    '[怄火]',
    '[转圈]',
    '[磕头]',
    '[回头]',
    '[跳绳]',
    '[激动]',
    '[街舞]',
    '[献吻]',
    '[左太极]',
    '[右太极]',
    '[闭嘴]',
    '[猫咪]',
    '[红双喜]',
    '[鞭炮]',
    '[红灯笼]',
    '[麻将]',
    '[麦克风]',
    '[礼品袋]',
    '[信封]',
    '[象棋]',
    '[彩带]',
    '[蜡烛]',
    '[爆筋]',
    '[棒棒糖]',
    '[奶瓶]',
    '[面条]',
    '[香蕉]',
    '[飞机]',
    '[左车头]',
    '[车厢]',
    '[右车头]',
    '[多云]',
    '[下雨]',
    '[钞票]',
    '[熊猫]',
    '[灯泡]',
    '[风车]',
    '[闹钟]',
    '[雨伞]',
    '[彩球]',
    '[钻戒]',
    '[沙发]',
    '[纸巾]',
    '[手枪]',
    '[青蛙]'
];

function decodeText(payload) {
    let renderDom = [];
    let temp = payload.text;
    let left = -1;
    let right = -1;
    while (temp !== '') {
        left = temp.indexOf('[');
        right = temp.indexOf(']');
        switch (left) {
            case 0:
                if (right === -1) {
                    renderDom.push({
                        name: 'text',
                        text: temp
                    });
                    temp = '';
                }
                else {
                    let _emoji = temp.slice(0, right + 1);
                    if (emojiMap[_emoji]) {
                        renderDom.push({
                            name: 'img',
                            src: emojiUrl + emojiMap[_emoji]
                        });
                        temp = temp.substring(right + 1);
                    }
                    else {
                        renderDom.push({
                            name: 'text',
                            text: '['
                        });
                        temp = temp.slice(1);
                    }
                }
                break;
            case -1:
                renderDom.push({
                    name: 'text',
                    text: temp
                });
                temp = '';
                break;
            default:
                renderDom.push({
                    name: 'text',
                    text: temp.slice(0, left)
                });
                temp = temp.substring(left);
                break;
        }
    }
    return renderDom;
}

class ReEditMessageService {
    constructor() {
        this.reEditMessage = new EventEmitter();
    }
}
ReEditMessageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ReEditMessageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ReEditMessageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ReEditMessageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ReEditMessageService, decorators: [{
            type: Injectable
        }] });

class MessageBubbleComponent {
    constructor(nzContextMenuService, timHelper, store, reEditMessage) {
        this.nzContextMenuService = nzContextMenuService;
        this.timHelper = timHelper;
        this.store = store;
        this.reEditMessage = reEditMessage;
        this.isTimeout = false;
    }
    ngOnInit() {
        this.isTimeoutHandler();
    }
    get bubbleStyle() {
        let classString = '';
        if (this.isMine) {
            classString += 'message-send';
        }
        else {
            classString += 'message-received';
        }
        if (this.isNew) {
            classString += 'new';
        }
        return classString;
    }
    get messageReadByPeer() {
        if (this.message.conversationType === TIM$1.TYPES.CONV_C2C && this.message.isPeerRead) {
            return '已读';
        }
        if (this.message.conversationType === TIM$1.TYPES.CONV_C2C && !this.message.isPeerRead) {
            return '未读';
        }
        return '';
    }
    get text() {
        if (this.message.conversationType === TIM$1.TYPES.CONV_C2C && !this.isMine) {
            return '对方撤回了一条消息';
        }
        if (this.message.conversationType === TIM$1.TYPES.CONV_GROUP && !this.isMine) {
            return `${this.message.from}撤回了一条消息`;
        }
        return '你撤回了一条消息';
    }
    get isEdit() {
        if (!this.isMine) {
            return false;
        }
        if (this.message.type !== TIM$1.TYPES.MSG_TEXT) {
            return false;
        }
        if (this.isTimeout) {
            return false;
        }
        return true;
    }
    contextMenu($event, menu) {
        this.nzContextMenuService.create($event, menu);
    }
    revokeMessage() {
        this.timHelper.tim.revokeMessage(this.message).then(() => {
            this.isTimeoutHandler();
        }).catch((err) => {
            this.store.dispatch(showAction({
                message: err,
                msgType: MESSAGE_STATUS.warning
            }));
        });
    }
    reEdit() {
        this.reEditMessage.reEditMessage.emit(this.message.payload.text);
    }
    isTimeoutHandler() {
        // this.subscription = timer(0, 1000).subscribe(() => {
        //   const time = (new Date().getTime() / 1000) + '';
        //   if (parseInt((time)) - this.message.time > 2 * 60) {
        //     this.isTimeout = true;
        //     this.subscription.unsubscribe();
        //   } else {
        //     this.isTimeoutHandler();
        //   }
        // });
        const now = new Date();
        const time = (now.getTime() / 1000).toString();
        if (parseInt(time, 10) - this.message.time > 2 * 60) {
            this.isTimeout = true;
            return;
        }
        setTimeout(this.isTimeoutHandler, 1000);
    }
}
MessageBubbleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageBubbleComponent, deps: [{ token: i1$3.NzContextMenuService }, { token: TimHelperService }, { token: i1.Store }, { token: ReEditMessageService }], target: i0.ɵɵFactoryTarget.Component });
MessageBubbleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageBubbleComponent, selector: "app-message-bubble", inputs: { message: "message", isMine: "isMine", isNew: "isNew" }, ngImport: i0, template: "<div class=\"chat-bubble\">\r\n  <div *ngIf=\"!message.isRevoked\" (contextmenu)=\"contextMenu($event, menu)\">\r\n    <div style=\"display: flex\">\r\n      <div *ngIf=\"isMine\" class=\"message-status\">\r\n        <span>{{messageReadByPeer}}</span>\r\n      </div>\r\n      <div class=\"message-content\" [class]=\"bubbleStyle\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n      <ul nz-menu>\r\n        <li nz-menu-item *ngIf=\"isMine&&!isTimeout\" (click)=\"revokeMessage()\">\u64A4\u56DE</li>\r\n        <!-- <li nz-menu-item [hidden]=\"message.status ==='fail'\">\u8F6C\u53D1</li>\r\n        <li nz-menu-item [hidden]=\"message.status ==='fail'\">\u591A\u9009</li> -->\r\n      </ul>\r\n    </nz-dropdown-menu>\r\n  </div>\r\n  <div class=\"group-tip-element-wrapper\" *ngIf=\"message.isRevoked\">\r\n    {{text}}\r\n    <a *ngIf=\"isEdit\" (click)=\"reEdit()\">\u91CD\u65B0\u7F16\u8F91</a>\r\n  </div>\r\n</div>\r\n", styles: [".chat-bubble{position:relative}.chat-bubble .message-status{display:flex;min-width:25px;margin-right:10px;justify-content:center;align-items:center;font-size:12px;color:#6e7981}.chat-bubble .message-content{outline:none;font-size:14px;position:relative;max-width:350px;word-wrap:break-word;word-break:break-all;padding:10px;box-shadow:0 5px 10px #0000001a}.chat-bubble .message-content span{white-space:pre-wrap;margin:0;text-shadow:#495060 0 0 .05em}.chat-bubble .message-content img{vertical-align:bottom}.chat-bubble .message-content:before{position:absolute;top:-6px;width:12px;height:40px;content:\"\\e900\";font-family:tim!important;font-size:24px}.chat-bubble .message-received{background-color:#fff;margin-left:15px;border-radius:0 4px 4px}.chat-bubble .message-received:before{left:-10px;transform:scaleX(-1);color:#fff}.chat-bubble .message-received.new{transform:scale(0);transform-origin:top left;animation:bounce .5s linear both}.chat-bubble .message-send{background-color:#9eea6a;margin-right:15px;border-radius:4px 0 4px 4px;color:#000}.chat-bubble .message-send:before{right:-10px;color:#9eea6a}.chat-bubble .message-send.new{transform:scale(0);transform-origin:top right;animation:bounce .5s linear both}.chat-bubble .el-dropdown{vertical-align:top;display:flex}.chat-bubble .el-dropdown+.el-dropdown{margin-left:15px}.chat-bubble .el-icon-arrow-down{font-size:12px}.group-tip-element-wrapper{background:#fff;padding:4px 15px;border-radius:3px;color:#a5b5c1;font-size:12px}.edit-button{padding-top:4px;height:20px;font-size:10px}@keyframes bounce{0%{transform:scale(0)}4.7%{transform:scale(.45)}9.41%{transform:scale(.883)}14.11%{transform:scale(1.141)}18.72%{transform:scale(1.212)}24.32%{transform:scale(1.151)}29.93%{transform:scale(1.048)}35.54%{transform:scale(.979)}41.04%{transform:scale(.961)}52.15%{transform:scale(.991)}63.26%{transform:scale(1.007)}85.49%{transform:scale(.999)}to{transform:scale(1)}}\n"], components: [{ type: i1$3.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }], directives: [{ type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6$4.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6$4.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageBubbleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-bubble', template: "<div class=\"chat-bubble\">\r\n  <div *ngIf=\"!message.isRevoked\" (contextmenu)=\"contextMenu($event, menu)\">\r\n    <div style=\"display: flex\">\r\n      <div *ngIf=\"isMine\" class=\"message-status\">\r\n        <span>{{messageReadByPeer}}</span>\r\n      </div>\r\n      <div class=\"message-content\" [class]=\"bubbleStyle\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n      <ul nz-menu>\r\n        <li nz-menu-item *ngIf=\"isMine&&!isTimeout\" (click)=\"revokeMessage()\">\u64A4\u56DE</li>\r\n        <!-- <li nz-menu-item [hidden]=\"message.status ==='fail'\">\u8F6C\u53D1</li>\r\n        <li nz-menu-item [hidden]=\"message.status ==='fail'\">\u591A\u9009</li> -->\r\n      </ul>\r\n    </nz-dropdown-menu>\r\n  </div>\r\n  <div class=\"group-tip-element-wrapper\" *ngIf=\"message.isRevoked\">\r\n    {{text}}\r\n    <a *ngIf=\"isEdit\" (click)=\"reEdit()\">\u91CD\u65B0\u7F16\u8F91</a>\r\n  </div>\r\n</div>\r\n", styles: [".chat-bubble{position:relative}.chat-bubble .message-status{display:flex;min-width:25px;margin-right:10px;justify-content:center;align-items:center;font-size:12px;color:#6e7981}.chat-bubble .message-content{outline:none;font-size:14px;position:relative;max-width:350px;word-wrap:break-word;word-break:break-all;padding:10px;box-shadow:0 5px 10px #0000001a}.chat-bubble .message-content span{white-space:pre-wrap;margin:0;text-shadow:#495060 0 0 .05em}.chat-bubble .message-content img{vertical-align:bottom}.chat-bubble .message-content:before{position:absolute;top:-6px;width:12px;height:40px;content:\"\\e900\";font-family:tim!important;font-size:24px}.chat-bubble .message-received{background-color:#fff;margin-left:15px;border-radius:0 4px 4px}.chat-bubble .message-received:before{left:-10px;transform:scaleX(-1);color:#fff}.chat-bubble .message-received.new{transform:scale(0);transform-origin:top left;animation:bounce .5s linear both}.chat-bubble .message-send{background-color:#9eea6a;margin-right:15px;border-radius:4px 0 4px 4px;color:#000}.chat-bubble .message-send:before{right:-10px;color:#9eea6a}.chat-bubble .message-send.new{transform:scale(0);transform-origin:top right;animation:bounce .5s linear both}.chat-bubble .el-dropdown{vertical-align:top;display:flex}.chat-bubble .el-dropdown+.el-dropdown{margin-left:15px}.chat-bubble .el-icon-arrow-down{font-size:12px}.group-tip-element-wrapper{background:#fff;padding:4px 15px;border-radius:3px;color:#a5b5c1;font-size:12px}.edit-button{padding-top:4px;height:20px;font-size:10px}@keyframes bounce{0%{transform:scale(0)}4.7%{transform:scale(.45)}9.41%{transform:scale(.883)}14.11%{transform:scale(1.141)}18.72%{transform:scale(1.212)}24.32%{transform:scale(1.151)}29.93%{transform:scale(1.048)}35.54%{transform:scale(.979)}41.04%{transform:scale(.961)}52.15%{transform:scale(.991)}63.26%{transform:scale(1.007)}85.49%{transform:scale(.999)}to{transform:scale(1)}}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$3.NzContextMenuService }, { type: TimHelperService }, { type: i1.Store }, { type: ReEditMessageService }]; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], isNew: [{
                type: Input
            }] } });

class TextElementComponent {
    constructor() { }
    ngOnInit() {
        this.contentList = decodeText(this.payload);
    }
}
TextElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TextElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TextElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: TextElementComponent, selector: "app-text-element", inputs: { message: "message", isMine: "isMine", payload: "payload" }, ngImport: i0, template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <ng-container *ngFor=\"let item of contentList\">\r\n    <span *ngIf=\"item.name === 'text'\">{{ item.text }}</span>\r\n    <img *ngIf=\"item.name === 'img'\" [src]=\"item.src\" width=\"20px\" height=\"20px\" />\r\n  </ng-container>\r\n</app-message-bubble>\r\n", styles: [""], components: [{ type: MessageBubbleComponent, selector: "app-message-bubble", inputs: ["message", "isMine", "isNew"] }], directives: [{ type: i5$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TextElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-text-element', template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <ng-container *ngFor=\"let item of contentList\">\r\n    <span *ngIf=\"item.name === 'text'\">{{ item.text }}</span>\r\n    <img *ngIf=\"item.name === 'img'\" [src]=\"item.src\" width=\"20px\" height=\"20px\" />\r\n  </ng-container>\r\n</app-message-bubble>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], payload: [{
                type: Input
            }] } });

class ImageElementComponent {
    constructor() { }
    ngOnInit() {
        const url = this.payload.imageInfoArray[0].imageUrl;
        if (typeof url !== 'string') {
            this.imageUrl = '';
        }
        this.imageUrl = url.slice(0, 2) === '//' ? `https:${url}` : url;
    }
}
ImageElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ImageElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ImageElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ImageElementComponent, selector: "app-image-element", inputs: { message: "message", isMine: "isMine", payload: "payload", percent: "percent" }, ngImport: i0, template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <img class=\"image-element\" nz-image [nzSrc]=\"imageUrl\">\r\n</app-message-bubble>\r\n", styles: [".image-element{max-width:250px}\n"], components: [{ type: MessageBubbleComponent, selector: "app-message-bubble", inputs: ["message", "isMine", "isNew"] }], directives: [{ type: i2$1.NzImageDirective, selector: "img[nz-image]", inputs: ["nzSrc", "nzSrcset", "nzDisablePreview", "nzFallback", "nzPlaceholder"], exportAs: ["nzImage"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ImageElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-image-element', template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <img class=\"image-element\" nz-image [nzSrc]=\"imageUrl\">\r\n</app-message-bubble>\r\n", styles: [".image-element{max-width:250px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], payload: [{
                type: Input
            }], percent: [{
                type: Input
            }] } });

class FileElementComponent {
    constructor() { }
    ngOnInit() {
        this.fileUrl = this.payload.fileUrl;
        this.fileName = this.payload.fileName;
        this.getSize();
    }
    downloadFile() {
        // 浏览器支持fetch则用blob下载，避免浏览器点击a标签，跳转到新页面预览的行为
        if (window.fetch) {
            fetch(this.fileUrl)
                .then(res => res.blob())
                .then(blob => {
                let a = document.createElement('a');
                let url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = this.fileName;
                a.click();
            });
        }
        else {
            let a = document.createElement('a');
            a.href = this.fileUrl;
            a.target = '_blank';
            a.download = this.fileName;
            a.click();
        }
    }
    getSize() {
        const size = this.payload.fileSize;
        if (size > 1024) {
            if (size / 1024 > 1024) {
                this.fileSize = `${this.toFixed(size / 1024 / 1024)} Mb`;
                return;
            }
            this.fileSize = `${this.toFixed(size / 1024)} Kb`;
            return;
        }
        this.fileSize = `${this.toFixed(size)}B`;
    }
    toFixed(number, precision = 2) {
        return number.toFixed(precision);
    }
}
FileElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: FileElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FileElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: FileElementComponent, selector: "app-file-element", inputs: { message: "message", isMine: "isMine", payload: "payload" }, ngImport: i0, template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <div class=\"file-element-wrapper\" title=\"\u5355\u51FB\u4E0B\u8F7D\" (click)=\"downloadFile()\">\r\n    <div class=\"header\">\r\n      <i nz-icon nzType=\"file-text\" nzTheme=\"outline\">\r\n      </i>\r\n\r\n      <div class=\"file-element\">\r\n        <span class=\"file-name\">{{ fileName }}</span>\r\n        <span class=\"file-size\">{{ fileSize  }}</span>\r\n      </div>\r\n    </div>\r\n    <!-- <nz-progress [nzPercent]=\"message.progress*100\"></nz-progress> -->\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".file-element-wrapper{cursor:pointer}.header{display:flex}i{font-size:40px!important}.file-element{display:flex;flex-direction:column;margin-left:12px}.file-size{font-size:12px;padding-top:5px}\n"], components: [{ type: MessageBubbleComponent, selector: "app-message-bubble", inputs: ["message", "isMine", "isNew"] }], directives: [{ type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: FileElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-element', template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <div class=\"file-element-wrapper\" title=\"\u5355\u51FB\u4E0B\u8F7D\" (click)=\"downloadFile()\">\r\n    <div class=\"header\">\r\n      <i nz-icon nzType=\"file-text\" nzTheme=\"outline\">\r\n      </i>\r\n\r\n      <div class=\"file-element\">\r\n        <span class=\"file-name\">{{ fileName }}</span>\r\n        <span class=\"file-size\">{{ fileSize  }}</span>\r\n      </div>\r\n    </div>\r\n    <!-- <nz-progress [nzPercent]=\"message.progress*100\"></nz-progress> -->\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".file-element-wrapper{cursor:pointer}.header{display:flex}i{font-size:40px!important}.file-element{display:flex;flex-direction:column;margin-left:12px}.file-size{font-size:12px;padding-top:5px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], payload: [{
                type: Input
            }] } });

class MessageFooterComponent {
    constructor() { }
    ngOnInit() {
    }
    get isMine() {
        return this.message.flow === 'out';
    }
    get date() {
        return getFullDate(new Date(this.message.time * 1000));
    }
}
MessageFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MessageFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageFooterComponent, selector: "app-message-footer", inputs: { message: "message" }, ngImport: i0, template: "<div class=\"base\" [class]=\"[ isMine ? 'right' : 'left']\">\r\n  <div class=\"date\">{{ date }}</div>\r\n</div>\r\n", styles: [".right{display:flex;flex-direction:row-reverse;margin-right:15px}.left{display:flex;flex-direction:row;margin-left:15px}.base{color:#a5b5c1;font-size:12px}.name{padding:0 4px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-footer', template: "<div class=\"base\" [class]=\"[ isMine ? 'right' : 'left']\">\r\n  <div class=\"date\">{{ date }}</div>\r\n</div>\r\n", styles: [".right{display:flex;flex-direction:row-reverse;margin-right:15px}.left{display:flex;flex-direction:row;margin-left:15px}.base{color:#a5b5c1;font-size:12px}.name{padding:0 4px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }] } });

class MessageHeaderComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    get isMine() {
        return this.message.flow === 'out';
    }
    get date() {
        return getFullDate(new Date(this.message.time * 1000));
    }
    get from() {
        const isC2C = this.currentConversation.type === TIM$1.TYPES.CONV_C2C;
        // 自己发送的用昵称渲染
        if (this.isMine) {
            return this.currentUserProfile.nick || this.currentUserProfile.userID;
        }
        // 1. C2C 的消息体中还无 nick / avatar 字段，需从 conversation.userProfile 中获取
        if (isC2C) {
            return this.currentConversation.userProfile.nick || this.currentConversation.userProfile.userID;
        }
        else if (this.currentConversation.type === TIM$1.TYPES.CONV_SYSTEM) {
            return this.message.type === TIM$1.TYPES.MSG_GRP_SYS_NOTICE ? '群系统通知' : '系统通知';
        }
        // 2. 群组消息，用消息体中的 nick 渲染。nameCard暂时支持不完善
        return this.message.nick || this.message.from;
    }
}
MessageHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageHeaderComponent, deps: [{ token: i1.Store }], target: i0.ɵɵFactoryTarget.Component });
MessageHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageHeaderComponent, selector: "app-message-header", inputs: { message: "message", currentUserProfile: "currentUserProfile", currentConversation: "currentConversation" }, ngImport: i0, template: "<div class=\"base\" [class]=\"[ isMine ? 'right' : 'left']\">\r\n  <div class=\"name text-ellipsis\">{{ from }}</div>\r\n  <div class=\"date\">{{ date }}</div>\r\n</div>\r\n", styles: [".right{display:flex;flex-direction:row-reverse}.left{display:flex;flex-direction:row}.base{color:#a5b5c1;font-size:12px}.name{padding:0 4px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-header', template: "<div class=\"base\" [class]=\"[ isMine ? 'right' : 'left']\">\r\n  <div class=\"name text-ellipsis\">{{ from }}</div>\r\n  <div class=\"date\">{{ date }}</div>\r\n</div>\r\n", styles: [".right{display:flex;flex-direction:row-reverse}.left{display:flex;flex-direction:row}.base{color:#a5b5c1;font-size:12px}.name{padding:0 4px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }]; }, propDecorators: { message: [{
                type: Input
            }], currentUserProfile: [{
                type: Input
            }], currentConversation: [{
                type: Input
            }] } });

class GroupTipElementComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.text = this.getGroupTipContent(this.message);
    }
    getGroupTipContent(message) {
        const userName = message.nick || message.payload.userIDList.join(',');
        switch (message.payload.operationType) {
            case TIM$1.TYPES.GRP_TIP_MBR_JOIN:
                return `群成员：${userName} 加入群组`;
            case TIM$1.TYPES.GRP_TIP_MBR_QUIT:
                return `群成员：${userName} 退出群组`;
            case TIM$1.TYPES.GRP_TIP_MBR_KICKED_OUT:
                return `群成员：${userName} 被${message.payload.operatorID}踢出群组`;
            case TIM$1.TYPES.GRP_TIP_MBR_SET_ADMIN:
                return `群成员：${userName} 成为管理员`;
            case TIM$1.TYPES.GRP_TIP_MBR_CANCELED_ADMIN:
                return `群成员：${userName} 被撤销管理员`;
            case TIM$1.TYPES.GRP_TIP_GRP_PROFILE_UPDATED:
                return '群资料修改';
            case TIM$1.TYPES.GRP_TIP_MBR_PROFILE_UPDATED:
                for (let member of message.payload.memberList) {
                    if (member.muteTime > 0) {
                        return `群成员：${member.userID}被禁言${member.muteTime}秒`;
                    }
                    else {
                        return `群成员：${member.userID}被取消禁言`;
                    }
                }
                break;
            default:
                return '[群提示消息]';
        }
    }
}
GroupTipElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupTipElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GroupTipElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupTipElementComponent, selector: "app-group-tip-element", inputs: { message: "message", isMine: "isMine", payload: "payload" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"group-tip-element-wrapper\">{{text}}</div>\r\n", styles: [".group-tip-element-wrapper{background:#fff;padding:4px 15px;border-radius:3px;color:#a5b5c1;font-size:12px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupTipElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-tip-element', template: "<div class=\"group-tip-element-wrapper\">{{text}}</div>\r\n", styles: [".group-tip-element-wrapper{background:#fff;padding:4px 15px;border-radius:3px;color:#a5b5c1;font-size:12px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], payload: [{
                type: Input
            }] } });

function formatInt(int) {
    return int < 10 ? `0${int}` : int;
}
function formatDuration(duration) {
    if (duration < 60) {
        return `00:00:${formatInt(duration)}`;
    }
    if (duration < 60 * 60) {
        const min = parseInt((duration / 60).toString());
        const sec = duration - min * 60;
        return `00:${formatInt(min)}:${formatInt(sec)}`;
    }
    const hour = parseInt((duration / (60 * 60)).toString());
    const remainder = duration - hour * (60 * 60);
    const min = parseInt((remainder / 60).toString());
    const sec = remainder - min * 60;
    return `${formatInt(hour)}:${formatInt(min)}:${formatInt(sec)}`;
}

const ACTION = {
    VIDEO_CALL_ACTION_ERROR: -2,
    VIDEO_CALL_ACTION_UNKNOWN: -1,
    VIDEO_CALL_ACTION_DIALING: 0,
    VIDEO_CALL_ACTION_SPONSOR_CANCEL: 1,
    VIDEO_CALL_ACTION_REJECT: 2,
    VIDEO_CALL_ACTION_SPONSOR_TIMEOUT: 3,
    VIDEO_CALL_ACTION_ACCEPTED: 4,
    VIDEO_CALL_ACTION_HANGUP: 5,
    VIDEO_CALL_ACTION_LINE_BUSY: 6 // 电话占线
};
const VERSION = 3;

class CustomElementComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.text = this.translateCustomMessage(this.payload);
    }
    translateCustomMessage(payload) {
        let videoPayload = {
            action: 0,
            duration: 0
        };
        try {
            videoPayload = JSON.parse(payload.data);
        }
        catch (e) {
            videoPayload = {
                action: 0,
                duration: 0
            };
        }
        if (payload.data === 'group_create') {
            return `${payload.extension}`;
        }
        switch (videoPayload.action) {
            case ACTION.VIDEO_CALL_ACTION_DIALING:
                return '[请求通话]';
            case ACTION.VIDEO_CALL_ACTION_SPONSOR_CANCEL:
                return '[取消通话]';
            case ACTION.VIDEO_CALL_ACTION_REJECT:
                return '[拒绝通话]';
            case ACTION.VIDEO_CALL_ACTION_SPONSOR_TIMEOUT:
                return '[无应答]';
            case ACTION.VIDEO_CALL_ACTION_ACCEPTED:
                return '[开始通话]';
            case ACTION.VIDEO_CALL_ACTION_HANGUP:
                return `[结束通话，通话时长：${formatDuration(videoPayload.duration)}]`;
            case ACTION.VIDEO_CALL_ACTION_LINE_BUSY:
                return '[正在通话中]';
            case ACTION.VIDEO_CALL_ACTION_ERROR:
                return '[设备异常]';
            default:
                return '[自定义消息]';
        }
    }
}
CustomElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CustomElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: CustomElementComponent, selector: "app-custom-element", inputs: { message: "message", isMine: "isMine", payload: "payload" }, usesOnChanges: true, ngImport: i0, template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <div class=\"custom-element-wrapper\">\r\n    <div class=\"survey\" *ngIf=\"this.payload.data === 'survey';else other\">\r\n      <div class=\"title\">\u5BF9IM DEMO\u7684\u8BC4\u5206\u548C\u5EFA\u8BAE</div>\r\n      <!-- <el-rate v-model=\"rate\" disabled show-score text-color=\"#ff9900\" score-template=\"{value}\">\r\n      </el-rate> -->\r\n      <div class=\"suggestion\">{{this.payload.extension}}</div>\r\n    </div>\r\n    <ng-template #other>\r\n      <span class=\"text\" title=\"\u60A8\u53EF\u4EE5\u81EA\u884C\u89E3\u6790\u81EA\u5B9A\u4E49\u6D88\u606F\">{{text}}</span>\r\n    </ng-template>\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".text{font-weight:700}.title{font-size:16px;font-weight:600;padding-bottom:10px}.survey{background-color:#fff;color:#000;padding:20px;display:flex;flex-direction:column}.suggestion{padding-top:10px;font-size:14px}\n"], components: [{ type: MessageBubbleComponent, selector: "app-message-bubble", inputs: ["message", "isMine", "isNew"] }], directives: [{ type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CustomElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-custom-element', template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <div class=\"custom-element-wrapper\">\r\n    <div class=\"survey\" *ngIf=\"this.payload.data === 'survey';else other\">\r\n      <div class=\"title\">\u5BF9IM DEMO\u7684\u8BC4\u5206\u548C\u5EFA\u8BAE</div>\r\n      <!-- <el-rate v-model=\"rate\" disabled show-score text-color=\"#ff9900\" score-template=\"{value}\">\r\n      </el-rate> -->\r\n      <div class=\"suggestion\">{{this.payload.extension}}</div>\r\n    </div>\r\n    <ng-template #other>\r\n      <span class=\"text\" title=\"\u60A8\u53EF\u4EE5\u81EA\u884C\u89E3\u6790\u81EA\u5B9A\u4E49\u6D88\u606F\">{{text}}</span>\r\n    </ng-template>\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".text{font-weight:700}.title{font-size:16px;font-weight:600;padding-bottom:10px}.survey{background-color:#fff;color:#000;padding:20px;display:flex;flex-direction:column}.suggestion{padding-top:10px;font-size:14px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], payload: [{
                type: Input
            }] } });

function translateGroupSystemNotice(message) {
    var _a, _b;
    const groupName = ((_a = message.payload) === null || _a === void 0 ? void 0 : _a.groupProfile.name) || ((_b = message.payload) === null || _b === void 0 ? void 0 : _b.groupProfile.groupID);
    switch (message.payload.operationType) {
        case 1:
            return `${message.payload.operatorID} 申请加入群组：${groupName}`;
        case 2:
            return `成功加入群组：${groupName}`;
        case 3:
            return `申请加入群组：${groupName}被拒绝`;
        case 4:
            return `你被管理员${message.payload.operatorID}踢出群组：${groupName}`;
        case 5:
            return `群：${groupName} 已被${message.payload.operatorID}解散`;
        case 6:
            return `${message.payload.operatorID}创建群：${groupName}`;
        case 7:
            return `${message.payload.operatorID}邀请你加群：${groupName}`;
        case 8:
            return `你退出群组：${groupName}`;
        case 9:
            return `你被${message.payload.operatorID}设置为群：${groupName}的管理员`;
        case 10:
            return `你被${message.payload.operatorID}撤销群：${groupName}的管理员身份`;
        case 255:
            return '自定义群系统通知: ' + message.payload.userDefinedField;
    }
}

class ApprovalJoinGroupComponent {
    constructor(modalRef, store, timHelperService) {
        this.modalRef = modalRef;
        this.store = store;
        this.timHelperService = timHelperService;
        this.form = {
            handleAction: 'Agree',
            handleMessage: '',
        };
    }
    ngOnInit() {
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
ApprovalJoinGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ApprovalJoinGroupComponent, deps: [{ token: i2.NzModalRef }, { token: i1.Store }, { token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
ApprovalJoinGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ApprovalJoinGroupComponent, selector: "im-approval-join-group", inputs: { message: "message" }, ngImport: i0, template: "<form nz-form>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\">\u5904\u7406\u7ED3\u679C</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\">\r\n      <nz-radio-group [(ngModel)]=\"form.handleAction\" name=\"handleAction\">\r\n        <label nz-radio nzValue=\"Agree\">\u540C\u610F</label>\r\n        <label nz-radio nzValue=\"Reject\">\u62D2\u7EDD</label>\r\n      </nz-radio-group>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\" 6\">\u9644\u8A00</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\">\r\n      <textarea rows=\"3\" nz-input [(ngModel)]=\"form.handleMessage\" name=\"handleMessage\"></textarea>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item nz-row nzJustify=\"center\">\r\n    <nz-form-control [nzSpan]=\"12\" nzPush=\"8\">\r\n      <button nz-button nzType=\"primary\" type=\"button\"\r\n        (click)=\"handleGroupApplication()\">\u786E\u5B9A</button>\r\n    </nz-form-control>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"default\" type=\"button\" (click)=\"modalRef.destroy()\">\u53D6\u6D88</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n", styles: [""], components: [{ type: i5.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { type: i5.NzFormLabelComponent, selector: "nz-form-label", inputs: ["nzFor", "nzRequired", "nzNoColon", "nzTooltipTitle", "nzTooltipIcon"], exportAs: ["nzFormLabel"] }, { type: i5.NzFormControlComponent, selector: "nz-form-control", inputs: ["nzSuccessTip", "nzWarningTip", "nzErrorTip", "nzValidatingTip", "nzExtra", "nzAutoTips", "nzDisableAutoTips", "nzHasFeedback", "nzValidateStatus"], exportAs: ["nzFormControl"] }, { type: i6.NzRadioGroupComponent, selector: "nz-radio-group", inputs: ["nzDisabled", "nzButtonStyle", "nzSize", "nzName"], exportAs: ["nzRadioGroup"] }, { type: i6.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { type: i7.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }], directives: [{ type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NzFormDirective, selector: "[nz-form]", inputs: ["nzLayout", "nzNoColon", "nzAutoTips", "nzDisableAutoTips", "nzTooltipIcon"], exportAs: ["nzForm"] }, { type: i8.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i8.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i9.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i10.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ApprovalJoinGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'im-approval-join-group', changeDetection: ChangeDetectionStrategy.OnPush, template: "<form nz-form>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\"6\">\u5904\u7406\u7ED3\u679C</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\">\r\n      <nz-radio-group [(ngModel)]=\"form.handleAction\" name=\"handleAction\">\r\n        <label nz-radio nzValue=\"Agree\">\u540C\u610F</label>\r\n        <label nz-radio nzValue=\"Reject\">\u62D2\u7EDD</label>\r\n      </nz-radio-group>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label [nzSpan]=\" 6\">\u9644\u8A00</nz-form-label>\r\n    <nz-form-control [nzSpan]=\"14\">\r\n      <textarea rows=\"3\" nz-input [(ngModel)]=\"form.handleMessage\" name=\"handleMessage\"></textarea>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item nz-row nzJustify=\"center\">\r\n    <nz-form-control [nzSpan]=\"12\" nzPush=\"8\">\r\n      <button nz-button nzType=\"primary\" type=\"button\"\r\n        (click)=\"handleGroupApplication()\">\u786E\u5B9A</button>\r\n    </nz-form-control>\r\n    <nz-form-control [nzSpan]=\"12\">\r\n      <button nz-button nzType=\"default\" type=\"button\" (click)=\"modalRef.destroy()\">\u53D6\u6D88</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i2.NzModalRef }, { type: i1.Store }, { type: TimHelperService }]; }, propDecorators: { message: [{
                type: Input
            }] } });

class GroupSystemNoticeElementComponent {
    constructor(modal) {
        this.modal = modal;
        this.showDialog = false;
    }
    ngOnInit() {
        this.text = translateGroupSystemNotice(this.message);
        if (this.message.type === TIM.TYPES.MSG_GRP_SYS_NOTICE) {
            this.title = '群系统通知';
        }
        else {
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
GroupSystemNoticeElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupSystemNoticeElementComponent, deps: [{ token: i2.NzModalService }], target: i0.ɵɵFactoryTarget.Component });
GroupSystemNoticeElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupSystemNoticeElementComponent, selector: "app-group-system-notice-element", inputs: { message: "message", payload: "payload" }, ngImport: i0, template: "<app-message-bubble [message]=\"message\" [isMine]=\"false\">\r\n  <div class=\"group-system-element-wrapper\">\r\n    {{ text }}\r\n    <button nz-button *ngIf=\"isJoinGroupRequest\" type=\"text\" (click)=\"approval()\">\u5904\u7406</button>\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".card{background:#fff;padding:12px;border-radius:5px;width:300px}.card .card-header{font-size:18px}.card .card-content{font-size:14px}\n"], components: [{ type: MessageBubbleComponent, selector: "app-message-bubble", inputs: ["message", "isMine", "isNew"] }, { type: i7.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }], directives: [{ type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i10.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupSystemNoticeElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-system-notice-element', template: "<app-message-bubble [message]=\"message\" [isMine]=\"false\">\r\n  <div class=\"group-system-element-wrapper\">\r\n    {{ text }}\r\n    <button nz-button *ngIf=\"isJoinGroupRequest\" type=\"text\" (click)=\"approval()\">\u5904\u7406</button>\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".card{background:#fff;padding:12px;border-radius:5px;width:300px}.card .card-header{font-size:18px}.card .card-content{font-size:14px}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.NzModalService }]; }, propDecorators: { message: [{
                type: Input
            }], payload: [{
                type: Input
            }] } });

class MessageItemComponent {
    constructor(store) {
        this.store = store;
        this.TIM = TIM$1;
    }
    ngOnInit() {
        this.subscription = this.store.select(currentUserProfileSelector)
            .subscribe(res => {
            this.currentUserProfile = res;
        });
    }
    // 是否显示头像，群提示消息不显示头像
    get showAvatar() {
        if (this.currentConversation.type === 'C2C' && !this.message.isRevoked) { // C2C且没有撤回的消息
            return true;
        }
        else if (this.currentConversation.type === 'GROUP' && !this.message.isRevoked) { // group且没有撤回的消息
            return this.message.type !== this.TIM.TYPES.MSG_GRP_TIP;
        }
        return false;
    }
    get currentConversationType() {
        if (this.currentConversation) {
            return this.currentConversation.type;
        }
    }
    get avatar() {
        if (this.currentConversation.type === 'C2C') {
            return this.isMine
                ? this.currentUserProfile.avatar
                : this.currentConversation.userProfile.avatar;
        }
        else if (this.currentConversation.type === 'GROUP') {
            return this.isMine
                ? this.currentUserProfile.avatar
                : this.message.avatar;
        }
        else {
            return '';
        }
    }
    get isMine() {
        return this.message.flow === 'out';
    }
    get messagePosition() {
        if (['TIMGroupTipElem', 'TIMGroupSystemNoticeElem'].includes(this.message.type)) {
            return 'position-center';
        }
        if (this.message.isRevoked) { // 撤回消息
            return 'position-center';
        }
        if (this.isMine) {
            return 'position-right';
        }
        return 'position-left';
    }
    get showMessageHeader() {
        if (['TIMGroupTipElem', 'TIMGroupSystemNoticeElem'].includes(this.message.type)) {
            return false;
        }
        if (this.message.isRevoked) { // 撤回消息
            return false;
        }
        return true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
MessageItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageItemComponent, deps: [{ token: i1.Store }], target: i0.ɵɵFactoryTarget.Component });
MessageItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageItemComponent, selector: "app-message-item", inputs: { currentConversation: "currentConversation", message: "message" }, ngImport: i0, template: "<div class=\"message-wrapper\" [class]=\"messagePosition\">\r\n  <div *ngIf=\"currentConversationType === TIM.TYPES.CONV_C2C\" class=\"c2c-layout\"\r\n    [class]=\"messagePosition\">\r\n\r\n    <div class=\"col-1\" *ngIf=\"showAvatar\">\r\n      <!-- \u5934\u50CF -->\r\n      <im-avatar [src]=\"avatar\"></im-avatar>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <!-- \u6D88\u606F\u4E3B\u4F53 -->\r\n      <div class=\"content-wrapper\">\r\n        <app-message-status-icon [message]=\"message\" *ngIf=\"isMine\"></app-message-status-icon>\r\n        <app-text-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_TEXT\"></app-text-element>\r\n\r\n        <app-image-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_IMAGE\"></app-image-element>\r\n\r\n        <app-file-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_FILE\"></app-file-element>\r\n      </div>\r\n      <app-message-footer *ngIf=\"showMessageHeader\" [message]=\"message\"></app-message-footer>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <!-- \u6D88\u606F\u72B6\u6001 -->\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"currentConversationType === TIM.TYPES.CONV_GROUP\" class=\"group-layout\"\r\n    [class]=\"messagePosition\">\r\n    <!-- \u5934\u50CF \u7FA4\u7EC4\u6CA1\u6709\u83B7\u53D6\u5355\u4E2A\u5934\u50CF\u7684\u63A5\u53E3\uFF0C\u6682\u65F6\u65E0\u6CD5\u663E\u793A\u5934\u50CF-->\r\n    <div class=\"col-1\" *ngIf=\"showAvatar\">\r\n      <im-avatar class=\"group-member-avatar\" [src]=\"avatar\">\r\n      </im-avatar>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <!-- \u6D88\u606F\u4E3B\u4F53 -->\r\n      <app-message-header *ngIf=\"showMessageHeader\" [message]=\"message\"\r\n        [currentConversation]=\"currentConversation\" [currentUserProfile]=\"currentUserProfile\">\r\n      </app-message-header>\r\n      <div class=\"content-wrapper\">\r\n        <app-message-status-icon [message]=\"message\" *ngIf=\"isMine\"></app-message-status-icon>\r\n        <app-text-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_TEXT\"></app-text-element>\r\n        <app-image-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_IMAGE\"></app-image-element>\r\n        <app-file-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_FILE\"></app-file-element>\r\n        <app-group-tip-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_GRP_TIP\"></app-group-tip-element>\r\n        <app-custom-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_CUSTOM\"></app-custom-element>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <!-- \u6D88\u606F\u72B6\u6001 -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"system-layout\" *ngIf=\"currentConversationType === TIM.TYPES.CONV_SYSTEM\">\r\n    <div class=\"col-1\">\r\n      <im-avatar [src]=\"avatar\" [type]=\"currentConversationType\"></im-avatar>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <app-message-header *ngIf=\"showMessageHeader\" [message]=\"message\"\r\n        [currentConversation]=\"currentConversation\" [currentUserProfile]=\"currentUserProfile\">\r\n      </app-message-header>\r\n      <app-group-system-notice-element [message]=\"message\" [payload]=\"message.payload\">\r\n      </app-group-system-notice-element>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".message-wrapper{margin:20px 0}.message-wrapper .content-wrapper{display:flex;align-items:center}.group-layout,.c2c-layout,.system-layout{display:flex}.group-layout .group-member-avatar,.c2c-layout .group-member-avatar,.system-layout .group-member-avatar{cursor:pointer}.group-layout .col-2,.c2c-layout .col-2,.system-layout .col-2{display:flex;flex-direction:column}.group-layout .col-3,.c2c-layout .col-3,.system-layout .col-3{width:30px}.group-layout.position-left .col-2,.c2c-layout.position-left .col-2,.system-layout.position-left .col-2{align-items:flex-start}.group-layout.position-right,.c2c-layout.position-right,.system-layout.position-right{flex-direction:row-reverse}.group-layout.position-right .col-2,.c2c-layout.position-right .col-2,.system-layout.position-right .col-2{align-items:flex-end}.group-layout.position-center,.c2c-layout.position-center,.system-layout.position-center{justify-content:center}.c2c-layout .col-2 .base{margin-top:3px}.group-layout .col-2 .chat-bubble{margin-top:5px}:host ::ng-deep .avatar{width:56px;height:56px;border-radius:50%;box-shadow:0 5px 10px #0000001a}\n"], components: [{ type: AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }, { type: MessageStatusIconComponent, selector: "app-message-status-icon", inputs: ["message"] }, { type: TextElementComponent, selector: "app-text-element", inputs: ["message", "isMine", "payload"] }, { type: ImageElementComponent, selector: "app-image-element", inputs: ["message", "isMine", "payload", "percent"] }, { type: FileElementComponent, selector: "app-file-element", inputs: ["message", "isMine", "payload"] }, { type: MessageFooterComponent, selector: "app-message-footer", inputs: ["message"] }, { type: MessageHeaderComponent, selector: "app-message-header", inputs: ["message", "currentUserProfile", "currentConversation"] }, { type: GroupTipElementComponent, selector: "app-group-tip-element", inputs: ["message", "isMine", "payload"] }, { type: CustomElementComponent, selector: "app-custom-element", inputs: ["message", "isMine", "payload"] }, { type: GroupSystemNoticeElementComponent, selector: "app-group-system-notice-element", inputs: ["message", "payload"] }], directives: [{ type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-item', template: "<div class=\"message-wrapper\" [class]=\"messagePosition\">\r\n  <div *ngIf=\"currentConversationType === TIM.TYPES.CONV_C2C\" class=\"c2c-layout\"\r\n    [class]=\"messagePosition\">\r\n\r\n    <div class=\"col-1\" *ngIf=\"showAvatar\">\r\n      <!-- \u5934\u50CF -->\r\n      <im-avatar [src]=\"avatar\"></im-avatar>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <!-- \u6D88\u606F\u4E3B\u4F53 -->\r\n      <div class=\"content-wrapper\">\r\n        <app-message-status-icon [message]=\"message\" *ngIf=\"isMine\"></app-message-status-icon>\r\n        <app-text-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_TEXT\"></app-text-element>\r\n\r\n        <app-image-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_IMAGE\"></app-image-element>\r\n\r\n        <app-file-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_FILE\"></app-file-element>\r\n      </div>\r\n      <app-message-footer *ngIf=\"showMessageHeader\" [message]=\"message\"></app-message-footer>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <!-- \u6D88\u606F\u72B6\u6001 -->\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"currentConversationType === TIM.TYPES.CONV_GROUP\" class=\"group-layout\"\r\n    [class]=\"messagePosition\">\r\n    <!-- \u5934\u50CF \u7FA4\u7EC4\u6CA1\u6709\u83B7\u53D6\u5355\u4E2A\u5934\u50CF\u7684\u63A5\u53E3\uFF0C\u6682\u65F6\u65E0\u6CD5\u663E\u793A\u5934\u50CF-->\r\n    <div class=\"col-1\" *ngIf=\"showAvatar\">\r\n      <im-avatar class=\"group-member-avatar\" [src]=\"avatar\">\r\n      </im-avatar>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <!-- \u6D88\u606F\u4E3B\u4F53 -->\r\n      <app-message-header *ngIf=\"showMessageHeader\" [message]=\"message\"\r\n        [currentConversation]=\"currentConversation\" [currentUserProfile]=\"currentUserProfile\">\r\n      </app-message-header>\r\n      <div class=\"content-wrapper\">\r\n        <app-message-status-icon [message]=\"message\" *ngIf=\"isMine\"></app-message-status-icon>\r\n        <app-text-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_TEXT\"></app-text-element>\r\n        <app-image-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_IMAGE\"></app-image-element>\r\n        <app-file-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_FILE\"></app-file-element>\r\n        <app-group-tip-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_GRP_TIP\"></app-group-tip-element>\r\n        <app-custom-element [isMine]=\"isMine\" [message]=\"message\" [payload]=\"message.payload\"\r\n          *ngIf=\"message.type === TIM.TYPES.MSG_CUSTOM\"></app-custom-element>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <!-- \u6D88\u606F\u72B6\u6001 -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"system-layout\" *ngIf=\"currentConversationType === TIM.TYPES.CONV_SYSTEM\">\r\n    <div class=\"col-1\">\r\n      <im-avatar [src]=\"avatar\" [type]=\"currentConversationType\"></im-avatar>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <app-message-header *ngIf=\"showMessageHeader\" [message]=\"message\"\r\n        [currentConversation]=\"currentConversation\" [currentUserProfile]=\"currentUserProfile\">\r\n      </app-message-header>\r\n      <app-group-system-notice-element [message]=\"message\" [payload]=\"message.payload\">\r\n      </app-group-system-notice-element>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".message-wrapper{margin:20px 0}.message-wrapper .content-wrapper{display:flex;align-items:center}.group-layout,.c2c-layout,.system-layout{display:flex}.group-layout .group-member-avatar,.c2c-layout .group-member-avatar,.system-layout .group-member-avatar{cursor:pointer}.group-layout .col-2,.c2c-layout .col-2,.system-layout .col-2{display:flex;flex-direction:column}.group-layout .col-3,.c2c-layout .col-3,.system-layout .col-3{width:30px}.group-layout.position-left .col-2,.c2c-layout.position-left .col-2,.system-layout.position-left .col-2{align-items:flex-start}.group-layout.position-right,.c2c-layout.position-right,.system-layout.position-right{flex-direction:row-reverse}.group-layout.position-right .col-2,.c2c-layout.position-right .col-2,.system-layout.position-right .col-2{align-items:flex-end}.group-layout.position-center,.c2c-layout.position-center,.system-layout.position-center{justify-content:center}.c2c-layout .col-2 .base{margin-top:3px}.group-layout .col-2 .chat-bubble{margin-top:5px}:host ::ng-deep .avatar{width:56px;height:56px;border-radius:50%;box-shadow:0 5px 10px #0000001a}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }]; }, propDecorators: { currentConversation: [{
                type: Input
            }], message: [{
                type: Input
            }] } });

class MessageSendBoxComponent {
    constructor(store, cd, timHelperService, reEditMessage) {
        this.store = store;
        this.cd = cd;
        this.timHelperService = timHelperService;
        this.reEditMessage = reEditMessage;
        this.visible = false;
        this.emojiName = emojiName;
        this.emojiUrl = emojiUrl;
        this.emojiMap = emojiMap;
        this.focus = false;
        // 消息内容
        this.messageContent = '';
    }
    ngOnInit() {
        this.store.select(currentConversationSelector).subscribe(currentConversation => {
            this.currentConversation = currentConversation;
            if (!currentConversation || !currentConversation.conversationID) {
                this.toAccount = '';
            }
            else {
                switch (currentConversation.type) {
                    case 'C2C':
                        this.toAccount = currentConversation.conversationID.replace('C2C', '');
                        break;
                    case 'GROUP':
                        this.toAccount = currentConversation.conversationID.replace('GROUP', '');
                        break;
                    default:
                        this.toAccount = currentConversation.conversationID;
                }
            }
            if (!currentConversation || !currentConversation.type) {
                this.currentConversationType = '';
            }
            else {
                this.currentConversationType = currentConversation.type;
            }
        });
        this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));
        this.reEditMessage.reEditMessage.subscribe((payload) => {
            this.messageContent = payload;
            this.cd.markForCheck();
        });
    }
    onfocus(event) {
        console.log('onfocus');
        this.focus = true;
        console.log(this.currentConversation);
        this.timHelperService.checkoutConversation(this.currentConversation.conversationID);
    }
    onblur(event) {
        console.log('onblur');
        this.focus = false;
    }
    handleEnter(event) {
        this.sendTextMessage();
    }
    handleLine(event) {
        event.preventDefault();
        if (event.ctrlKey && event.key === 'Enter') {
            this.messageContent += '\n';
        }
    }
    handleUp(event) {
        console.log('handleUp::', event);
    }
    handleDown(event) {
        console.log('handleDown::', event);
    }
    keyDown(event) {
        if (!event.ctrlKey && event.key === 'Enter') {
            event.preventDefault();
            this.handleEnter(event);
        }
        if (event.key === 'ArrowUp') {
            event.stopPropagation();
            this.handleUp(event);
        }
        if (event.key === 'ArrowDown') {
            event.stopPropagation();
            this.handleDown(event);
        }
    }
    handlePaste(e) {
        const clipboardData = e.clipboardData;
        let file;
        if (clipboardData && clipboardData.files && clipboardData.files.length > 0) {
            file = clipboardData.files[0];
        }
        if (typeof file === 'undefined') {
            return;
        }
        // 1. 创建消息实例，接口返回的实例可以上屏
        const message = this.timHelperService.tim.createImageMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: {
                file,
            },
            onProgress: (percent) => {
                message.progress = percent; // 手动给message 实例加个响应式属性: progress
            },
        });
        // 2. 发送消息
        const promise = this.timHelperService.tim.sendMessage(message).then(res => {
            this.store.dispatch(pushCurrentMessageListAction({ message }));
        });
        promise.catch((error) => {
            console.error('[sendMessage error]::', error);
        });
    }
    sendImage(event) {
        console.log('sendImage');
        const message = this.timHelperService.tim.createImageMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: {
                file: this.imagePicker.nativeElement // 或者用event.target
            },
            onProgress: (percent) => {
                // 手动给message 实例加个响应式属性: progress
                message.progress = percent;
                console.log('percent:', percent);
            }
        });
        this.timHelperService.tim
            .sendMessage(message)
            .then(({ data }) => {
            console.log('发送成功', data);
            this.store.dispatch(pushCurrentMessageListAction({ message: Object.assign({}, data.message) }));
            this.imagePicker.nativeElement.value = null;
        })
            .catch(imError => {
            console.error('imError::', imError);
        });
    }
    sendFile(event) {
        const message = this.timHelperService.tim.createFileMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: {
                file: document.getElementById('filePicker'), // 或者用event.target
            },
            onProgress: (percent) => {
                message.progress = percent;
                console.log('上传进度', percent);
            },
        });
        this.timHelperService.tim
            .sendMessage(message)
            .then(({ data }) => {
            this.store.dispatch(pushCurrentMessageListAction({ message: Object.assign({}, data.message) }));
            this.filePicker.nativeElement.value = null;
        })
            .catch((imError) => {
            console.error('imError::', imError);
        });
    }
    chooseEmoji(item) {
        console.log(item);
        this.messageContent += item;
    }
    sendTextMessage() {
        if (this.messageContent === '' ||
            this.messageContent.trim().length === 0) {
            this.messageContent = '';
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: '不能发送空消息哦！' }));
            return;
        }
        const message = this.timHelperService.tim.createTextMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: { text: this.messageContent }
        });
        this.store.dispatch(pushCurrentMessageListAction({ message }));
        this.timHelperService.eventBus$.next('scroll-bottom');
        this.timHelperService.tim.sendMessage(message).catch(error => {
            console.error('[sendMessage error]::', error);
        });
        this.messageContent = '';
    }
    handleSendImageClick(input, event) {
        event.stopPropagation();
        input.click();
    }
    handleSendFileClick(input) {
        input.click();
    }
    ngOnDestroy() {
        this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));
    }
}
MessageSendBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageSendBoxComponent, deps: [{ token: i1.Store }, { token: i0.ChangeDetectorRef }, { token: TimHelperService }, { token: ReEditMessageService }], target: i0.ɵɵFactoryTarget.Component });
MessageSendBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageSendBoxComponent, selector: "app-message-send-box", viewQueries: [{ propertyName: "imagePicker", first: true, predicate: ["imagePicker"], descendants: true }, { propertyName: "filePicker", first: true, predicate: ["filePicker"], descendants: true }, { propertyName: "textInput", first: true, predicate: ["textInput"], descendants: true, static: true }], ngImport: i0, template: "<div class=\"message-send-box-wrapper\" [ngClass]=\"{'white-background': focus}\"\r\n  (focus)=\"onfocus($event)\">\r\n  <div class=\"send-header-bar\">\r\n\r\n    <input type=\"file\" #imagePicker accept=\".jpg, .jpeg, .png, .gif\" (change)=\"sendImage($event)\"\r\n      (click)=\"$event.stopPropagation()\" style=\"display:none\" />\r\n\r\n    <input type=\"file\" #filePicker (change)=\"sendFile($event)\" (click)=\"$event.stopPropagation()\"\r\n      style=\"display:none\" />\r\n\r\n    <i nz-icon nzType=\"meh\" nzTheme=\"outline\" title=\"\u53D1\u8868\u60C5\" nz-popover nzPopoverTitle=\"Title\"\r\n      [(nzPopoverVisible)]=\"visible\" nzPopoverTrigger=\"click\" [nzPopoverContent]=\"contentTemplate\"\r\n      [nzPopoverTitle]=\"'\u8868\u60C5'\"></i>\r\n\r\n    <i nz-icon nzType=\"picture\" nzTheme=\"outline\" title=\"\u53D1\u56FE\u7247\"\r\n      (click)=\"handleSendImageClick(imagePicker,$event)\"></i>\r\n\r\n    <i nz-icon nzType=\"folder\" nzTheme=\"outline\" title=\"\u53D1\u6587\u4EF6\"\r\n      (click)=\"handleSendFileClick(filePicker)\"></i>\r\n\r\n  </div>\r\n  <div class=\"bottom\">\r\n    <textarea rows=\"4\" resize=\"false\" class=\"text-input\" #textInput [(ngModel)]=\"messageContent\"\r\n      (focus)=\"onfocus($event)\" (blur)=\"onblur($event)\" (keydown)=\"keyDown($event)\"\r\n      (keyup)=\"handleLine($event)\">\r\n    </textarea>\r\n    <div class=\"btn-send\" (click)=\"sendTextMessage()\">\r\n      <button nzTooltipTitle=\"\u6309Enter\u53D1\u9001\u6D88\u606F\uFF0CCtrl+Enter\u6362\u884C\" nzTooltipPlacement=\"left\" nz-button\r\n        nz-tooltip class=\"tim-icon-send\">\u53D1\u9001</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #contentTemplate>\r\n  <div class=\"emojis\" [ngStyle]=\"{'width': '400px'}\">\r\n    <div *ngFor=\"let item of emojiName\" class=\"emoji\" (click)=\"chooseEmoji(item)\">\r\n      <img [src]=\"emojiUrl + emojiMap[item]\" style=\"width:30px;height:30px\" />\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [".message-send-box-wrapper{box-sizing:border-box;overflow:hidden;padding:3px 20px 20px}.emojis{height:160px;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;overflow-y:scroll}.emoji{height:40px;width:40px;box-sizing:border-box}.send-header-bar{box-sizing:border-box;padding:3px 0 0}.send-header-bar i{cursor:pointer;font-size:24px;color:gray;margin:0 12px 0 0}.send-header-bar i:hover{color:#000}textarea{resize:none}.text-input{font-size:16px;width:100%;box-sizing:box-sizing;border:none;outline:none;background-color:transparent}.block{padding:10px 0;display:flex;align-items:center}.bottom{padding-top:10px;position:relative}.bottom .btn-send{cursor:pointer;position:absolute;color:#2d8cf0;font-size:30px;right:0;bottom:-5px;padding:6px 6px 4px 4px;border-radius:50%}.white-background{background-color:#fff}\n"], components: [{ type: i7.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }], directives: [{ type: i5$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i7$1.NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i10.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i11.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i5$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i5$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageSendBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-send-box', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"message-send-box-wrapper\" [ngClass]=\"{'white-background': focus}\"\r\n  (focus)=\"onfocus($event)\">\r\n  <div class=\"send-header-bar\">\r\n\r\n    <input type=\"file\" #imagePicker accept=\".jpg, .jpeg, .png, .gif\" (change)=\"sendImage($event)\"\r\n      (click)=\"$event.stopPropagation()\" style=\"display:none\" />\r\n\r\n    <input type=\"file\" #filePicker (change)=\"sendFile($event)\" (click)=\"$event.stopPropagation()\"\r\n      style=\"display:none\" />\r\n\r\n    <i nz-icon nzType=\"meh\" nzTheme=\"outline\" title=\"\u53D1\u8868\u60C5\" nz-popover nzPopoverTitle=\"Title\"\r\n      [(nzPopoverVisible)]=\"visible\" nzPopoverTrigger=\"click\" [nzPopoverContent]=\"contentTemplate\"\r\n      [nzPopoverTitle]=\"'\u8868\u60C5'\"></i>\r\n\r\n    <i nz-icon nzType=\"picture\" nzTheme=\"outline\" title=\"\u53D1\u56FE\u7247\"\r\n      (click)=\"handleSendImageClick(imagePicker,$event)\"></i>\r\n\r\n    <i nz-icon nzType=\"folder\" nzTheme=\"outline\" title=\"\u53D1\u6587\u4EF6\"\r\n      (click)=\"handleSendFileClick(filePicker)\"></i>\r\n\r\n  </div>\r\n  <div class=\"bottom\">\r\n    <textarea rows=\"4\" resize=\"false\" class=\"text-input\" #textInput [(ngModel)]=\"messageContent\"\r\n      (focus)=\"onfocus($event)\" (blur)=\"onblur($event)\" (keydown)=\"keyDown($event)\"\r\n      (keyup)=\"handleLine($event)\">\r\n    </textarea>\r\n    <div class=\"btn-send\" (click)=\"sendTextMessage()\">\r\n      <button nzTooltipTitle=\"\u6309Enter\u53D1\u9001\u6D88\u606F\uFF0CCtrl+Enter\u6362\u884C\" nzTooltipPlacement=\"left\" nz-button\r\n        nz-tooltip class=\"tim-icon-send\">\u53D1\u9001</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #contentTemplate>\r\n  <div class=\"emojis\" [ngStyle]=\"{'width': '400px'}\">\r\n    <div *ngFor=\"let item of emojiName\" class=\"emoji\" (click)=\"chooseEmoji(item)\">\r\n      <img [src]=\"emojiUrl + emojiMap[item]\" style=\"width:30px;height:30px\" />\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [".message-send-box-wrapper{box-sizing:border-box;overflow:hidden;padding:3px 20px 20px}.emojis{height:160px;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;overflow-y:scroll}.emoji{height:40px;width:40px;box-sizing:border-box}.send-header-bar{box-sizing:border-box;padding:3px 0 0}.send-header-bar i{cursor:pointer;font-size:24px;color:gray;margin:0 12px 0 0}.send-header-bar i:hover{color:#000}textarea{resize:none}.text-input{font-size:16px;width:100%;box-sizing:box-sizing;border:none;outline:none;background-color:transparent}.block{padding:10px 0;display:flex;align-items:center}.bottom{padding-top:10px;position:relative}.bottom .btn-send{cursor:pointer;position:absolute;color:#2d8cf0;font-size:30px;right:0;bottom:-5px;padding:6px 6px 4px 4px;border-radius:50%}.white-background{background-color:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: i0.ChangeDetectorRef }, { type: TimHelperService }, { type: ReEditMessageService }]; }, propDecorators: { imagePicker: [{
                type: ViewChild,
                args: ['imagePicker', { static: false }]
            }], filePicker: [{
                type: ViewChild,
                args: ['filePicker', { static: false }]
            }], textInput: [{
                type: ViewChild,
                args: ['textInput', { static: true }]
            }] } });

class CurrentConversationComponent {
    constructor(store, cd, timHelperService) {
        this.store = store;
        this.cd = cd;
        this.timHelperService = timHelperService;
        this.currentMessageList = [];
        this.isShowScrollBottomTips = false;
        this.isCompleted = false;
        this.preScrollHeight = 0;
    }
    get showCurrentConversation() {
        var _a;
        return !!((_a = this.currentConversation) === null || _a === void 0 ? void 0 : _a.conversationID);
    }
    get showMessageSendBox() {
        return (this.currentConversation.type !== TIM.TYPES.CONV_SYSTEM);
    }
    ngOnInit() {
        // 获取当前会话
        this.currentConversationSubscription = this.store.select(currentConversationSelector).subscribe(res => {
            this.currentConversation = res;
            this.preScrollHeight = 0;
            this.cd.markForCheck();
        });
        this.conversationSubscription = this.store.select(conversationSelector)
            .subscribe(res => {
            this.currentMessageList = res.currentMessageList;
            this.isCompleted = res.isCompleted;
            if (res.currentMessageList && res.currentMessageList.length > 0) {
                if (this.currentConversation.conversationID) {
                    this.keepMessageListOnBottom();
                    this.timHelperService.tim.setMessageRead({ conversationID: this.currentConversation.conversationID });
                }
            }
            this.cd.markForCheck();
        }, err => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: err.message }));
        });
        this.eventBusSubscription = this.timHelperService.eventBus$
            .subscribe((res) => {
            if (res === 'scroll-bottom') {
                this.scrollMessageListToBottom();
                this.cd.markForCheck();
            }
        });
    }
    ngAfterViewInit() {
        this.keepMessageListOnBottom();
    }
    getMore() {
        this.timHelperService.getMessageList(this.currentConversation.conversationID);
    }
    onscroll({ target: { scrollTop } }) {
        var _a;
        const messageListNode = (_a = this.messageListRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!messageListNode) {
            return;
        }
        if (this.preScrollHeight - messageListNode.clientHeight - scrollTop < 20) {
            this.isShowScrollBottomTips = false;
        }
    }
    scrollMessageListToBottom() {
        var _a;
        const messageListNode = (_a = this.messageListRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!messageListNode) {
            return;
        }
        setTimeout(() => {
            messageListNode.scrollTop = messageListNode.scrollHeight;
            this.preScrollHeight = messageListNode.scrollHeight;
            this.isShowScrollBottomTips = false;
        }, 0);
    }
    // 如果滚到底部就保持在底部，否则提示是否要滚到底部
    keepMessageListOnBottom() {
        var _a;
        const messageListNode = (_a = this.messageListRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!messageListNode) {
            return;
        }
        setTimeout(() => {
            // 距离底部20px内强制滚到底部,否则提示有新消息
            if (this.preScrollHeight - messageListNode.clientHeight - messageListNode.scrollTop < 20) {
                messageListNode.scrollTop = messageListNode.scrollHeight;
                this.isShowScrollBottomTips = false;
            }
            else {
                this.isShowScrollBottomTips = true;
            }
            this.preScrollHeight = messageListNode.scrollHeight;
        }, 0);
    }
    ngOnDestroy() {
        [
            this.eventBusSubscription,
            this.conversationSubscription,
            this.currentConversationSubscription
        ].forEach(item => {
            if (item) {
                item.unsubscribe();
            }
        });
    }
}
CurrentConversationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CurrentConversationComponent, deps: [{ token: i1.Store }, { token: i0.ChangeDetectorRef }, { token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
CurrentConversationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: CurrentConversationComponent, selector: "app-current-conversation", viewQueries: [{ propertyName: "messageListRef", first: true, predicate: ["messageList"], descendants: true }], ngImport: i0, template: "<div class=\"current-conversation-wrapper\">\r\n  <div class=\"current-conversation\" *ngIf=\"showCurrentConversation\" (scroll)=\"onscroll($event)\">\r\n    <div class=\"content\">\r\n      <div class=\"message-list\" #messageList (scroll)=\"onscroll($event)\">\r\n        <div class=\"more\" *ngIf=\"!isCompleted\">\r\n          <a (click)=\"getMore()\">\u67E5\u770B\u66F4\u591A</a>\r\n        </div>\r\n        <div class=\"no-more\" *ngIf=\"isCompleted\">\u6CA1\u6709\u66F4\u591A\u4E86</div>\r\n        <app-message-item *ngFor=\"let message of currentMessageList\" [message]=\"message\"\r\n          [currentConversation]=\"currentConversation\">\r\n        </app-message-item>\r\n      </div>\r\n      <div class=\"newMessageTips\" *ngIf=\"isShowScrollBottomTips\"\r\n        (click)=\"scrollMessageListToBottom()\">\u56DE\u5230\u6700\u65B0\u4F4D\u7F6E</div>\r\n    </div>\r\n    <div class=\"footer\" *ngIf=\"showMessageSendBox\">\r\n      <app-message-send-box></app-message-send-box>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".current-conversation-wrapper{background-color:#f5f5f5;color:#1c2438;display:flex;height:75vh}.current-conversation-wrapper .current-conversation{display:flex;flex-direction:column;width:100%}.current-conversation-wrapper .more{display:flex;justify-content:center;font-size:12px}.current-conversation-wrapper .no-more{display:flex;justify-content:center;color:#a5b5c1;font-size:12px;padding:10px}.content{display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative}.content .message-list{width:100%;box-sizing:border-box;overflow-y:scroll;padding:0 20px}.content .newMessageTips{position:absolute;cursor:pointer;padding:5px;width:120px;margin:auto;left:0;right:0;bottom:5px;font-size:12px;text-align:center;border-radius:10px;border:#e9eaec 1px solid;background-color:#fff;color:#2d8cf0}.footer{border-top:1px solid #e7e7e7}\n"], components: [{ type: MessageItemComponent, selector: "app-message-item", inputs: ["currentConversation", "message"] }, { type: MessageSendBoxComponent, selector: "app-message-send-box" }], directives: [{ type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CurrentConversationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-current-conversation', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"current-conversation-wrapper\">\r\n  <div class=\"current-conversation\" *ngIf=\"showCurrentConversation\" (scroll)=\"onscroll($event)\">\r\n    <div class=\"content\">\r\n      <div class=\"message-list\" #messageList (scroll)=\"onscroll($event)\">\r\n        <div class=\"more\" *ngIf=\"!isCompleted\">\r\n          <a (click)=\"getMore()\">\u67E5\u770B\u66F4\u591A</a>\r\n        </div>\r\n        <div class=\"no-more\" *ngIf=\"isCompleted\">\u6CA1\u6709\u66F4\u591A\u4E86</div>\r\n        <app-message-item *ngFor=\"let message of currentMessageList\" [message]=\"message\"\r\n          [currentConversation]=\"currentConversation\">\r\n        </app-message-item>\r\n      </div>\r\n      <div class=\"newMessageTips\" *ngIf=\"isShowScrollBottomTips\"\r\n        (click)=\"scrollMessageListToBottom()\">\u56DE\u5230\u6700\u65B0\u4F4D\u7F6E</div>\r\n    </div>\r\n    <div class=\"footer\" *ngIf=\"showMessageSendBox\">\r\n      <app-message-send-box></app-message-send-box>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".current-conversation-wrapper{background-color:#f5f5f5;color:#1c2438;display:flex;height:75vh}.current-conversation-wrapper .current-conversation{display:flex;flex-direction:column;width:100%}.current-conversation-wrapper .more{display:flex;justify-content:center;font-size:12px}.current-conversation-wrapper .no-more{display:flex;justify-content:center;color:#a5b5c1;font-size:12px;padding:10px}.content{display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative}.content .message-list{width:100%;box-sizing:border-box;overflow-y:scroll;padding:0 20px}.content .newMessageTips{position:absolute;cursor:pointer;padding:5px;width:120px;margin:auto;left:0;right:0;bottom:5px;font-size:12px;text-align:center;border-radius:10px;border:#e9eaec 1px solid;background-color:#fff;color:#2d8cf0}.footer{border-top:1px solid #e7e7e7}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: i0.ChangeDetectorRef }, { type: TimHelperService }]; }, propDecorators: { messageListRef: [{
                type: ViewChild,
                args: ['messageList', { static: false }]
            }] } });

class UserProfileComponent {
    constructor() { }
    ngOnInit() {
    }
    get gender() {
        switch (this.userProfile.gender) {
            case TIM$1.TYPES.GENDER_MALE:
                return '男';
            case TIM$1.TYPES.GENDER_FEMALE:
                return '女';
            default:
                return '未设置';
        }
    }
    get genderClass() {
        switch (this.userProfile.gender) {
            case TIM$1.TYPES.GENDER_MALE:
                return 'icon-male';
            case TIM$1.TYPES.GENDER_FEMALE:
                return 'icon-female';
            default:
                return '';
        }
    }
}
UserProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: UserProfileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UserProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: UserProfileComponent, selector: "app-user-profile", inputs: { userProfile: "userProfile" }, ngImport: i0, template: "<div class=\"profile-user\">\r\n  <im-avatar [title]=\"userProfile.userID\" [src]=\"userProfile.avatar\" [size]=\"100\">\r\n  </im-avatar>\r\n  <div class=\"nick-name text-ellipsis\">\r\n    <span *ngIf=\"userProfile.nick;else elseBlock\" [title]=\"userProfile.nick\">\r\n      {{ userProfile.nick }}\r\n    </span>\r\n    <ng-template #elseBlock>\r\n      <span class=\"anonymous\" title=\"\u8BE5\u7528\u6237\u672A\u8BBE\u7F6E\u6635\u79F0\">\r\n        [Anonymous]\r\n      </span>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"gender\" *ngIf=\"genderClass\">\r\n    <span [title]=\"gender\" class=\"iconfont\" [class]=\"genderClass\"></span>\r\n  </div>\r\n</div>\r\n", styles: [".profile-user{width:100%;text-align:center;padding:20px}.profile-user .nick-name{width:100%;color:#1c2438;font-size:20px;font-weight:700;text-shadow:#76828c 0 0 .1em}.profile-user .nick-name .anonymous{color:#99a8b4;text-shadow:none}.profile-user .gender{padding:5px 0 10px;border-bottom:1px solid #e7e7e7}.profile-user .btn-add-blacklist{color:#f35f5f}.icon-male{color:#2d8cf0}.icon-female{color:#ff8096}\n"], components: [{ type: AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }], directives: [{ type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: UserProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-user-profile', template: "<div class=\"profile-user\">\r\n  <im-avatar [title]=\"userProfile.userID\" [src]=\"userProfile.avatar\" [size]=\"100\">\r\n  </im-avatar>\r\n  <div class=\"nick-name text-ellipsis\">\r\n    <span *ngIf=\"userProfile.nick;else elseBlock\" [title]=\"userProfile.nick\">\r\n      {{ userProfile.nick }}\r\n    </span>\r\n    <ng-template #elseBlock>\r\n      <span class=\"anonymous\" title=\"\u8BE5\u7528\u6237\u672A\u8BBE\u7F6E\u6635\u79F0\">\r\n        [Anonymous]\r\n      </span>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"gender\" *ngIf=\"genderClass\">\r\n    <span [title]=\"gender\" class=\"iconfont\" [class]=\"genderClass\"></span>\r\n  </div>\r\n</div>\r\n", styles: [".profile-user{width:100%;text-align:center;padding:20px}.profile-user .nick-name{width:100%;color:#1c2438;font-size:20px;font-weight:700;text-shadow:#76828c 0 0 .1em}.profile-user .nick-name .anonymous{color:#99a8b4;text-shadow:none}.profile-user .gender{padding:5px 0 10px;border-bottom:1px solid #e7e7e7}.profile-user .btn-add-blacklist{color:#f35f5f}.icon-male{color:#2d8cf0}.icon-female{color:#ff8096}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { userProfile: [{
                type: Input
            }] } });

class GroupMemberInfoComponent {
    constructor(timHelper, store) {
        this.timHelper = timHelper;
        this.store = store;
        this.enterEnd = new EventEmitter();
        this.current = Date.now();
    }
    ngOnInit() {
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
        if (!this.muteTime)
            return;
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
        });
    }
    setGroupMemberNameCard() {
        if (this.nameCard.trim().length === 0) {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: '不能设置空的群名片' }));
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.success, message: '修改成功' }));
        })
            .catch(error => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
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
GroupMemberInfoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupMemberInfoComponent, deps: [{ token: TimHelperService }, { token: i1.Store }], target: i0.ɵɵFactoryTarget.Component });
GroupMemberInfoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupMemberInfoComponent, selector: "app-group-member-info", inputs: { member: "member", currentConversation: "currentConversation" }, outputs: { enterEnd: "enterEnd" }, ngImport: i0, template: "<div>\r\n  <div>\r\n    <span class=\"label\">userID:</span>\r\n    {{ member.userID }}\r\n    <a *ngIf=\"showCancelBan\" type=\"text\" (click)=\"cancelMute()\">\u53D6\u6D88\u7981\u8A00</a>\r\n    <a [ngStyle]=\"{'color': 'red'}\" nz-popover [nzPopoverContent]=\"contentTemplate\"\r\n      nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\" [nzPopoverVisible]=\"muteTimeVisible\"\r\n      [nzPopoverTitle]=\"'\u7981\u8A00(\u56DE\u8F66\u786E\u8BA4)'\">\u7981\u8A00</a>\r\n    <ng-template #contentTemplate>\r\n      <nz-input-number [ngStyle]=\"{'width': '100%'}\" [(ngModel)]=\"muteTime\" [nzMin]=\"1\" [nzStep]=\"1\"\r\n        nzPlaceholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"setGroupMemberMuteTime()\">\r\n      </nz-input-number>\r\n    </ng-template>\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">nick:</span>\r\n    {{ member.nick || '\u6682\u65E0' }}\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">nameCard:</span>\r\n    {{ member.nameCard || '\u6682\u65E0' }}\r\n    <i nz-icon nzType=\"edit\" nzTheme=\"outline\" [ngStyle]=\"{'cursor': 'pointer'}\" nz-popover\r\n      [nzPopoverContent]=\"nameCardTemplate\" nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\"\r\n      [nzPopoverVisible]=\"muteTimeVisible\" [nzPopoverTitle]=\"'\u4FEE\u6539\u7FA4\u540D\u7247'\"></i>\r\n    <ng-template #nameCardTemplate>\r\n      <input nz-input [(ngModel)]=\"nameCard\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\"\r\n        (keydown.enter)=\"setGroupMemberNameCard()\">\r\n    </ng-template>\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">role:</span>\r\n    <span class=\"content role\" [title]=\"changeRoleTitle\">{{ member.role }}</span>\r\n  </div>\r\n  <div *ngIf=\"showMuteUntil\">\r\n    <span class=\"label\">\u7981\u8A00\u81F3:</span>\r\n    <span class=\"content\">{{ muteUntil }}</span>\r\n  </div>\r\n  <a type=\"text\" *ngIf=\"canChangeRole\" (click)=\"changeMemberRole()\">\r\n    {{\r\n    member.role === 'Admin' ? '\u53D6\u6D88\u7BA1\u7406\u5458' : '\u8BBE\u4E3A\u7BA1\u7406\u5458'\r\n    }}\r\n  </a>\r\n  <a type=\"text\" *ngIf=\"showKickout\" [ngStyle]=\"{'color': 'red'}\"\r\n    (click)=\"kickoutGroupMember()\">\u8E22\u51FA\u7FA4\u7EC4\r\n  </a>\r\n</div>\r\n", styles: [".label{color:#ccc8c8}.cursor-pointer{cursor:pointer}\n"], components: [{ type: i3.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }], directives: [{ type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7$1.NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }, { type: i5$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i9.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupMemberInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-member-info', template: "<div>\r\n  <div>\r\n    <span class=\"label\">userID:</span>\r\n    {{ member.userID }}\r\n    <a *ngIf=\"showCancelBan\" type=\"text\" (click)=\"cancelMute()\">\u53D6\u6D88\u7981\u8A00</a>\r\n    <a [ngStyle]=\"{'color': 'red'}\" nz-popover [nzPopoverContent]=\"contentTemplate\"\r\n      nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\" [nzPopoverVisible]=\"muteTimeVisible\"\r\n      [nzPopoverTitle]=\"'\u7981\u8A00(\u56DE\u8F66\u786E\u8BA4)'\">\u7981\u8A00</a>\r\n    <ng-template #contentTemplate>\r\n      <nz-input-number [ngStyle]=\"{'width': '100%'}\" [(ngModel)]=\"muteTime\" [nzMin]=\"1\" [nzStep]=\"1\"\r\n        nzPlaceholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"setGroupMemberMuteTime()\">\r\n      </nz-input-number>\r\n    </ng-template>\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">nick:</span>\r\n    {{ member.nick || '\u6682\u65E0' }}\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">nameCard:</span>\r\n    {{ member.nameCard || '\u6682\u65E0' }}\r\n    <i nz-icon nzType=\"edit\" nzTheme=\"outline\" [ngStyle]=\"{'cursor': 'pointer'}\" nz-popover\r\n      [nzPopoverContent]=\"nameCardTemplate\" nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\"\r\n      [nzPopoverVisible]=\"muteTimeVisible\" [nzPopoverTitle]=\"'\u4FEE\u6539\u7FA4\u540D\u7247'\"></i>\r\n    <ng-template #nameCardTemplate>\r\n      <input nz-input [(ngModel)]=\"nameCard\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\"\r\n        (keydown.enter)=\"setGroupMemberNameCard()\">\r\n    </ng-template>\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">role:</span>\r\n    <span class=\"content role\" [title]=\"changeRoleTitle\">{{ member.role }}</span>\r\n  </div>\r\n  <div *ngIf=\"showMuteUntil\">\r\n    <span class=\"label\">\u7981\u8A00\u81F3:</span>\r\n    <span class=\"content\">{{ muteUntil }}</span>\r\n  </div>\r\n  <a type=\"text\" *ngIf=\"canChangeRole\" (click)=\"changeMemberRole()\">\r\n    {{\r\n    member.role === 'Admin' ? '\u53D6\u6D88\u7BA1\u7406\u5458' : '\u8BBE\u4E3A\u7BA1\u7406\u5458'\r\n    }}\r\n  </a>\r\n  <a type=\"text\" *ngIf=\"showKickout\" [ngStyle]=\"{'color': 'red'}\"\r\n    (click)=\"kickoutGroupMember()\">\u8E22\u51FA\u7FA4\u7EC4\r\n  </a>\r\n</div>\r\n", styles: [".label{color:#ccc8c8}.cursor-pointer{cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: TimHelperService }, { type: i1.Store }]; }, propDecorators: { member: [{
                type: Input
            }], currentConversation: [{
                type: Input
            }], enterEnd: [{
                type: Output
            }] } });

class GroupMemberListComponent {
    constructor(store, timHelperService) {
        this.store = store;
        this.timHelperService = timHelperService;
        this.currentMemberList = [];
        this.currentMemberID = '';
        this.count = 30;
    }
    get members() {
        return this.currentMemberList.slice(0, this.count);
    }
    get showLoadMore() {
        return this.members.length < this.currentConversation.groupProfile.memberNum;
    }
    ngOnInit() {
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
            const { successUserIDList, failureUserIDList, existedUserIDList } = imResponse.data;
            if (successUserIDList.length > 0) {
                this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.success, message: `群成员：${successUserIDList.join(',')}，加群成功` }));
                this.timHelperService.tim.getGroupMemberProfile({ groupID, userIDList: successUserIDList })
                    .then(({ data: { memberList } }) => {
                    this.store.dispatch(updateCurrentMemberListAction({ currentMemberList: memberList }));
                    this.popoverVisible = false;
                });
            }
            if (failureUserIDList.length > 0) {
                this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: `群成员：${failureUserIDList.join(',')}，添加失败！` }));
            }
            if (existedUserIDList.length > 0) {
                this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: `群成员：${existedUserIDList.join(',')}，已在群中` }));
            }
        })
            .catch(error => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
        });
    }
    getGroupMemberAvatarText(role) {
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
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
GroupMemberListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupMemberListComponent, deps: [{ token: i1.Store }, { token: TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
GroupMemberListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupMemberListComponent, selector: "app-group-member-list", inputs: { currentConversation: "currentConversation" }, ngImport: i0, template: "<div class=\"group-member-list-wrapper\">\r\n  <div class=\"header\">\r\n    <span\r\n      class=\"member-count text-ellipsis\">\u7FA4\u6210\u5458\uFF1A{{this.currentConversation?.groupProfile.memberCount}}</span>\r\n    <i nz-icon nzType=\"user-add\" nzTheme=\"outline\"\r\n      [ngStyle]=\"{'font-size': '1.5em','cursor':'pointer'}\" nz-popover\r\n      [nzPopoverContent]=\"addGroupTemplate\" nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\"\r\n      [nzPopoverVisible]=\"popoverVisible\"></i>\r\n\r\n    <ng-template #addGroupTemplate>\r\n      <input nz-input [(ngModel)]=\"userID\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"addGroupMember()\">\r\n    </ng-template>\r\n\r\n  </div>\r\n  <div class=\"scroll-content\">\r\n    <div class=\"group-member-list\">\r\n      <div *ngFor=\"let member of members;\" nz-popover [nzPopoverContent]=\"contentTemplate\"\r\n        nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\" [nzPopoverVisible]=\"popoverVisible\">\r\n        <ng-template #contentTemplate>\r\n          <app-group-member-info [member]=\"member\" [currentConversation]=\"currentConversation\"\r\n            (enterEnd)=\"popoverVisible=false\">\r\n          </app-group-member-info>\r\n        </ng-template>\r\n\r\n        <div class=\"group-member\" (click)=\"currentMemberID = member.userID\">\r\n          <im-avatar [title]=\"getGroupMemberAvatarText(member.role)\" [src]=\"member.avatar\">\r\n          </im-avatar>\r\n          <div class=\"member-name text-ellipsis\">\r\n            <span *ngIf=\"member.nameCard\" [title]=\"member.nameCard\">{{ member.nameCard }}</span>\r\n            <span *ngIf=\"member.nick\" [title]=\"member.nick\">{{ member.nick }}</span>\r\n            <span *ngIf=\"!member.nameCard&&!member.nick\"\r\n              [title]=\"member.userID\">{{ member.userID }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"more\">\r\n    <a *ngIf=\"showLoadMore\" (click)=\"loadMore()\">\u67E5\u770B\u66F4\u591A</a>\r\n  </div>\r\n</div>\r\n", styles: [".group-member-list-wrapper .header{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;height:50px;padding:10px 16px 10px 20px;border-bottom:1px solid #e7e7e7}.group-member-list-wrapper .header .member-count{display:inline-block;max-width:130px;line-height:30px;font-size:14px;vertical-align:bottom}.group-member-list-wrapper .header .btn-add-member{width:30px;height:30px;font-size:28px;text-align:center;line-height:32px;cursor:pointer;float:right}.group-member-list-wrapper .header .btn-add-member:hover{color:#5cadff}.group-member-list-wrapper .scroll-content{max-height:250px;overflow-y:scroll;padding:10px 15px;width:100%}.group-member-list-wrapper .scroll-content .group-member-list{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%}.group-member-list-wrapper .scroll-content .group-member{width:60px;height:60px;display:flex;justify-content:center;align-content:center;flex-direction:column;align-items:center;text-align:center;color:#000;cursor:pointer}.group-member-list-wrapper .scroll-content .group-member im-avatar::ng-deep .avatar{width:40px;height:40px;border-radius:50%}.group-member-list-wrapper .scroll-content .group-member .member-name{font-size:12px;width:40px;text-align:center}.group-member-list-wrapper .more{padding:0 20px;border-bottom:1px solid #e7e7e7}\n"], components: [{ type: GroupMemberInfoComponent, selector: "app-group-member-info", inputs: ["member", "currentConversation"], outputs: ["enterEnd"] }, { type: AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }], directives: [{ type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i7$1.NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }, { type: i5$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i9.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupMemberListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-member-list', template: "<div class=\"group-member-list-wrapper\">\r\n  <div class=\"header\">\r\n    <span\r\n      class=\"member-count text-ellipsis\">\u7FA4\u6210\u5458\uFF1A{{this.currentConversation?.groupProfile.memberCount}}</span>\r\n    <i nz-icon nzType=\"user-add\" nzTheme=\"outline\"\r\n      [ngStyle]=\"{'font-size': '1.5em','cursor':'pointer'}\" nz-popover\r\n      [nzPopoverContent]=\"addGroupTemplate\" nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\"\r\n      [nzPopoverVisible]=\"popoverVisible\"></i>\r\n\r\n    <ng-template #addGroupTemplate>\r\n      <input nz-input [(ngModel)]=\"userID\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"addGroupMember()\">\r\n    </ng-template>\r\n\r\n  </div>\r\n  <div class=\"scroll-content\">\r\n    <div class=\"group-member-list\">\r\n      <div *ngFor=\"let member of members;\" nz-popover [nzPopoverContent]=\"contentTemplate\"\r\n        nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\" [nzPopoverVisible]=\"popoverVisible\">\r\n        <ng-template #contentTemplate>\r\n          <app-group-member-info [member]=\"member\" [currentConversation]=\"currentConversation\"\r\n            (enterEnd)=\"popoverVisible=false\">\r\n          </app-group-member-info>\r\n        </ng-template>\r\n\r\n        <div class=\"group-member\" (click)=\"currentMemberID = member.userID\">\r\n          <im-avatar [title]=\"getGroupMemberAvatarText(member.role)\" [src]=\"member.avatar\">\r\n          </im-avatar>\r\n          <div class=\"member-name text-ellipsis\">\r\n            <span *ngIf=\"member.nameCard\" [title]=\"member.nameCard\">{{ member.nameCard }}</span>\r\n            <span *ngIf=\"member.nick\" [title]=\"member.nick\">{{ member.nick }}</span>\r\n            <span *ngIf=\"!member.nameCard&&!member.nick\"\r\n              [title]=\"member.userID\">{{ member.userID }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"more\">\r\n    <a *ngIf=\"showLoadMore\" (click)=\"loadMore()\">\u67E5\u770B\u66F4\u591A</a>\r\n  </div>\r\n</div>\r\n", styles: [".group-member-list-wrapper .header{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;height:50px;padding:10px 16px 10px 20px;border-bottom:1px solid #e7e7e7}.group-member-list-wrapper .header .member-count{display:inline-block;max-width:130px;line-height:30px;font-size:14px;vertical-align:bottom}.group-member-list-wrapper .header .btn-add-member{width:30px;height:30px;font-size:28px;text-align:center;line-height:32px;cursor:pointer;float:right}.group-member-list-wrapper .header .btn-add-member:hover{color:#5cadff}.group-member-list-wrapper .scroll-content{max-height:250px;overflow-y:scroll;padding:10px 15px;width:100%}.group-member-list-wrapper .scroll-content .group-member-list{display:flex;justify-content:flex-start;flex-wrap:wrap;width:100%}.group-member-list-wrapper .scroll-content .group-member{width:60px;height:60px;display:flex;justify-content:center;align-content:center;flex-direction:column;align-items:center;text-align:center;color:#000;cursor:pointer}.group-member-list-wrapper .scroll-content .group-member im-avatar::ng-deep .avatar{width:40px;height:40px;border-radius:50%}.group-member-list-wrapper .scroll-content .group-member .member-name{font-size:12px;width:40px;text-align:center}.group-member-list-wrapper .more{padding:0 20px;border-bottom:1px solid #e7e7e7}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: TimHelperService }]; }, propDecorators: { currentConversation: [{
                type: Input
            }] } });

class GroupProfileComponent {
    constructor(timHelper, store) {
        this.timHelper = timHelper;
        this.store = store;
        this.showEditFaceUrl = false;
        this.showEditName = false;
        this.showEditIntroduction = false;
        this.showEditNotification = false;
        this.showEditJoinOption = false;
        this.showEditMessageRemindType = false;
        this.showEditNameCard = false;
        this.showChangeGroupOwner = false;
        this.newOwnerUserID = '';
        this.messageRemindTypeMap = {
            AcceptAndNotify: '接收消息并提示',
            AcceptNotNotify: '接收消息但不提示',
            Discard: '屏蔽消息',
        };
        this.joinOptionMap = {
            FreeAccess: '自由加入',
            NeedPermission: '需要验证',
            DisableApply: '禁止加群',
        };
        this.active = false;
    }
    ngOnInit() {
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
    inputFocus(el) {
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
        });
    }
    editNameCard() {
        if (this.nameCard.trim().length === 0) {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: '不能设置空的群名片' }));
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
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
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
            this.store.dispatch(showAction({
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
            this.store.dispatch(showAction({
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
            this.store.dispatch(showAction({
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
                    this.store.dispatch(showAction({
                        msgType: MESSAGE_STATUS.success,
                        message: `全体禁言`,
                    }));
                }
                else {
                    this.active = false;
                    this.store.dispatch(showAction({
                        msgType: MESSAGE_STATUS.success,
                        message: `取消全体禁言`,
                    }));
                }
            })
                .catch((error) => {
                this.store.dispatch(showAction({
                    msgType: MESSAGE_STATUS.error,
                    message: error.message,
                }));
            });
        }
        else {
            setTimeout(() => {
                this.muteAllMembers = this.groupProfile.muteAllMembers;
            }, 0);
            this.store.dispatch(showAction({
                msgType: MESSAGE_STATUS.error,
                message: '普通群成员不能对全体禁言',
            }));
        }
    }
}
GroupProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupProfileComponent, deps: [{ token: TimHelperService }, { token: i1.Store }], target: i0.ɵɵFactoryTarget.Component });
GroupProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupProfileComponent, selector: "app-group-profile", inputs: { currentConversation: "currentConversation" }, ngImport: i0, template: "<div>\r\n  <app-group-member-list [currentConversation]=\"currentConversation\"></app-group-member-list>\r\n\r\n  <div class=\"group-info-content\">\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\u7FA4ID</div>\r\n      <div class=\"content\">{{ groupProfile.groupID }}</div>\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u5934\u50CF\r\n        <i nz-icon nzType=\"edit\" nzTheme=\"outline\" *ngIf=\"editable\"\r\n          (click)=\"showEditFaceUrl = true;inputFocus(groupAvatar);$event.stopPropagation()\"\r\n          class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content\" *ngIf=\"!showEditFaceUrl\">\r\n        <im-avatar [src]=\"groupProfile.avatar\"></im-avatar>\r\n      </div>\r\n      <input #groupAvatar [hidden]=\"!showEditFaceUrl\" nz-input [(ngModel)]=\"avatar\"\r\n        placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editFaceUrl()\" (blur)=\"showEditFaceUrl = false\">\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\u7FA4\u7C7B\u578B</div>\r\n      <div class=\"content\">{{ groupType}}</div>\r\n    </div>\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u540D\u79F0\r\n        <i nz-icon nzType=\"edit\" nzTheme=\"outline\" *ngIf=\"editable\" (click)=\"\r\n          showEditName = true;inputFocus(groupName)\" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content text-ellipsis\" [title]=\"groupProfile.name\" *ngIf=\"!showEditName\">\r\n        {{ groupProfile.name || '\u6682\u65E0' }}\r\n      </div>\r\n      <input #groupName [hidden]=\"!showEditName\" autofocus nz-input [(ngModel)]=\"name\"\r\n        placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editName()\" (blur)=\"showEditName = false\">\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u4ECB\u7ECD\r\n        <i nz-icon nzType=\"edit\" nzTheme=\"outline\" *ngIf=\"editable\" (click)=\"\r\n          showEditIntroduction = true;inputFocus(groupIntroduction)\" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"long-content\" [title]=\"groupProfile.introduction\" *ngIf=\"!showEditIntroduction\">\r\n        {{ groupProfile.introduction || '\u6682\u65E0' }}\r\n      </div>\r\n      <input #groupIntroduction [hidden]=\"!showEditIntroduction\" autofocus nz-input\r\n        [(ngModel)]=\"introduction\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editIntroduction()\"\r\n        (blur)=\"showEditIntroduction = false\">\r\n    </div>\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u516C\u544A\r\n        <i nz-icon nzType=\"edit\" nzTheme=\"outline\" *ngIf=\"editable\" (click)=\"\r\n          showEditNotification = true;inputFocus(groupNotification)\r\n        \" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"long-content\" [title]=\"groupProfile.notification\" *ngIf=\"!showEditNotification\">\r\n        {{ groupProfile.notification || '\u6682\u65E0' }}\r\n      </div>\r\n\r\n      <input #groupNotification [hidden]=\"!showEditNotification\" autofocus nz-input\r\n        [(ngModel)]=\"notification\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editNotification()\"\r\n        (blur)=\"showEditNotification = false\">\r\n    </div>\r\n    <div class=\"info-item\" *ngIf=\"groupProfile.type !== 'Private'\">\r\n      <div class=\"label\">\r\n        \u7533\u8BF7\u52A0\u7FA4\u65B9\u5F0F\r\n        <i nz-icon nzType=\"edit\" *ngIf=\"editable\" (click)=\"\r\n          showEditJoinOption = true;\r\n        \" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content\" *ngIf=\"!showEditJoinOption\">{{ joinOptionMap[groupProfile.joinOption] }}\r\n      </div>\r\n      <nz-select [ngStyle]=\"{'width': '100%'}\" [(ngModel)]=\"joinOption\"\r\n        (ngModelChange)=\"editJoinOption()\" (blur)=\"showEditJoinOption = false\"\r\n        [hidden]=\"!showEditJoinOption\">\r\n        <nz-option nzValue=\"FreeAccess\" nzLabel=\"\u81EA\u7531\u52A0\u5165\"></nz-option>\r\n        <nz-option nzValue=\"NeedPermission\" nzLabel=\"\u9700\u8981\u9A8C\u8BC1\"></nz-option>\r\n        <nz-option nzValue=\"DisableApply\" nzLabel=\"\u7981\u6B62\u52A0\u7FA4\"></nz-option>\r\n      </nz-select>\r\n    </div>\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u6D88\u606F\u63D0\u793A\u7C7B\u578B\r\n        <i nz-icon nzType=\"edit\" *ngIf=\"editable\" (click)=\"\r\n          showEditMessageRemindType = true;\r\n        \" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content\" *ngIf=\"!showEditMessageRemindType\">\r\n        {{ messageRemindTypeMap[this.groupProfile.selfInfo.messageRemindType] }}\r\n      </div>\r\n\r\n      <nz-select [ngStyle]=\"{'width': '100%'}\" [(ngModel)]=\"messageRemindType\"\r\n        (ngModelChange)=\"editMessageRemindType()\" (blur)=\"showEditMessageRemindType = false\"\r\n        [hidden]=\"!showEditMessageRemindType\">\r\n        <nz-option nzValue=\"AcceptAndNotify\" nzLabel=\"\u63A5\u6536\u6D88\u606F\u5E76\u63D0\u793A\"></nz-option>\r\n        <nz-option nzValue=\"AcceptNotNotify\" nzLabel=\"\u63A5\u6536\u6D88\u606F\u4F46\u4E0D\u63D0\u793A\"></nz-option>\r\n        <nz-option nzValue=\"Discard\" nzLabel=\"\u5C4F\u853D\u6D88\u606F\"></nz-option>\r\n      </nz-select>\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u6211\u7684\u7FA4\u540D\u7247\r\n        <i nz-icon nzType=\"edit\" (click)=\"showEditNameCard = true;inputFocus(groupNameCard)\"\r\n          class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content cursor-pointer\" *ngIf=\"!showEditNameCard\">\r\n        {{ groupProfile.selfInfo.nameCard || '\u6682\u65E0' }}\r\n      </div>\r\n\r\n      <input #groupNameCard [hidden]=\"!showEditNameCard\" autofocus nz-input [(ngModel)]=\"nameCard\"\r\n        placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editNameCard()\" (blur)=\"showEditNameCard = false\">\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\" [ngClass]=\"{'active' : active}\">\u5168\u4F53\u7981\u8A00</div>\r\n      <nz-switch [(ngModel)]=\"muteAllMembers\" (ngModelChange)=\"changeMuteStatus()\">\r\n      </nz-switch>\r\n    </div>\r\n    <div *ngIf=\"isOwner\">\r\n      <a type=\"text\" (click)=\"showChangeGroupOwner = true\">\u8F6C\u8BA9\u7FA4\u7EC4</a>\r\n      <input [hidden]=\"!showChangeGroupOwner\" autofocus nz-input [(ngModel)]=\"newOwnerUserID\"\r\n        placeholder=\"\u65B0\u7FA4\u4E3B\u7684userID\" (keydown.enter)=\"changeOwner()\"\r\n        (blur)=\"showChangeGroupOwner = false\">\r\n    </div>\r\n    <div>\r\n      <a [ngStyle]=\"{'color': 'red'}\" (click)=\"quitGroup()\">\u9000\u51FA\u7FA4\u7EC4</a>\r\n    </div>\r\n    <div *ngIf=\"showDissmissGroup\">\r\n      <a type=\"text\" [ngStyle]=\"{'color': 'red'}\" (click)=\"dismissGroup()\">\u89E3\u6563\u7FA4\u7EC4</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".group-info-content{padding:10px}.group-info-content im-avatar ::ng-deep .avatar{width:40px;height:40px;border-radius:50%}.edit{cursor:pointer;font-size:16px}.info-item{margin-bottom:12px}.info-item .label{font-size:14px;color:#a5b5c1}.info-item .active{color:#000}.info-item .content{color:#404953;word-wrap:break-word;word-break:break-all}.info-item .long-content{word-wrap:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.cursor-pointer{cursor:pointer}::-webkit-scrollbar{width:0px;height:0px}\n"], components: [{ type: GroupMemberListComponent, selector: "app-group-member-list", inputs: ["currentConversation"] }, { type: AvatarComponent, selector: "im-avatar", inputs: ["shape", "size", "type", "title", "src"] }, { type: i6$3.NzSelectComponent, selector: "nz-select", inputs: ["nzId", "nzSize", "nzOptionHeightPx", "nzOptionOverflowSize", "nzDropdownClassName", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzNotFoundContent", "nzPlaceHolder", "nzMaxTagCount", "nzDropdownRender", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzMenuItemSelectedIcon", "nzTokenSeparators", "nzMaxTagPlaceholder", "nzMaxMultipleCount", "nzMode", "nzFilterOption", "compareWith", "nzAllowClear", "nzBorderless", "nzShowSearch", "nzLoading", "nzAutoFocus", "nzAutoClearSearchValue", "nzServerSearch", "nzDisabled", "nzOpen", "nzBackdrop", "nzOptions", "nzShowArrow"], outputs: ["nzOnSearch", "nzScrollToBottom", "nzOpenChange", "nzBlur", "nzFocus"], exportAs: ["nzSelect"] }, { type: i6$3.NzOptionComponent, selector: "nz-option", inputs: ["nzLabel", "nzValue", "nzDisabled", "nzHide", "nzCustomContent"], exportAs: ["nzOption"] }, { type: i6$5.NzSwitchComponent, selector: "nz-switch", inputs: ["nzLoading", "nzDisabled", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize"], exportAs: ["nzSwitch"] }], directives: [{ type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6$1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i9.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i5$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-profile', template: "<div>\r\n  <app-group-member-list [currentConversation]=\"currentConversation\"></app-group-member-list>\r\n\r\n  <div class=\"group-info-content\">\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\u7FA4ID</div>\r\n      <div class=\"content\">{{ groupProfile.groupID }}</div>\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u5934\u50CF\r\n        <i nz-icon nzType=\"edit\" nzTheme=\"outline\" *ngIf=\"editable\"\r\n          (click)=\"showEditFaceUrl = true;inputFocus(groupAvatar);$event.stopPropagation()\"\r\n          class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content\" *ngIf=\"!showEditFaceUrl\">\r\n        <im-avatar [src]=\"groupProfile.avatar\"></im-avatar>\r\n      </div>\r\n      <input #groupAvatar [hidden]=\"!showEditFaceUrl\" nz-input [(ngModel)]=\"avatar\"\r\n        placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editFaceUrl()\" (blur)=\"showEditFaceUrl = false\">\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\u7FA4\u7C7B\u578B</div>\r\n      <div class=\"content\">{{ groupType}}</div>\r\n    </div>\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u540D\u79F0\r\n        <i nz-icon nzType=\"edit\" nzTheme=\"outline\" *ngIf=\"editable\" (click)=\"\r\n          showEditName = true;inputFocus(groupName)\" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content text-ellipsis\" [title]=\"groupProfile.name\" *ngIf=\"!showEditName\">\r\n        {{ groupProfile.name || '\u6682\u65E0' }}\r\n      </div>\r\n      <input #groupName [hidden]=\"!showEditName\" autofocus nz-input [(ngModel)]=\"name\"\r\n        placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editName()\" (blur)=\"showEditName = false\">\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u4ECB\u7ECD\r\n        <i nz-icon nzType=\"edit\" nzTheme=\"outline\" *ngIf=\"editable\" (click)=\"\r\n          showEditIntroduction = true;inputFocus(groupIntroduction)\" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"long-content\" [title]=\"groupProfile.introduction\" *ngIf=\"!showEditIntroduction\">\r\n        {{ groupProfile.introduction || '\u6682\u65E0' }}\r\n      </div>\r\n      <input #groupIntroduction [hidden]=\"!showEditIntroduction\" autofocus nz-input\r\n        [(ngModel)]=\"introduction\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editIntroduction()\"\r\n        (blur)=\"showEditIntroduction = false\">\r\n    </div>\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u516C\u544A\r\n        <i nz-icon nzType=\"edit\" nzTheme=\"outline\" *ngIf=\"editable\" (click)=\"\r\n          showEditNotification = true;inputFocus(groupNotification)\r\n        \" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"long-content\" [title]=\"groupProfile.notification\" *ngIf=\"!showEditNotification\">\r\n        {{ groupProfile.notification || '\u6682\u65E0' }}\r\n      </div>\r\n\r\n      <input #groupNotification [hidden]=\"!showEditNotification\" autofocus nz-input\r\n        [(ngModel)]=\"notification\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editNotification()\"\r\n        (blur)=\"showEditNotification = false\">\r\n    </div>\r\n    <div class=\"info-item\" *ngIf=\"groupProfile.type !== 'Private'\">\r\n      <div class=\"label\">\r\n        \u7533\u8BF7\u52A0\u7FA4\u65B9\u5F0F\r\n        <i nz-icon nzType=\"edit\" *ngIf=\"editable\" (click)=\"\r\n          showEditJoinOption = true;\r\n        \" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content\" *ngIf=\"!showEditJoinOption\">{{ joinOptionMap[groupProfile.joinOption] }}\r\n      </div>\r\n      <nz-select [ngStyle]=\"{'width': '100%'}\" [(ngModel)]=\"joinOption\"\r\n        (ngModelChange)=\"editJoinOption()\" (blur)=\"showEditJoinOption = false\"\r\n        [hidden]=\"!showEditJoinOption\">\r\n        <nz-option nzValue=\"FreeAccess\" nzLabel=\"\u81EA\u7531\u52A0\u5165\"></nz-option>\r\n        <nz-option nzValue=\"NeedPermission\" nzLabel=\"\u9700\u8981\u9A8C\u8BC1\"></nz-option>\r\n        <nz-option nzValue=\"DisableApply\" nzLabel=\"\u7981\u6B62\u52A0\u7FA4\"></nz-option>\r\n      </nz-select>\r\n    </div>\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u7FA4\u6D88\u606F\u63D0\u793A\u7C7B\u578B\r\n        <i nz-icon nzType=\"edit\" *ngIf=\"editable\" (click)=\"\r\n          showEditMessageRemindType = true;\r\n        \" class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content\" *ngIf=\"!showEditMessageRemindType\">\r\n        {{ messageRemindTypeMap[this.groupProfile.selfInfo.messageRemindType] }}\r\n      </div>\r\n\r\n      <nz-select [ngStyle]=\"{'width': '100%'}\" [(ngModel)]=\"messageRemindType\"\r\n        (ngModelChange)=\"editMessageRemindType()\" (blur)=\"showEditMessageRemindType = false\"\r\n        [hidden]=\"!showEditMessageRemindType\">\r\n        <nz-option nzValue=\"AcceptAndNotify\" nzLabel=\"\u63A5\u6536\u6D88\u606F\u5E76\u63D0\u793A\"></nz-option>\r\n        <nz-option nzValue=\"AcceptNotNotify\" nzLabel=\"\u63A5\u6536\u6D88\u606F\u4F46\u4E0D\u63D0\u793A\"></nz-option>\r\n        <nz-option nzValue=\"Discard\" nzLabel=\"\u5C4F\u853D\u6D88\u606F\"></nz-option>\r\n      </nz-select>\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\">\r\n        \u6211\u7684\u7FA4\u540D\u7247\r\n        <i nz-icon nzType=\"edit\" (click)=\"showEditNameCard = true;inputFocus(groupNameCard)\"\r\n          class=\"edit\"></i>\r\n      </div>\r\n      <div class=\"content cursor-pointer\" *ngIf=\"!showEditNameCard\">\r\n        {{ groupProfile.selfInfo.nameCard || '\u6682\u65E0' }}\r\n      </div>\r\n\r\n      <input #groupNameCard [hidden]=\"!showEditNameCard\" autofocus nz-input [(ngModel)]=\"nameCard\"\r\n        placeholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"editNameCard()\" (blur)=\"showEditNameCard = false\">\r\n    </div>\r\n\r\n    <div class=\"info-item\">\r\n      <div class=\"label\" [ngClass]=\"{'active' : active}\">\u5168\u4F53\u7981\u8A00</div>\r\n      <nz-switch [(ngModel)]=\"muteAllMembers\" (ngModelChange)=\"changeMuteStatus()\">\r\n      </nz-switch>\r\n    </div>\r\n    <div *ngIf=\"isOwner\">\r\n      <a type=\"text\" (click)=\"showChangeGroupOwner = true\">\u8F6C\u8BA9\u7FA4\u7EC4</a>\r\n      <input [hidden]=\"!showChangeGroupOwner\" autofocus nz-input [(ngModel)]=\"newOwnerUserID\"\r\n        placeholder=\"\u65B0\u7FA4\u4E3B\u7684userID\" (keydown.enter)=\"changeOwner()\"\r\n        (blur)=\"showChangeGroupOwner = false\">\r\n    </div>\r\n    <div>\r\n      <a [ngStyle]=\"{'color': 'red'}\" (click)=\"quitGroup()\">\u9000\u51FA\u7FA4\u7EC4</a>\r\n    </div>\r\n    <div *ngIf=\"showDissmissGroup\">\r\n      <a type=\"text\" [ngStyle]=\"{'color': 'red'}\" (click)=\"dismissGroup()\">\u89E3\u6563\u7FA4\u7EC4</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".group-info-content{padding:10px}.group-info-content im-avatar ::ng-deep .avatar{width:40px;height:40px;border-radius:50%}.edit{cursor:pointer;font-size:16px}.info-item{margin-bottom:12px}.info-item .label{font-size:14px;color:#a5b5c1}.info-item .active{color:#000}.info-item .content{color:#404953;word-wrap:break-word;word-break:break-all}.info-item .long-content{word-wrap:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.cursor-pointer{cursor:pointer}::-webkit-scrollbar{width:0px;height:0px}\n"] }]
        }], ctorParameters: function () { return [{ type: TimHelperService }, { type: i1.Store }]; }, propDecorators: { currentConversation: [{
                type: Input
            }] } });

class ConversationProfileComponent {
    constructor(store) {
        this.store = store;
        this.TIM = TIM$1;
    }
    ngOnInit() {
        this.subscription = this.store.select(currentConversationSelector)
            .subscribe(res => {
            this.currentConversation = res;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ConversationProfileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConversationProfileComponent, deps: [{ token: i1.Store }], target: i0.ɵɵFactoryTarget.Component });
ConversationProfileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ConversationProfileComponent, selector: "app-conversation-profile", ngImport: i0, template: "<div class=\"conversation-profile-wrapper\">\r\n  <app-user-profile *ngIf=\"currentConversation.type === TIM.TYPES.CONV_C2C\"\r\n    [userProfile]=\"currentConversation.userProfile\"></app-user-profile>\r\n\r\n  <app-group-profile *ngIf=\"currentConversation.type === TIM.TYPES.CONV_GROUP\"\r\n    [currentConversation]=\"currentConversation\"></app-group-profile>\r\n</div>\r\n", styles: [".conversation-profile-wrapper{background-color:#fff;height:100%;overflow-y:scroll}::-webkit-scrollbar{width:0px;height:0px}\n"], components: [{ type: UserProfileComponent, selector: "app-user-profile", inputs: ["userProfile"] }, { type: GroupProfileComponent, selector: "app-group-profile", inputs: ["currentConversation"] }], directives: [{ type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ConversationProfileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-conversation-profile', template: "<div class=\"conversation-profile-wrapper\">\r\n  <app-user-profile *ngIf=\"currentConversation.type === TIM.TYPES.CONV_C2C\"\r\n    [userProfile]=\"currentConversation.userProfile\"></app-user-profile>\r\n\r\n  <app-group-profile *ngIf=\"currentConversation.type === TIM.TYPES.CONV_GROUP\"\r\n    [currentConversation]=\"currentConversation\"></app-group-profile>\r\n</div>\r\n", styles: [".conversation-profile-wrapper{background-color:#fff;height:100%;overflow-y:scroll}::-webkit-scrollbar{width:0px;height:0px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }]; } });

class TencentTimComponent {
    constructor(store) {
        this.store = store;
        this.hiddenWindow = false;
        this.message = new EventEmitter();
        this.hiddenWindowChange = new EventEmitter();
        this.showDetail = false;
    }
    ngOnInit() {
        this.subscription = this.store.select(getMessage)
            .subscribe((res) => {
            this.message.emit(res);
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TencentTimComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimComponent, deps: [{ token: i1.Store }], target: i0.ɵɵFactoryTarget.Component });
TencentTimComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: TencentTimComponent, selector: "ngx-tencent-tim", inputs: { hiddenWindow: "hiddenWindow" }, outputs: { message: "message", hiddenWindowChange: "hiddenWindowChange" }, ngImport: i0, template: "<div class=\"chat-wrapper\" cdkDrag (click)=\"showDetail=false\" [hidden]=\"hiddenWindow\">\r\n  <div class=\"chat-side\" cdkDragHandle>\r\n    <app-side-bar></app-side-bar>\r\n  </div>\r\n\r\n  <div class=\"chat-content\">\r\n    <div cdkDragHandle class=\"chat-title\">\r\n      <lib-title (detailBtnClick)=\"showDetail=!showDetail\"\r\n        (minimizeClick)=\"hiddenWindow=true;hiddenWindowChange.emit(true)\">\r\n      </lib-title>\r\n    </div>\r\n    <div class=\"chat-window\">\r\n      <app-current-conversation></app-current-conversation>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"chat-profile\" *ngIf=\"showDetail\" (click)=\"$event.stopPropagation()\">\r\n    <app-conversation-profile></app-conversation-profile>\r\n  </div>\r\n</div>\r\n", styles: [".chat-wrapper{height:80vh;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end}.chat-side{box-shadow:0 11px 20px #0000004d}.chat-content{display:flex;flex-direction:column;box-shadow:0 11px 20px #0000004d}.chat-content .chat-window{width:50rem;height:75vh;overflow:hidden;border-top:1px solid #e7e7e7}.chat-profile{height:80vh;width:14vw;overflow-y:scroll;border:1px solid #e7e7e7;flex-shrink:0;box-shadow:0 11px 20px #0000004d}\n"], components: [{ type: SideBarComponent, selector: "app-side-bar" }, { type: TitleComponent, selector: "lib-title", outputs: ["detailBtnClick", "minimizeClick"] }, { type: CurrentConversationComponent, selector: "app-current-conversation" }, { type: ConversationProfileComponent, selector: "app-conversation-profile" }], directives: [{ type: i6$6.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { type: i6$6.CdkDragHandle, selector: "[cdkDragHandle]", inputs: ["cdkDragHandleDisabled"] }, { type: i5$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-tencent-tim', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"chat-wrapper\" cdkDrag (click)=\"showDetail=false\" [hidden]=\"hiddenWindow\">\r\n  <div class=\"chat-side\" cdkDragHandle>\r\n    <app-side-bar></app-side-bar>\r\n  </div>\r\n\r\n  <div class=\"chat-content\">\r\n    <div cdkDragHandle class=\"chat-title\">\r\n      <lib-title (detailBtnClick)=\"showDetail=!showDetail\"\r\n        (minimizeClick)=\"hiddenWindow=true;hiddenWindowChange.emit(true)\">\r\n      </lib-title>\r\n    </div>\r\n    <div class=\"chat-window\">\r\n      <app-current-conversation></app-current-conversation>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"chat-profile\" *ngIf=\"showDetail\" (click)=\"$event.stopPropagation()\">\r\n    <app-conversation-profile></app-conversation-profile>\r\n  </div>\r\n</div>\r\n", styles: [".chat-wrapper{height:80vh;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end}.chat-side{box-shadow:0 11px 20px #0000004d}.chat-content{display:flex;flex-direction:column;box-shadow:0 11px 20px #0000004d}.chat-content .chat-window{width:50rem;height:75vh;overflow:hidden;border-top:1px solid #e7e7e7}.chat-profile{height:80vh;width:14vw;overflow-y:scroll;border:1px solid #e7e7e7;flex-shrink:0;box-shadow:0 11px 20px #0000004d}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }]; }, propDecorators: { hiddenWindow: [{
                type: Input
            }], message: [{
                type: Output
            }], hiddenWindowChange: [{
                type: Output
            }] } });

const initialState$4 = {
    currentConversation: {},
    currentMessageList: [],
    nextReqMessageID: '',
    isCompleted: false,
    conversationList: []
};
const _conversationReducer = createReducer(initialState$4, on(updateCurrentConversationAction, (state, { conversation }) => {
    return Object.assign(Object.assign({}, state), { currentConversation: conversation, currentMessageList: [], nextReqMessageID: '', isCompleted: false // 当前会话消息列表是否已经拉完了所有消息
     });
}), on(updateMessageAction, (state, { nextReqMessageID, isCompleted, currentMessageList }) => {
    return Object.assign(Object.assign({}, state), { currentMessageList,
        nextReqMessageID,
        isCompleted // 当前会话消息列表是否已经拉完了所有消息
     });
}), on(updateConversationListAction, (state, { conversationList }) => {
    return Object.assign(Object.assign({}, state), { conversationList });
}), on(resetCurrentConversationAction, (state) => (Object.assign(Object.assign({}, state), { currentConversation: {} }))), on(pushCurrentMessageListAction, (state, { message }) => {
    // 还没当前会话，则跳过
    if (!state.currentConversation.conversationID) {
        return Object.assign({}, state);
    }
    if (Array.isArray(message)) {
        // 筛选出当前会话的消息
        const result = message.filter(item => item.conversationID === state.currentConversation.conversationID);
        const currentMessageList = [...state.currentMessageList, ...result];
        return Object.assign(Object.assign({}, state), { currentMessageList });
    }
    else if (message.conversationID === state.currentConversation.conversationID) {
        const currentMessageList = [...state.currentMessageList, message];
        return Object.assign(Object.assign({}, state), { currentMessageList });
    }
    return Object.assign({}, state);
}), on(removeMessageAction, (state, { message }) => {
    const index = state.currentMessageList.findIndex(({ ID }) => ID === message.ID);
    if (index >= 0) {
        const currentMessageList = state.currentMessageList;
        currentMessageList.splice(index, 1);
        return Object.assign(Object.assign({}, state), { currentMessageList });
    }
    return Object.assign({}, state);
}), on(resetConversationAction, (state) => {
    return Object.assign(state, {
        currentConversation: {},
        currentMessageList: [],
        nextReqMessageID: '',
        isCompleted: false,
        conversationList: []
    });
}));
function conversationReducer(state, action) {
    return _conversationReducer(state, action);
}
const conversationIDInitialState = {
    conversationID: '',
};
const _conversationIDReducer = createReducer(conversationIDInitialState, on(checkoutConversationAction, (state, { conversationID }) => ({
    conversationID
})));
function conversationIDReducer(state, action) {
    return _conversationIDReducer(state, action);
}

const initialState$3 = {
    groupList: [],
    currentMemberList: [],
    createGroupModelVisible: false
};
const _groupReducer = createReducer(initialState$3, on(updateGroupListAction, (state, { groupList }) => {
    return Object.assign(Object.assign({}, state), { groupList });
}), on(updateCurrentMemberListAction, (state, { currentMemberList }) => {
    return Object.assign(Object.assign({}, state), { currentMemberList });
}), on(resetCurrentMemberListAction, (state) => {
    return Object.assign(Object.assign({}, state), { currentMemberList: [] });
}));
function groupReducer(state, action) {
    return _groupReducer(state, action);
}

const initialState$2 = {
    isLogin: false,
};
const _loginReducer = createReducer(initialState$2, on(loginAction, (state, { isLogin }) => (Object.assign(Object.assign({}, state), { isLogin }))));
function LoginReducer(state, action) {
    return _loginReducer(state, action);
}

const initialState$1 = {
    type: 'error',
    message: '',
};
const _showMessageReducer = createReducer(initialState$1, on(showAction, (state, { msgType, message }) => ({ type: msgType, message })));
function showMessageReducer(state, action) {
    return _showMessageReducer(state, action);
}

const initialState = {
    currentUserProfile: {},
    isLogin: false,
    isSDKReady: false,
    userID: 0,
    userSig: '',
    sdkAppID: 0,
};
const _userReducer = createReducer(initialState, on(SDKReadyAction, (state, { SDKReadyState }) => (Object.assign(Object.assign({}, state), { isSDKReady: SDKReadyState }))), on(updateCurrentUserProfileAction, (state, { profile }) => (Object.assign(Object.assign({}, state), { currentUserProfile: profile }))), on(resetUserAction, (state) => (Object.assign(Object.assign({}, state), initialState))));
function UserReducer(state, action) {
    return _userReducer(state, action);
}

// register the reducer functions
const reducers = {
    login: LoginReducer,
    user: UserReducer,
    message: showMessageReducer,
    currentConversationID: conversationIDReducer,
    conversation: conversationReducer,
    group: groupReducer
};

class TencentTimModule {
    static forRoot(config) {
        return {
            ngModule: TencentTimModule,
            providers: [
                {
                    provide: NG_Tim_CONFIG,
                    useValue: config
                }
            ],
        };
    }
}
TencentTimModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TencentTimModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimModule, declarations: [TencentTimComponent,
        SideBarComponent,
        ConversationListComponent,
        MyProfileComponent,
        ConversationItemComponent,
        AvatarComponent,
        CurrentConversationComponent,
        MessageItemComponent,
        MessageStatusIconComponent,
        TextElementComponent,
        MessageBubbleComponent,
        MessageFooterComponent,
        MessageSendBoxComponent,
        ImageElementComponent,
        FileElementComponent,
        ConversationProfileComponent,
        UserProfileComponent,
        GroupListComponent,
        GroupTipElementComponent,
        MessageHeaderComponent,
        CustomElementComponent,
        GroupSystemNoticeElementComponent,
        GroupProfileComponent,
        GroupMemberListComponent,
        GroupItemComponent,
        GroupMemberInfoComponent,
        TitleComponent,
        CreateGroupComponent,
        ApprovalJoinGroupComponent,
        ProfileCardComponent,
        EditProfileComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
        NzPopoverModule,
        NzToolTipModule,
        NzModalModule,
        NzImageModule,
        NzFormModule,
        NzInputModule,
        NzPopconfirmModule,
        NzInputNumberModule,
        NzButtonModule,
        NzIconModule,
        NzMessageModule,
        NzSelectModule,
        NzBadgeModule,
        NzCollapseModule,
        NzRadioModule,
        NzAvatarModule,
        NzDropDownModule,
        NzSwitchModule, i1.StoreRootModule], exports: [TencentTimComponent] });
TencentTimModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimModule, providers: [ReEditMessageService], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            DragDropModule,
            NzPopoverModule,
            NzToolTipModule,
            NzModalModule,
            NzImageModule,
            NzFormModule,
            NzInputModule,
            NzPopconfirmModule,
            NzInputNumberModule,
            NzButtonModule,
            NzIconModule,
            NzMessageModule,
            NzSelectModule,
            NzBadgeModule,
            NzCollapseModule,
            NzRadioModule,
            NzAvatarModule,
            NzDropDownModule,
            NzSwitchModule,
            StoreModule.forRoot(reducers, {
                runtimeChecks: {
                    strictStateImmutability: false,
                    strictActionImmutability: false,
                    strictStateSerializability: false,
                    strictActionSerializability: false,
                }
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TencentTimComponent,
                        SideBarComponent,
                        ConversationListComponent,
                        MyProfileComponent,
                        ConversationItemComponent,
                        AvatarComponent,
                        CurrentConversationComponent,
                        MessageItemComponent,
                        MessageStatusIconComponent,
                        TextElementComponent,
                        MessageBubbleComponent,
                        MessageFooterComponent,
                        MessageSendBoxComponent,
                        ImageElementComponent,
                        FileElementComponent,
                        ConversationProfileComponent,
                        UserProfileComponent,
                        GroupListComponent,
                        GroupTipElementComponent,
                        MessageHeaderComponent,
                        CustomElementComponent,
                        GroupSystemNoticeElementComponent,
                        GroupProfileComponent,
                        GroupMemberListComponent,
                        GroupItemComponent,
                        GroupMemberInfoComponent,
                        TitleComponent,
                        CreateGroupComponent,
                        ApprovalJoinGroupComponent,
                        ProfileCardComponent,
                        EditProfileComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DragDropModule,
                        NzPopoverModule,
                        NzToolTipModule,
                        NzModalModule,
                        NzImageModule,
                        NzFormModule,
                        NzInputModule,
                        NzPopconfirmModule,
                        NzInputNumberModule,
                        NzButtonModule,
                        NzIconModule,
                        NzMessageModule,
                        NzSelectModule,
                        NzBadgeModule,
                        NzCollapseModule,
                        NzRadioModule,
                        NzAvatarModule,
                        NzDropDownModule,
                        NzSwitchModule,
                        StoreModule.forRoot(reducers, {
                            runtimeChecks: {
                                strictStateImmutability: false,
                                strictActionImmutability: false,
                                strictStateSerializability: false,
                                strictActionSerializability: false,
                            }
                        }),
                    ],
                    exports: [
                        TencentTimComponent
                    ],
                    providers: [ReEditMessageService]
                }]
        }] });

/*
 * Public API Surface of ngx-tencent-im
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TencentTimComponent, TencentTimModule, TimHelperService };
//# sourceMappingURL=ngx-tencent-im.mjs.map
