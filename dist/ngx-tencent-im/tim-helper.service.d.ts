import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import Tim, { Conversation, Group, GroupMember } from 'tim-js-sdk';
import { ConversationState } from './store/reducer/conversation.reducer';
import { NgTimConfig } from './type';
import * as i0 from "@angular/core";
export declare class TimHelperService {
    private store;
    config: NgTimConfig;
    tim: Tim;
    conversation: ConversationState;
    currentMemberList: Array<GroupMember>;
    eventBus$: Subject<string>;
    totalUnRead: Subject<number>;
    constructor(store: Store, config: NgTimConfig);
    login(userId: string, userSig: string): void;
    logout(): void;
    initListener(): void;
    private onReadyStateUpdate;
    onKickOut(event: {
        name: string;
        data: {
            type: string;
        };
    }): void;
    onError({ data }: {
        data: any;
    }): void;
    onMessageReadByPeer(event: any): void;
    onReceiveMessage({ data: messageList }: {
        data: any;
    }): void;
    onUpdateConversationList(event: {
        data: Array<Conversation>;
    }): void;
    onUpdateGroupList(event: {
        data: Array<Group>;
    }): void;
    onNetStateChange(event: any): void;
    /**
     * 切换会话
     * 调用时机：切换会话时
     */
    checkoutConversation(conversationID: string): any;
    /**
     * @description 获取消息
     */
    getMessageList(conversationID: string): void;
    /**
     * @description 获取群成员
     */
    getGroupMemberList(groupID: string): void;
    private initTim;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimHelperService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimHelperService>;
}
