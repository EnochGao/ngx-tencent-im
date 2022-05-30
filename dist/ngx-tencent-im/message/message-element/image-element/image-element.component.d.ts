import { OnInit } from '@angular/core';
import { Message } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class ImageElementComponent implements OnInit {
    message: Message;
    isMine: boolean;
    payload: any;
    percent: number;
    imageUrl: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageElementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageElementComponent, "app-image-element", never, { "message": "message"; "isMine": "isMine"; "payload": "payload"; "percent": "percent"; }, {}, never, never>;
}
