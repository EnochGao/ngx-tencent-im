import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Conversation, GroupMember } from 'tim-js-sdk';
import { TimHelperService } from '../../tim-helper.service';
import * as i0 from "@angular/core";
export declare class GroupMemberListComponent implements OnInit, OnDestroy {
    private store;
    private timHelperService;
    currentConversation: Conversation;
    currentMemberList: Array<GroupMember>;
    currentMemberID: string;
    count: number;
    subscription: Subscription;
    popoverVisible: boolean;
    userID: string;
    constructor(store: Store, timHelperService: TimHelperService);
    get members(): GroupMember[];
    get showLoadMore(): boolean;
    ngOnInit(): void;
    addGroupMember(): void;
    getGroupMemberAvatarText(role: string): "群主" | "管理员" | "群成员";
    loadMore(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupMemberListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupMemberListComponent, "app-group-member-list", never, { "currentConversation": "currentConversation"; }, {}, never, never>;
}
