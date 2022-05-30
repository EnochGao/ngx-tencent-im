import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { Profile } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class MyProfileComponent implements OnInit, OnDestroy {
    private store;
    private modal;
    currentUserProfile: Profile;
    subscription: Subscription;
    constructor(store: Store, modal: NzModalService);
    ngOnInit(): void;
    editProfile(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyProfileComponent, "app-my-profile", never, {}, {}, never, never>;
}
