
/** @description 消息会话 */
export interface Conversation {
  conversationID: string;
  lastMessage: LastMessage;
  peerReadTime: number;
  type: string;
  unreadCount: number;
  userProfile: UserProfile;
  groupProfile: GroupProfile;
  _isInfoCompleted: boolean;
  subType: string;
  toAccount: string;
}
export interface ConversationItem {
  conversationID: string;
  lastMessage: LastMessage;
  peerReadTime: number;
  type: string;
  unreadCount: number;
  userProfile: UserProfile;
  groupProfile: GroupProfile;
}
export interface GroupProfile {
  avatar: string;
  createTime: number;
  groupCustomField: Array<any>;
  groupID: string;
  infoSequence: string;
  introduction: string;
  joinOption: string;
  lastInfoTime: string;
  lastMessage: LastMessage;
  maxMemberCount: string;
  memberCount: string;
  muteAllMembers: undefined;
  name: string;
  nextMessageSeq: number;
  notification: string;
  ownerID: string;
  selfInfo: SelfInfo;
  type: string;
  maxMemberNum: number;
  memberNum: number;
}
export interface UserProfile {
  adminForbidType: string;
  allowType: string;
  avatar: string;
  birthday: number;
  gender: string;
  language: number;
  lastUpdatedTime: number;
  level: number;
  location: string;
  messageSettings: number;
  nick: string;
  profileCustomField: Array<any>;
  role: number;
  selfSignature: string;
  userID: string;
}
export interface SelfInfo {
  messageRemindType: string;
  joinTime: number;
  nameCard: string;
  role: string;
}
export interface LastMessage {
  fromAccount: string;
  isRevoked: boolean;
  lastSequence: number;
  lastTime: number;
  messageForShow: string;
  payload: { text: string; };
  type: string;
}

export interface Member {
  userID: string,
  avatar: string;
  nick: string,
  role: string,
  joinTime: number,
  lastSendMsgTime: string;
  nameCard: string;
  muteUntil: number,
  memberCustomField: Array<any>;
}


/** @description 消息项 */
export interface MessageItem {
  ID: string;
  avatar: string;
  clientSequence: number;
  conversationID: string;
  conversationSubType: undefined;
  conversationType: string;
  flow: string;
  from: string;
  geo: any;
  isPeerRead: boolean;
  isPlaceMessage: number;
  isRead: true;
  isResend: boolean;
  isRevoked: boolean;
  isSystemMessage: boolean;
  nick: string;
  payload: any;
  priority: string;
  protocol: string;
  random: number;
  sequence: number;
  status: string;
  time: number;
  to: string;
  type: string;
  progress?: number;
}

export interface IMResponse<T> {
  code: number;
  data: T;
}
export interface LoginSuccess {
  a2Key: string;
  actionStatus: string;
  errorCode: number;
  errorInfo: string;
  tinyID: string;
  repeatLogin: boolean;
}

/** @description 登录参数
 *  @param userId 	用户 ID
 *  @param userSig 	用户 签名
 */
export interface LoginOptions {
  userID: string;
  userSig: string;
}
interface GroupOptions {
  groupID: string,
  userIDList: string[];
}
export interface Tim {
  addGroupMember: (options: GroupOptions) => Promise<any>;
  addToBlacklist: Function;
  callExperimentalAPI: Function;
  changeGroupOwner: Function;
  createAudioMessage: Function;
  createCustomMessage: Function;
  createFaceMessage: Function;
  createFileMessage: Function;
  createGroup: Function;
  createImageMessage: Function;
  createTextMessage: Function;
  createVideoMessage: Function;
  deleteConversation: Function;
  deleteGroupMember: Function;
  destroy: Function;
  dismissGroup: Function;
  downloadLog: Function;
  getBlacklist: Function;
  getConversationList: Function;
  getConversationProfile: (conversationID: string) => Promise<IMResponse<{ conversation: Conversation; }>>;
  getFriendList: Function;
  getGroupList: Function;
  getGroupMemberList: (options: { groupID: string, offset: number, count: number; }) => Promise<IMResponse<{ memberList: Array<Member>; }>>;
  getGroupMemberProfile: Function;
  getGroupOnlineMemberCount: Function;
  getGroupProfile: Function;
  getMessageList: (option: { conversationID: string; nextReqMessageID: string; count: number; }) => Promise<IMResponse<any>>;
  getMyProfile: () => Promise<IMResponse<UserProfile>>;
  getUserProfile: Function;
  handleGroupApplication: (options: { handleAction: string, handleMessage: string, message: MessageItem; }) => Promise<IMResponse<any>>;
  joinGroup: Function;
  login: (options: LoginOptions) => Promise<IMResponse<LoginSuccess>>;
  logout: () => Promise<IMResponse<object>>;
  off: Function;
  on: Function;
  once: Function;
  quitGroup: Function;
  registerPlugin: Function;
  removeFromBlacklist: Function;
  resendMessage: Function;
  revokeMessage: Function;
  searchGroupByID: Function;
  sendMessage: Function;
  setGroupMemberCustomField: Function;
  setGroupMemberMuteTime: Function;
  setGroupMemberNameCard: Function;
  setGroupMemberRole: Function;
  setLogLevel: (level: number) => void;
  setMessageRead: (option: { conversationID: string; }) => Promise<IMResponse<any>>;
  setMessageRemindType: Function;
  updateGroupProfile: Function;
  updateMyProfile: Function;
}


/** @description 用户个人资料 */
export interface UserProfile {
  adminForbidType: string;
  allowType: string;
  avatar: string;
  birthday: number;
  gender: string;
  language: number;
  lastUpdatedTime: number;
  level: number;
  location: string;
  messageSettings: number;
  nick: string;
  profileCustomField: Array<any>;
  role: number;
  selfSignature: string;
  userID: string;
}
