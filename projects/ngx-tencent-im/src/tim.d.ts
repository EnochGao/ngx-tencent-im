/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/ban-types */
declare module 'tim-js-sdk' {

  export interface IMResponse<T> {
    code: number;
    data: T;
  }

  export interface TimOptions {
    /**@description 云通信应用的 SDKAppID*/
    // eslint-disable-next-line @typescript-eslint/naming-convention
    SDKAppID: number;
    /**@description 如果您的应用需要在海外使用，请设置为 true，SDK 将替换域名，避免在某些国家或地区被干扰*/
    oversea?: boolean;
  }

  /**@description 消息对象，用于描述一条消息具有的属性，如类型、消息的内容、所属的会话 ID 等。*/
  export interface Message {
    ID: string;
    /**@description 消息类型*/
    type: string;
    /**@description 消息的内容*/
    payload: any;
    /**@description 消息所属的会话 ID*/
    conversationID: string;
    /**@description 消息所属会话的类型*/
    conversationType: string;
    /**@description 接收方的 userID*/
    to: string;
    /**@description 发送方的 userID，在消息发送时，会默认设置为当前登录的用户*/
    from: string;
    /**@description 消息的流向in 为收到的消息out 为发出的消息*/
    flow: string;
    /**@description 消息时间戳。单位：秒*/
    time: number;
    /**@description 消息状态。unSend(未发送)success(发送成功)fail(发送失败)*/
    status: string;
    /**@description 是否被撤回的消息，true 标识被撤回的消息（v2.4.0起支持）*/
    isRevoked: boolean;
    /**@description 消息优先级，用于群聊（v2.4.2起支持）*/
    priority: string;
    /**@description 消息发送者的昵称（v2.6.0起，在 AVChatRoom 内支持，需提前调用 updateMyProfile 设置）*/
    nick: string;
    /**@description 消息发送者的头像地址（v2.6.0起，在 AVChatRoom 内支持，需提前调用 updateMyProfile 设置）*/
    avatar: string;
    /**@description C2C 消息对端是否已读，true 标识对端已读（v2.7.0起支持）*/
    isPeerRead: boolean;
    /**@description 消息发送者的群名片（v2.9.0起支持，也可称之为消息发送者的群昵称），需提前调用 setGroupMemberNameCard 设置*/
    nameCard: string;
    /**@description 群聊时此字段存储被 at 的群成员的 userID（v2.9.0起支持）*/
    atUserList: Array<string>;
    /**@description 消息自定义数据（云端保存，会发送到对端，程序卸载重装后还能拉取到，v2.10.2起支持）*/
    cloudCustomData: string;
    /**@description 是否被删除的消息，true 标识被删除的消息（v2.12.0起支持）*/
    isDeleted: boolean;
    /**@description 是否被第三方回调修改过，true 标识被第三方回调修改过的消息（v2.12.1起支持）*/
    isModified: boolean;
  }

  /**@description 会话对象，用于描述会话具有的属性，如类型、消息未读计数、最新消息等。 */
  export interface Conversation {
    /**@description 会话 ID。会话ID组成方式：
     * - C2C${userID}（单聊）
     * - GROUP${groupID}（群聊）
     * - @TIM#SYSTEM（系统通知会话）
     */
    conversationID: string;
    /**@description	会话类型*/
    type: string;
    /**@description	群组会话的群组类型*/
    subType: string;
    /**@description	未读计数*/
    unreadCount: number;
    /**@description	会话最新的消息*/
    lastMessage: any;
    /**@description	群会话的群组资料*/
    groupProfile: Group;
    /**@description	C2C会话的用户资料*/
    userProfile: Profile;
    /**@description	群会话的 at 信息列表，接入侧可根据此信息在会话列表展示【有人@我】【@所有人】等效果。GroupAtInfo - 群 at 信息结构，v2.9.0 起支持。*/
    groupAtInfoList: Array<any>;
    /**@description	好友备注，只有C2C会话且对端是我的好友，且我设置过此好友的备注才有值（v2.13.0起支持）*/
    remark: string;
    /**@description	会话是否置顶（v2.14.0起支持）*/
    isPinned: boolean;
  }

