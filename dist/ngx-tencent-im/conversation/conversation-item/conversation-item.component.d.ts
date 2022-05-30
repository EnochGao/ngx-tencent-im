import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TimHelperService } from '../../tim-helper.service';
import { Subscription } from 'rxjs';
import { Conversation, Profile } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class ConversationItemComponent implements OnInit, OnDestroy {
    private store;
    private timHelperService;
    currentConversation: Conversation;
    conversation: Conversation;
    TIM: any;
    currentUserProfile: Profile;
    profileSubscription: Subscription;
    constructor(store: Store, timHelperService: TimHelperService);
    ngOnInit(): void;
    selectConversation(): void;
    get avatarSrc(): any;
    get date(): string;
    get messageForShow(): any;
    get conversationName(): any;
    deleteConversation(event: any): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConversationItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConversationItemComponent, "app-conversation-item", never, { "currentConversation": "currentConversation"; "conversation": "conversation"; }, {}, never, never>;
}
