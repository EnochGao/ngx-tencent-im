import { OnInit } from '@angular/core';
import { Group } from 'tim-js-sdk';
import { TimHelperService } from '../../tim-helper.service';
import * as i0 from "@angular/core";
export declare class GroupItemComponent implements OnInit {
    private timHelperService;
    group: Group;
    constructor(timHelperService: TimHelperService);
    ngOnInit(): void;
    handleGroupClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupItemComponent, "app-group-item", never, { "group": "group"; }, {}, never, never>;
}