  /**@description 用户资料对象，用于描述用户具有的属性，如昵称、头像地址、个性签名、性别等，包含标配资料和自定义资料*/
  export interface Profile {
    /**@description 用户账号*/
    userID: string;
    /**@description 昵称，长度不得超过500个字节*/
    nick: string;
    /**@description 性别*/
    gender: string;
    /**@description 生日 uint32 推荐用法：20000101*/
    birthday: number;
    /**@description 所在地 长度不得超过16个字节，推荐用法如下：App 本地定义一套数字到地名的映射关系 后台实际保存的是4个 uint32_t 类型的数字：
     * - 第一个 uint32_t 表示国家
     * - 第二个 uint32_t 用于表示省份
     * - 第三个 uint32_t 用于表示城市
     * - 第四个 uint32_t 用于表示区县
    */
    location: string;
    /**@description 个性签名 长度不得超过500个字节*/
    selfSignature: string;
    /**@description 加好友验证方式*/
    allowType: string;
    /**@description 语言 uint32*/
    language: number;
    /**@description 头像URL，长度不得超过500个字节*/
    avatar: string;
    /**@description 消息设置 uint32 标志位：Bit0：置0表示接收消息，置1则不接收消息*/
    messageSettings: number;
    /**@description 管理员禁止加好友标识*/
    adminForbidType: string;
    /**@description 等级 uint32 建议拆分以保存多种角色的等级信息*/
    level: number;
    /**@description 角色 uint32 建议拆分以保存多种角色信息*/
    role: number;
    /**@description 上次更新时间，用户本地时间*/
    lastUpdatedTime: number;
    /**@description 自定义资料键值对集合，可根据业务侧需要使用，详细请参考: https://cloud.tencent.com/document/product/269/1500#.E8.87.AA.E5.AE.9A.E4.B9.89.E8.B5.84.E6.96.99.E5.AD.97.E6.AE.B5*/
    profileCustomField: Array<any>;
  }

  /**@description 群成员对象，用于描述群成员具有的属性，如 ID、昵称、群内身份、入群时间等。*/
  export interface GroupMember {
    /**@description 群成员 ID*/
    userID: string;
    /**@description 群成员头像 URL*/
    avatar: string;
    /**@description 群成员昵称*/
    nick: string;
    /**@description 群内身份
     * - TIM.TYPES.GRP_MBR_ROLE_OWNER（群主）
     * - TIM.TYPES.GRP_MBR_ROLE_ADMIN（群管理员）
     * - TIM.TYPES.GRP_MBR_ROLE_MEMBER（群普通成员）
    */
    role: string;
    /**@description 入群时间*/
    joinTime: number;
    /**@description 群名片*/
    nameCard: string;
    /**@description 禁言截止时间戳，单位: 秒
     * - 禁言状态：muteUntil 大于当前时间
     * - 未禁言状态：muteUntil 小于或等于当前时间
    */
    muteUntil: number;
    /**@description 群成员自定义字段。*/
    memberCustomField: Array<any>;
  }

  /**@description 群组对象，用于描述群组具有的属性，如类型、群组公告、创建时间等 */
  export interface Group {
    /**@description 群组的唯一标识，群组 ID，App 内保证唯一，其格式前缀为 @TGS#。另外，App 亦可自定义群组 ID*/
    groupID: string;
    /**@description 群组名称，最长30字节，不可调整*/
    name: string;
    /**@description 群组头像 URL，最长100字节，不可调整*/
    avatar: string;
    /**@description 群组类型，当前 SDK 支持的类型如下：
     * - TIM.TYPES.GRP_WORK 	好友工作群
     * - TIM.TYPES.GRP_PUBLIC 陌生人社交群
     * - TIM.TYPES.GRP_MEETING  临时会议群
     * - TIM.TYPES.GRP_AVCHATROOM  直播群
     */
    type: string;

    /**@description 群组简介，最长120字节，不可调整*/
    introduction: string;
    /**@description 群组公告，最长150字节，不可调整*/
    notification: string;
    /**@description 群主 ID*/
    ownerID: string;
    /**@description 群组的创建时间 */
    createTime: number;
    /**@description 群资料的每次变都会增加该值 */
    infoSequence: number;
    /**@description 群组最后一次信息变更时间 */
    lastInfoTime: number;
    /**@description 当前用户在群组中的信息 */
    selfInfo: {
      /**@description 角色 */
      role: string;
      /**@description 消息接收选项 */
      messageRemindType: string;
      /**@description 入群时间 */
      joinTime: number;
      /**@description 群名片 */
      nameCard: string;
    };

