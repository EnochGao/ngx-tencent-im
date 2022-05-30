import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Conversation } from 'tim-js-sdk';
import { TimHelperService } from '../../tim-helper.service';
import * as i0 from "@angular/core";
export declare class CurrentConversationComponent implements OnInit, AfterViewInit, OnDestroy {
    private store;
    private cd;
    private timHelperService;
    currentConversation: Conversation;
    currentMessageList: any[];
    isShowScrollBottomTips: boolean;
    isCompleted: boolean;
    preScrollHeight: number;
    name: string;
    toAccount: string;
    eventBusSubscription: Subscription;
    conversationSubscription: Subscription;
    currentConversationSubscription: Subscription;
    get showCurrentConversation(): boolean;
    get showMessageSendBox(): boolean;
    messageListRef: ElementRef;
    constructor(store: Store, cd: ChangeDetectorRef, timHelperService: TimHelperService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getMore(): void;
    onscroll({ target: { scrollTop } }: {
        target: {
            scrollTop: any;
        };
    }): void;
    scrollMessageListToBottom(): void;
    keepMessageListOnBottom(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrentConversationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CurrentConversationComponent, "app-current-conversation", never, {}, {}, never, never>;
}
