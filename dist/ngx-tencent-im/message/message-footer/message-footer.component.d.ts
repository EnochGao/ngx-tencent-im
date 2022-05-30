import { OnInit } from '@angular/core';
import { Message } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class MessageFooterComponent implements OnInit {
    message: Message;
    constructor();
    ngOnInit(): void;
    get isMine(): boolean;
    get date(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageFooterComponent, "app-message-footer", never, { "message": "message"; }, {}, never, never>;
}