    /**@description 群组最后一条消息。注意：若会话列表中没有该群组，则该对象只有 lastTime 有值，其他值为空。 */
    lastMessage: {
      /**@description 群组最后一条消息的时间戳，单位：秒  */
      lastTime: number;
      /**@description 当前群组类型会话的最新消息的 Seq */
      lastSequence: number;
      /**@description 群组最后一条消息的来源用户  */
      fromAccount: number;
      /**@description 用于展示的群组最后一条消息的简要内容，文本则展示原内容，图片则展示“[图片]”。  */
      messageForShow: string;
    };

    /**@description 群内下一条消息的 Seq，群组内每一条消息都有一条唯一的消息 Seq，且该 Seq 是按照发消息顺序而连续的。从 1 开始，群内每增加一条消息，nextMessageSeq 就会增加 1 */
    nextMessageSeq: number;
    /**@deprecated Deprecated: 当前成员数量  */
    memberNum: number;
    /**@description 当前成员数量*/
    memberCount: number;
    /**@deprecated 	Deprecated: 最大成员数量*/
    maxMemberNum: number;
    /**@description 设置全体禁言，true 表示全体禁言，false 表示取消全体禁言，v2.6.2 起支持*/
    muteAllMembers: boolean;
    /**@description 申请加群选项。
     * - TIM.TYPES.JOIN_OPTIONS_FREE_ACCESS（自由加入，直播群固定为该值）
     * - TIM.TYPES.JOIN_OPTIONS_NEED_PERMISSION（需要验证）
     * - TIM.TYPES.JOIN_OPTIONS_DISABLE_APPLY（禁止加群，好友工作群固定为该值）
    */
    joinOption: string;
    /**@description 群组自定义字段。默认情况是没有的。开通群组维度的自定义字段详情请参见 自定义字段*/
    groupCustomField: Array<any>;

  }

  export default class TIM {

    static create(options: TimOptions): TIM;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    static EVENT: {
      SDK_READY: 'sdkStateReady';
      SDK_NOT_READY: 'sdkStateNotReady';
      SDK_DESTROY: 'sdkDestroy';
      MESSAGE_RECEIVED: 'onMessageReceived';
      MESSAGE_MODIFIED: 'onMessageModified';
      MESSAGE_REVOKED: 'onMessageRevoked';
      MESSAGE_READ_BY_PEER: 'onMessageReadByPeer';
      CONVERSATION_LIST_UPDATED: 'onConversationListUpdated';
      GROUP_LIST_UPDATED: 'onGroupListUpdated';
      GROUP_SYSTEM_NOTICE_RECEIVED: 'receiveGroupSystemNotice';
      GROUP_ATTRIBUTES_UPDATED: 'groupAttributesUpdated';
      PROFILE_UPDATED: 'onProfileUpdated';
      BLACKLIST_UPDATED: 'blacklistUpdated';
      FRIEND_LIST_UPDATED: 'onFriendListUpdated';
      FRIEND_GROUP_LIST_UPDATED: 'onFriendGroupListUpdated';
      FRIEND_APPLICATION_LIST_UPDATED: 'onFriendApplicationListUpdated';
      KICKED_OUT: 'kickedOut';
      ERROR: 'error';
      NET_STATE_CHANGE: 'netStateChange';
      SDK_RELOAD: 'sdkReload';
    };

