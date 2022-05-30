import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Message } from 'tim-js-sdk';
import { TimHelperService } from '../../../../tim-helper.service';
import * as i0 from "@angular/core";
export declare class ApprovalJoinGroupComponent implements OnInit {
    modalRef: NzModalRef;
    private store;
    private timHelperService;
    message: Message;
    form: {
        handleAction: string;
        handleMessage: string;
    };
    constructor(modalRef: NzModalRef, store: Store, timHelperService: TimHelperService);
    ngOnInit(): void;
    handleGroupApplication(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApprovalJoinGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApprovalJoinGroupComponent, "im-approval-join-group", never, { "message": "message"; }, {}, never, never>;
}
