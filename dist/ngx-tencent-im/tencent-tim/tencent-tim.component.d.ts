import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TencentTimComponent implements OnInit, OnDestroy {
    private store;
    hiddenWindow: boolean;
    message: EventEmitter<any>;
    hiddenWindowChange: EventEmitter<boolean>;
    showDetail: boolean;
    subscription: Subscription;
    constructor(store: Store);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TencentTimComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TencentTimComponent, "ngx-tencent-tim", never, { "hiddenWindow": "hiddenWindow"; }, { "message": "message"; "hiddenWindowChange": "hiddenWindowChange"; }, never, never>;
}