    static TYPES: {
      MSG_TEXT: 'TIMTextElem';
      MSG_IMAGE: 'TIMImageElem';
      MSG_SOUND: 'TIMSoundElem'; MSG_AUDIO: 'TIMSoundElem'; MSG_FILE: 'TIMFileElem'; MSG_FACE: 'TIMFaceElem'; MSG_VIDEO: 'TIMVideoFileElem'; MSG_GEO: 'TIMLocationElem'; MSG_LOCATION: 'TIMLocationElem'; MSG_GRP_TIP: 'TIMGroupTipElem'; MSG_GRP_SYS_NOTICE: 'TIMGroupSystemNoticeElem'; MSG_CUSTOM: 'TIMCustomElem'; MSG_MERGER: 'TIMRelayElem'; MSG_PRIORITY_HIGH: 'High'; MSG_PRIORITY_NORMAL: 'Normal'; MSG_PRIORITY_LOW: 'Low'; MSG_PRIORITY_LOWEST: 'Lowest'; CONV_C2C: 'C2C'; CONV_GROUP: 'GROUP'; CONV_SYSTEM: '@TIM#SYSTEM'; CONV_AT_ME: 1; CONV_AT_ALL: 2; CONV_AT_ALL_AT_ME: 3; GRP_PRIVATE: 'Private'; GRP_WORK: 'Private'; GRP_PUBLIC: 'Public'; GRP_CHATROOM: 'ChatRoom'; GRP_MEETING: 'ChatRoom'; GRP_AVCHATROOM: 'AVChatRoom'; GRP_MBR_ROLE_OWNER: 'Owner'; GRP_MBR_ROLE_ADMIN: 'Admin'; GRP_MBR_ROLE_MEMBER: 'Member'; GRP_TIP_MBR_JOIN: 1; GRP_TIP_MBR_QUIT: 2; GRP_TIP_MBR_KICKED_OUT: 3; GRP_TIP_MBR_SET_ADMIN: 4; GRP_TIP_MBR_CANCELED_ADMIN: 5; GRP_TIP_GRP_PROFILE_UPDATED: 6; GRP_TIP_MBR_PROFILE_UPDATED: 7; MSG_REMIND_ACPT_AND_NOTE: 'AcceptAndNotify'; MSG_REMIND_ACPT_NOT_NOTE: 'AcceptNotNotify'; MSG_REMIND_DISCARD: 'Discard'; GENDER_UNKNOWN: 'Gender_Type_Unknown'; GENDER_FEMALE: 'Gender_Type_Female'; GENDER_MALE: 'Gender_Type_Male'; KICKED_OUT_MULT_ACCOUNT: 'multipleAccount'; KICKED_OUT_MULT_DEVICE: 'multipleDevice'; KICKED_OUT_USERSIG_EXPIRED: 'userSigExpired'; ALLOW_TYPE_ALLOW_ANY: 'AllowType_Type_AllowAny'; ALLOW_TYPE_NEED_CONFIRM: 'AllowType_Type_NeedConfirm'; ALLOW_TYPE_DENY_ANY: 'AllowType_Type_DenyAny'; FORBID_TYPE_NONE: 'AdminForbid_Type_None'; FORBID_TYPE_SEND_OUT: 'AdminForbid_Type_SendOut'; JOIN_OPTIONS_FREE_ACCESS: 'FreeAccess'; JOIN_OPTIONS_NEED_PERMISSION: 'NeedPermission'; JOIN_OPTIONS_DISABLE_APPLY: 'DisableApply'; JOIN_STATUS_SUCCESS: 'JoinedSuccess'; JOIN_STATUS_ALREADY_IN_GROUP: 'AlreadyInGroup'; JOIN_STATUS_WAIT_APPROVAL: 'WaitAdminApproval'; GRP_PROFILE_OWNER_ID: 'ownerID'; GRP_PROFILE_CREATE_TIME: 'createTime'; GRP_PROFILE_LAST_INFO_TIME: 'lastInfoTime'; GRP_PROFILE_MEMBER_NUM: 'memberNum'; GRP_PROFILE_MAX_MEMBER_NUM: 'maxMemberNum'; GRP_PROFILE_JOIN_OPTION: 'joinOption'; GRP_PROFILE_INTRODUCTION: 'introduction'; GRP_PROFILE_NOTIFICATION: 'notification'; GRP_PROFILE_MUTE_ALL_MBRS: 'muteAllMembers'; SNS_ADD_TYPE_SINGLE: 'Add_Type_Single'; SNS_ADD_TYPE_BOTH: 'Add_Type_Both'; SNS_DELETE_TYPE_SINGLE: 'Delete_Type_Single'; SNS_DELETE_TYPE_BOTH: 'Delete_Type_Both'; SNS_APPLICATION_TYPE_BOTH: 'Pendency_Type_Both'; SNS_APPLICATION_SENT_TO_ME: 'Pendency_Type_ComeIn'; SNS_APPLICATION_SENT_BY_ME: 'Pendency_Type_SendOut'; SNS_APPLICATION_AGREE: 'Response_Action_Agree'; SNS_APPLICATION_AGREE_AND_ADD: 'Response_Action_AgreeAndAdd'; SNS_CHECK_TYPE_BOTH: 'CheckResult_Type_Both'; SNS_CHECK_TYPE_SINGLE: 'CheckResult_Type_Single'; SNS_TYPE_NO_RELATION: 'CheckResult_Type_NoRelation'; SNS_TYPE_A_WITH_B: 'CheckResult_Type_AWithB'; SNS_TYPE_B_WITH_A: 'CheckResult_Type_BWithA'; SNS_TYPE_BOTH_WAY: 'CheckResult_Type_BothWay'; NET_STATE_CONNECTED: 'connected'; NET_STATE_CONNECTING: 'connecting'; NET_STATE_DISCONNECTED: 'disconnected'; MSG_AT_ALL: '__kImSDK_MesssageAtALL__';
    };

