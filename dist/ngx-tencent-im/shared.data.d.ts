import { InjectionToken } from '@angular/core';
import { NgTimConfig } from './type';
export declare const NG_Tim_CONFIG: InjectionToken<NgTimConfig>;
export declare enum MESSAGE_STATUS {
    success = "success",
    info = "info",
    warning = "warning",
    error = "error"
}
export declare enum CONVERSATION_TYPE {
    client = "C2C",
    group = "GROUP",
    system = "@TIM#SYSTEM"
}
export declare enum TIM_TYPES {
    GRP_WORK = "Private",
    GRP_PUBLIC = "Public",
    GRP_MEETING = "ChatRoom",
    GRP_AVCHATROOM = "AVChatRoom"
}
export declare const TIM: {
    TYPES: {
        MSG_TEXT: string;
        MSG_IMAGE: string;
        MSG_SOUND: string;
        MSG_AUDIO: string;
        MSG_FILE: string;
        MSG_FACE: string;
        MSG_VIDEO: string;
        MSG_GEO: string;
        MSG_GRP_TIP: string;
        MSG_GRP_SYS_NOTICE: string;
        MSG_CUSTOM: string;
        MSG_MERGER: string;
        MSG_PRIORITY_HIGH: string;
        MSG_PRIORITY_NORMAL: string;
        MSG_PRIORITY_LOW: string;
        MSG_PRIORITY_LOWEST: string;
        CONV_C2C: string;
        CONV_GROUP: string;
        CONV_SYSTEM: string;
        CONV_AT_ME: number;
        CONV_AT_ALL: number;
        CONV_AT_ALL_AT_ME: number;
        GRP_PRIVATE: string;
        GRP_WORK: string;
        GRP_PUBLIC: string;
        GRP_CHATROOM: string;
        GRP_MEETING: string;
        GRP_AVCHATROOM: string;
        GRP_MBR_ROLE_OWNER: string;
        GRP_MBR_ROLE_ADMIN: string;
        GRP_MBR_ROLE_MEMBER: string;
        GRP_TIP_MBR_JOIN: number;
        GRP_TIP_MBR_QUIT: number;
        GRP_TIP_MBR_KICKED_OUT: number;
        GRP_TIP_MBR_SET_ADMIN: number;
        GRP_TIP_MBR_CANCELED_ADMIN: number;
        GRP_TIP_GRP_PROFILE_UPDATED: number;
        GRP_TIP_MBR_PROFILE_UPDATED: number;
        MSG_REMIND_ACPT_AND_NOTE: string;
        MSG_REMIND_ACPT_NOT_NOTE: string;
        MSG_REMIND_DISCARD: string;
        GENDER_UNKNOWN: string;
        GENDER_FEMALE: string;
        GENDER_MALE: string;
        KICKED_OUT_MULT_ACCOUNT: string;
        KICKED_OUT_MULT_DEVICE: string;
        KICKED_OUT_USERSIG_EXPIRED: string;
        ALLOW_TYPE_ALLOW_ANY: string;
        ALLOW_TYPE_NEED_CONFIRM: string;
        ALLOW_TYPE_DENY_ANY: string;
        FORBID_TYPE_NONE: string;
        FORBID_TYPE_SEND_OUT: string;
        JOIN_OPTIONS_FREE_ACCESS: string;
        JOIN_OPTIONS_NEED_PERMISSION: string;
        JOIN_OPTIONS_DISABLE_APPLY: string;
        JOIN_STATUS_SUCCESS: string;
        JOIN_STATUS_ALREADY_IN_GROUP: string;
        JOIN_STATUS_WAIT_APPROVAL: string;
        GRP_PROFILE_OWNER_ID: string;
        GRP_PROFILE_CREATE_TIME: string;
        GRP_PROFILE_LAST_INFO_TIME: string;
        GRP_PROFILE_MEMBER_NUM: string;
        GRP_PROFILE_MAX_MEMBER_NUM: string;
        GRP_PROFILE_JOIN_OPTION: string;
        GRP_PROFILE_INTRODUCTION: string;
        GRP_PROFILE_NOTIFICATION: string;
        GRP_PROFILE_MUTE_ALL_MBRS: string;
        NET_STATE_CONNECTED: string;
        NET_STATE_CONNECTING: string;
        NET_STATE_DISCONNECTED: string;
        MSG_AT_ALL: string;
    };
    EVENT: {
        SDK_READY: string;
        SDK_NOT_READY: string;
        SDK_DESTROY: string;
        MESSAGE_RECEIVED: string;
        MESSAGE_REVOKED: string;
        MESSAGE_READ_BY_PEER: string;
        CONVERSATION_LIST_UPDATED: string;
        GROUP_LIST_UPDATED: string;
        GROUP_SYSTEM_NOTICE_RECEIVED: string;
        PROFILE_UPDATED: string;
        BLACKLIST_UPDATED: string;
        KICKED_OUT: string;
        ERROR: string;
        NET_STATE_CHANGE: string;
        SDK_RELOAD: string;
    };
    VERSION: string;
};
