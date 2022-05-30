import { OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Message } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class GroupSystemNoticeElementComponent implements OnInit {
    private modal;
    message: Message;
    payload: any;
    showDialog: boolean;
    text: string;
    title: string;
    isJoinGroupRequest: boolean;
    constructor(modal: NzModalService);
    ngOnInit(): void;
    approval(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupSystemNoticeElementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupSystemNoticeElementComponent, "app-group-system-notice-element", never, { "message": "message"; "payload": "payload"; }, {}, never, never>;
}
