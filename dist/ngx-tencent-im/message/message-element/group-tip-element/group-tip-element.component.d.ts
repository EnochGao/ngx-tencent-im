import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Message } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class GroupTipElementComponent implements OnInit, OnChanges {
    message: Message;
    isMine: boolean;
    payload: any;
    text: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getGroupTipContent(message: Message): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupTipElementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupTipElementComponent, "app-group-tip-element", never, { "message": "message"; "isMine": "isMine"; "payload": "payload"; }, {}, never, never>;
}
