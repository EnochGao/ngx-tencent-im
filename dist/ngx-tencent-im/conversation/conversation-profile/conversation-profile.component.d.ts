import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Conversation } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class ConversationProfileComponent implements OnInit, OnDestroy {
    private store;
    TIM: any;
    currentConversation: Conversation;
    subscription: Subscription;
    constructor(store: Store);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConversationProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConversationProfileComponent, "app-conversation-profile", never, {}, {}, never, never>;
}
