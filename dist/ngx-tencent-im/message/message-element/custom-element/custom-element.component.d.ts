import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Message } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class CustomElementComponent implements OnInit, OnChanges {
    message: Message;
    isMine: boolean;
    payload: any;
    text: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    translateCustomMessage(payload: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomElementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomElementComponent, "app-custom-element", never, { "message": "message"; "isMine": "isMine"; "payload": "payload"; }, {}, never, never>;
}
