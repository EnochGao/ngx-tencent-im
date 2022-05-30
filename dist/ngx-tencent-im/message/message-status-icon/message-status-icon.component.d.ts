import { OnInit } from '@angular/core';
import { Message } from 'tim-js-sdk';
import { TimHelperService } from '../../tim-helper.service';
import * as i0 from "@angular/core";
export declare class MessageStatusIconComponent implements OnInit {
    private timHelperService;
    message: Message;
    constructor(timHelperService: TimHelperService);
    ngOnInit(): void;
    get messageIconClass(): "" | "el-icon-loading" | "message-send-fail";
    handleIconClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageStatusIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageStatusIconComponent, "app-message-status-icon", never, { "message": "message"; }, {}, never, never>;
}
