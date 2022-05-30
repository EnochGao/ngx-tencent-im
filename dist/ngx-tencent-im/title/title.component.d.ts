import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Conversation } from 'tim-js-sdk';
import { NgTimConfig } from '../type';
import * as i0 from "@angular/core";
export declare class TitleComponent implements OnInit, OnDestroy {
    private store;
    config: NgTimConfig;
    currentConversation: Conversation;
    subscription: Subscription;
    detailBtnClick: EventEmitter<void>;
    minimizeClick: EventEmitter<void>;
    constructor(store: Store, config: NgTimConfig);
    ngOnInit(): void;
    get detailIsHidden(): any;
    get name(): any;
    handleClick(event: Event): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TitleComponent, "lib-title", never, {}, { "detailBtnClick": "detailBtnClick"; "minimizeClick": "minimizeClick"; }, never, never>;
}
