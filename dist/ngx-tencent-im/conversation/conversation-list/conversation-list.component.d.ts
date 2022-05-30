import { OnDestroy, OnInit } from '@angular/core';
import { TimHelperService } from '../../tim-helper.service';
import { Store } from '@ngrx/store';
import { Conversation } from 'tim-js-sdk';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ConversationListComponent implements OnInit, OnDestroy {
    private store;
    private timHelperService;
    conversationList: Array<Conversation>;
    timeout: any;
    showDialog: boolean;
    userID: string;
    subscription: Subscription;
    storeSubscription: Subscription;
    currentConversation: Conversation;
    constructor(store: Store, timHelperService: TimHelperService);
    ngOnInit(): void;
    add(): void;
    handleOk(): void;
    handleCancel(): void;
    refresh(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConversationListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConversationListComponent, "app-conversation-list", never, {}, {}, never, never>;
}
