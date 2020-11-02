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
  avatar: string;

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
}