import { OnInit } from '@angular/core';
import { Message } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class TextElementComponent implements OnInit {
    message: Message;
    isMine: boolean;
    payload: any;
    contentList: Array<{
        name: string;
        src: string;
        text: string;
    }>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextElementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextElementComponent, "app-text-element", never, { "message": "message"; "isMine": "isMine"; "payload": "payload"; }, {}, never, never>;
}