    /**
     * @description 设置日志级别，低于 level 的日志将不会输出。
     * @param {number} level - 日志级别
     * - 0 普通级别，日志量较多，接入时建议使用
     * - 1 release级别，SDK 输出关键信息，生产环境时建议使用
     * - 2 告警级别，SDK 只输出告警和错误级别的日志
     * - 3 错误级别，SDK 只输出错误级别的日志
     * - 4 无日志级别，SDK 将不打印任何日志
     */
    setLogLevel(level: number): void;

    /**
     * @description 注册插件。即时通信 IM SDK 发送图片、语音、视频、文件等消息需要使用上传插件，将文件上传到腾讯云对象存储。
     * @param {object} options - 日志级别
     */
    registerPlugin(options: { [key: string]: any; }): void;

    /**
     * @description 注册插件。即时通信 IM SDK 发送图片、语音、视频、文件等消息需要使用上传插件，将文件上传到腾讯云对象存储。
     * @param {} eventName - 事件名称。所有的事件名称都存放在 TIM.EVENT 变量中，如需要查看可以使用 console.log(TIM.EVENT) 把所有的事件显示出来
     * @param {} handler - 处理事件的方法，当事件触发时，会调用此handler进行处理。
     * @param {} context - 期望 handler 执行时的上下文
     */
    on(eventName: string, handler: Function, context?: any): void;

    /** @description 获取个人资料。注意：v2.3.2版本开始支持自定义资料字段，使用前需要将SDK升级至v2.3.2或更高版本。*/
    getMyProfile(): Promise<IMResponse<Profile>>;

    /**
     * @description 使用 用户ID(userID) 和 签名串(userSig) 登录即时通信 IM，登录流程有若干个异步执行的步骤，使用返回的 Promise 对象处理登录成功或失败。
     * 注意1：登录成功，需等待 sdk 处于 ready 状态后（监听事件 TIM.EVENT.SDK_READY）才能调用 sendMessage 等需要鉴权的接口。
     * 注意2：默认情况下，不支持多实例登录，即如果此帐号已在其他页面登录，若继续在当前页面登录成功，有可能会将其他页面踢下线。用户被踢下线时会触发事件TIM.EVENT.KICKED_OUT，用户可在监听到事件后做相应处理。
     * 如需支持多实例登录（允许在多个网页中同时登录同一帐号），请到 即时通信 IM 控制台，找到相应 SDKAppID，【应用配置】 > 【功能配置】> 【Web端实例同时在线】配置实例个数。配置将在50分钟内生效。
     */
    login(options: { userID: string; userSig: string; }): Promise<any>;

    /**
    * @description 登出即时通信 IM，通常在切换帐号的时候调用，清除登录态以及内存中的所有数据
    * 注意1：调用此接口的实例会发布 SDK_NOT_READY 事件，此时该实例下线，无法收、发消息。
    * 注意2：如果您在即时通信 IM 控制台配置的“Web端实例同时在线个数”大于 1，且同一账号登录了a1和a2两个实例（含小程序端），当执行a1.logout()后，a1会下线，无法收、发消息。而a2实例不会受影响。
    * 注意3：多实例被踢：基于第 2 点，如果“Web端实例同时在线个数”配置为
    * 2，且您的某一账号已经登录了 a1，a2两个实例，当使用此账号成功登录第三个实例a3时，
    * a1或a2中的一个实例会被踢下线（通常是最先处在登录态的实例会触发），这种情况称之为**“多实例被踢”**。
    * 假设a1实例被踢下线，a1实例内部会执行登出流程，然后抛出KICKED_OUT事件，接入侧可以监听此事件，
    * 并在触发时跳转到登录页。此时a1实例下线，而a2、a3实例可以正常运行。
    */
    logout(): Promise<any>;

    /**
     * @description 获取会话列表的接口
     * - 注意1：该接口获取的会话列表中的资料是不完整的（仅包括头像、昵称等，能够满足会话列表的渲染需求），若要查询详细会话资料，可参考：getConversationProfile
     * - 注意2：会话保存时长跟会话最后一条消息保存时间一致，消息默认保存7天，即会话默认保存7天。
     * - 注意3：该接口 v2.15.0 起支持获取指定的多个会话。
     * @param {} options [conversationID1, conversationID2]
     */
    getConversationList(options?: Array<string>): Promise<IMResponse<any>>;

