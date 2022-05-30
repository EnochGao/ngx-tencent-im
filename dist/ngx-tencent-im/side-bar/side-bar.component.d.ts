import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConversationState } from '../store/reducer/conversation.reducer';
import { TimHelperService } from '../tim-helper.service';
import * as i0 from "@angular/core";
export declare class SideBarComponent implements OnInit {
    private store;
    private timHelperService;
    activeName: {
        CONVERSATION_LIST: string;
        GROUP_LIST: string;
        FRIEND_LIST: string;
        BLACK_LIST: string;
    };
    totalUnreadCount: number;
    active: string;
    showConversationList: boolean;
    constructor(store: Store, timHelperService: TimHelperService);
    ngOnInit(): void;
    handleClick(event: Event | any): void;
    checkoutActive(name: string): void;
    logout(): void;
    getGroupList(): void;
    computeCount(state: ConversationState): Conversation;
    hidden(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SideBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SideBarComponent, "app-side-bar", never, {}, {}, never, never>;
}
