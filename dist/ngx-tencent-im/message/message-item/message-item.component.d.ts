import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Conversation, Message, Profile } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class MessageItemComponent implements OnInit, OnDestroy {
    private store;
    TIM: any;
    currentUserProfile: Profile;
    subscription: Subscription;
    currentConversation: Conversation;
    message: Message;
    constructor(store: Store);
    ngOnInit(): void;
    get showAvatar(): boolean;
    get currentConversationType(): any;
    get avatar(): any;
    get isMine(): boolean;
    get messagePosition(): "position-center" | "position-right" | "position-left";
    get showMessageHeader(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageItemComponent, "app-message-item", never, { "currentConversation": "currentConversation"; "message": "message"; }, {}, never, never>;
}