    /** @description 根据会话 ID 删除会话的接口。该接口只删除会话，不删除消息，例如：删除与用户 A 的会话，下次再与用户 A 发起会话时，之前的聊天信息仍在。*/
    deleteConversation(conversationID: string): Promise<IMResponse<any>>;

    /** @description 置顶或取消置顶会话的接口。调用接口成功后会话列表重新排序，SDK 会派发事件 TIM.EVENT.CONVERSATION_LIST_UPDATED
     * - 注意：v2.14.0起支持
    */
    pinConversation(options: { conversationID: string; isPinned: boolean; }): Promise<IMResponse<any>>;

    /**@description 获取会话资料的接口，当点击会话列表中的某个会话时，调用该接口获取会话的详细信息。
     * @param {} conversationID 会话 ID。会话 ID 组成方式
     * - C2C${userID}（单聊）
     * - GROUP{groupID}（群聊）
     * - @TIM#SYSTEM（系统通知会话）
    */
    getConversationProfile(conversationID: string): Promise<IMResponse<{ conversation: Conversation; }>>;

    /**@description 获取群成员列表。
     * - 注意1：从v2.6.2起，该接口支持拉取群成员禁言截止时间戳（muteUntil），接入侧可根据此值判断群成员是否被禁言，以及禁言的剩余时间。
     * - 在低于v2.6.2的版本，该接口获取的群成员列表中的资料是不完整的（仅包括头像、昵称等，能够满足群成员列表的渲染需求），若要查询群成员禁言截止时间戳（muteUntil）等详细资料，请使用：getGroupMemberProfile
     * - 注意2：该接口是分页拉取群成员，不能直接用于获取群的总人数。获取群的总人数（memberNum）请使用：getGroupProfile
    */
    getGroupMemberList(options: { groupID: string; count: number; offset: number; }): Promise<any>;

    /**
     * @description 通过 groupID 搜索群组。
     * - 注意：TIM.TYPES.GRP_WORK 类型的群组（好友工作群）不能被搜索。
    */
    searchGroupByID(groupID: string): Promise<any>;

    /**
     * @description 退出群组。
     * - 注意：群主只能退出好友工作群，退出后该好友工作群无群主。
    */
    quitGroup(groupID: string): Promise<any>;

    /**
     * @description 申请加群的接口，申请加入某个群组时调用。
     * - 注意1：好友工作群不允许申请加群，只能通过 addGroupMember 方式添加
     * - 注意2：TIM.TYPES.GRP_AVCHATROOM（直播群）有两种加群方式：
     * - 2.1 正常加群，即登录加群。此时 SDK 内的所有接口都能正常调用。
     * - 2.2  匿名加群，即不登录加群。此时只能收消息，其他任何需要鉴权的接口都不能调用。
     * - 注意3：只有 TIM.TYPES.GRP_AVCHATROOM（直播群） 支持匿名加群，其他类型的群组不支持。
     * - 注意4：同一用户同时只能加入一个直播群。【例如】用户已在直播群 A 中，再加入直播群 B，SDK 会先退出直播群 A，然后加入直播群 B
    */
    joinGroup(options: { groupID: string; applyMessage: string; type?: string; }): Promise<any>;

    /**@description 创建群组
     * 注意：该接口创建 TIM.TYPES.GRP_AVCHATROOM（直播群） 后，需调用 joinGroup 接口加入群组后，才能进行消息收发流程。
    */
    createGroup(options: any): Promise<any>;

    /**@description 修改群成员角色。只有群主拥有操作的权限。*/
    setGroupMemberRole(options: { groupID: string; userID: string; role: string; }): Promise<any>;

    /**@description 删除群成员。群主可移除群成员。*/
    deleteGroupMember(options: { groupID: string; userIDList: Array<string>; reason: string; }): Promise<any>;

    /**@description 设置群成员的禁言时间，可以禁言群成员，也可取消禁言。TIM.TYPES.GRP_WORK 类型的群组（即好友工作群）不能禁言。
     * - 注意：只有群主和管理员拥有该操作权限：
     * - 群主可以禁言/取消禁言管理员和普通群成员
     * - 管理员可以禁言/取消禁言普通群成员。
    */
    setGroupMemberMuteTime(options: { groupID: string; userID: string; muteTime: number; }): Promise<any>;

