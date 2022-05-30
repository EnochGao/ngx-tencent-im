import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Conversation, Message, Profile } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class MessageHeaderComponent implements OnInit {
    private store;
    message: Message;
    currentUserProfile: Profile;
    currentConversation: Conversation;
    constructor(store: Store);
    ngOnInit(): void;
    get isMine(): boolean;
    get date(): string;
    get from(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageHeaderComponent, "app-message-header", never, { "message": "message"; "currentUserProfile": "currentUserProfile"; "currentConversation": "currentConversation"; }, {}, never, never>;
}
