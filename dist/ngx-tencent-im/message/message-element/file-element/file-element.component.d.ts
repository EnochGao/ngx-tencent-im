import { OnInit } from '@angular/core';
import { Message } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class FileElementComponent implements OnInit {
    message: Message;
    isMine: boolean;
    payload: any;
    fileUrl: string;
    fileName: string;
    fileSize: string;
    constructor();
    ngOnInit(): void;
    downloadFile(): void;
    getSize(): void;
    toFixed(number: number, precision?: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileElementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileElementComponent, "app-file-element", never, { "message": "message"; "isMine": "isMine"; "payload": "payload"; }, {}, never, never>;
}