    /**@description 处理申请加群（同意或拒绝）
     * 注意：：如果一个群有多位管理员，当有人申请加群时，所有在线的管理员都会收到申请加群的群系统通知。如果某位管理员处理了这个申请（同意或者拒绝）
     * 则其他管理员无法重复处理（即不能修改处理的结果）
    */
    handleGroupApplication(options: { handleAction: string; handleMessage: string; message: Message; }): Promise<any>;

    /**@description 需要渲染或刷新【我的群组列表】时，调用该接口获取群组列表，更多详情请参见 Group。
     * 注意：接口返回的群组列表，不包含 TIM.TYPES.GRP_AVCHATROOM（直播群）类型的群组。
    */
    getGroupList(options?: { groupProfileFilter: Array<string>; }): Promise<any>;

    /**@description 转让群组。只有群主有权限操作
     * 注意：只有群主拥有转让的权限。TIM.TYPES.GRP_AVCHATROOM（直播群）类型的群组不能转让。
    */
    changeGroupOwner(options: { groupID: string; newOwnerID: string; }): Promise<any>;

    /**@description 群主可调用该接口解散群组
     * 注意：群主不能解散好友工作群。
    */
    dismissGroup(groupID: string): Promise<any>;

    /**@description 修改群组资料 */
    updateGroupProfile(options: any): Promise<any>;

    /**@description 分页拉取指定会话的消息列表的接口，当用户进入会话首次渲染消息列表或者用户“下拉查看更多消息”时，需调用该接口。该接口可用于"拉取历史消息"*/
    getMessageList(options: { conversationID: string; nextReqMessageID: string; count: number; }): Promise<IMResponse<any>>;

    /**
     * @description 将某会话下的未读消息状态设置为已读，置为已读的消息不会计入到未读统计，
     * 当打开会话或切换会话时调用该接口。如果在打开/切换会话时，不调用该接口，则对应的消息会一直是未读的状态。
     * @param {} options -{ conversationID: string; } C2C${userID}（单聊）GROUP${groupID}（群聊）@TIM#SYSTEM（系统通知会话）
    */
    setMessageRead(options: { conversationID: string; }): Promise<IMResponse<any>>;

    /**@description 撤回单聊消息或者群聊消息。撤回成功后，消息对象的 isRevoked 属性值为 true。
     * - 注意1：使用该接口前，需要将 SDK 版本升级至v2.4.0或更高版本。
     * - 注意2：消息可撤回时间默认为2分钟。可通过 控制台 调整消息可撤回时间。
     * - 注意3：被撤回的消息，可以调用 getMessageList 接口从单聊或者群聊消息漫游中拉取到。接入侧须根据消息对象的 isRevoked 属性妥善处理被撤回消息的展示。如单聊会话内可展示为 "对方撤回了一条消息"；群聊会话内可展示为 "XXX撤回了一条消息"。
     * - 注意4：可使用 REST API 撤回单聊消息 或 撤回群聊消息。
    */
    revokeMessage(message: Message): Promise<any>;

    /**@description 创建文本消息的接口，此接口返回一个消息实例，可以在需要发送文本消息时调用 发送消息 接口发送消息。*/
    createTextMessage(options: { to: string; conversationType: string; priority?: string; payload: any; }): Message;

    /**@description 创建地理位置消息的接口，此接口返回一个消息实例，可以在需要发送地理位置消息时调用 发送消息 接口发送消息。
     * - 注意1：v2.15.0起支持description: string; longitude: number; latitude: number;
    */
    createLocationMessage(options: { to: string; conversationType: string; payload: any; }): Message;

    /**@description 创建图片消息的接口，此接口返回一个消息实例，可以在需要发送图片消息时调用 发送消息 接口发送消息。*/
    createImageMessage(options: { to: string; conversationType: string; priority?: string; payload: any; onProgress: any; }): Message;

    /**@description 创建自定义消息实例的接口，此接口返回一个消息实例，可以在需要发送自定义消息时调用 发送消息 接口发送消息。
     * 当 SDK 提供的能力不能满足您的需求时，可以使用自定义消息进行个性化定制，例如投骰子功能。
     */
    createCustomMessage(options: { to: string; conversationType: string; priority?: string; payload: any; }): Message;

    /**@description 创建文件消息的接口，此接口返回一个消息实例，可以在需要发送文件消息时调用 发送消息 接口发送消息。
     * - 注意1：v2.3.1版本开始支持传入 File 对象，使用前需要将 SDK 升级至v2.3.1或更高版本。
     * - 注意2：v2.4.0版本起，上传文件大小最大值调整为100M。
     * - 注意3：微信小程序目前不支持选择文件的功能，故该接口暂不支持微信小程序端。
     * - 注意4：v2.11.2版本支持 uni-app 发文件消息，使用前需要将 SDK 升级至v2.11.2或更高版本，同时将 tim-upload-plugin 升级至v1.0.2或更高版本。
    */
    createFileMessage(options: { to: string; conversationType: string; priority?: string; payload: any; onProgress: any; }): Message;

    /**@description 创建音频消息实例的接口，此接口返回一个消息实例，可以在需要发送音频消息时调用 发送消息 接口发送消息。*/
    createAudioMessage(options: { to: string; conversationType: string; priority?: string; payload: any; onProgress: any; }): Message;

    /**@description 发送消息的接口，需先调用下列的创建消息实例的接口获取消息实例后，再调用该接口发送消息实例。*/
    sendMessage(message: Message, options?: { onlineUserOnly?: boolean; offlinePushInfo?: Object; }): Promise<any>;

    /**@description 重发消息的接口，当消息发送失败时，可调用该接口进行重发*/
    resendMessage(message: Message): Promise<any>;

    /**@description 删除消息的接口。删除成功后，被删除消息的 isDeleted 属性值为 true。C2C 会话，消息被删除后，下次登录拉取历史消息将拉取不到，对端不受影响。群会话，消息被删除后，下次登录拉取历史消息将拉取不到，群内其他成员不受影响。
     * - 注意1：使用该接口前，需要将SDK版本升级至v2.12.0或更高版本
     * - 注意2：一次最多只能删除30条消息，超过30条则只删除前30条
     * - 注意3：要删除的消息必须属于同一会话，以消息列表的第1个消息的所属会话为准
     * - 注意4：一秒钟最多只能调用一次该接口
     * - 注意5：删除消息不支持多端同步
     * - 注意6：AVChatRoom（直播群）不支持删除消息，调用此接口将返回10035错误码
    */
    deleteMessage(messageList: Array<Message>): Promise<any>;


    /**
     * 更新个人资料 注意：v2.3.2版本开始支持自定义资料字段，使用前需要将SDK升级至v2.3.2或更高版本。
     *
     * @param options
     */
    updateMyProfile(options: Exclude<Profile, 'userID' | 'nick' | 'lastUpdatedTime'>): Promise<any>;

    /**
     * 添加群成员。详细规则如下：
     * - TIM.TYPES.GRP_WORK（好友工作群）：任何群成员都可邀请他人加群，且无需被邀请人同意，直接将其拉入群组中。
     * - TIM.TYPES.GRP_PUBLIC（陌生人社交群）/ TIM.TYPES.GRP_MEETING（临时会议群）：只有 App 管理员可通过 REST API add_group_member 邀请他人入群，且无需被邀请人同意，直接将其拉入群组中。
     * - TIM.TYPES.GRP_AVCHATROOM（直播群）：不允许任何人邀请他人入群（包括 App 管理员）。
     *
     * @param options
     *
     * groupID 群ID,userIDList 待添加的群成员 ID 数组。单次最多添加500个成员
     */
    addGroupMember(options: { groupID: string; userIDList: Array<string>; }): Promise<any>;

    /**
     * 获取群成员资料，如禁言时间等。
     * - 注意1：使用该接口前，需要将SDK版本升级至v2.2.0或更高版本。
     * - 注意2：每次查询的用户数上限是50。如果传入的数组长度大于50，则只取前50个用户进行查询，其余丢弃。
     *
     * @param options
     */
    getGroupMemberProfile(options: { groupID: string; userIDList: Array<string>; memberCustomFieldFilter?: Array<string>; }): Promise<any>;
    /**
     * 设置群成员名片。注意！直播群不存储群成员信息，所以此接口不适用于直播群。
     * - 群主：可设置所有群成员的名片。
     * - 管理员：可设置自身和其他普通群成员的群名片。
     * - 普通群成员：只能设置自身群名片。
     * @param options
     */
    setGroupMemberNameCard(options: { groupID: string; userID?: string; nameCard: string; }): Promise<any>;
  }


}
