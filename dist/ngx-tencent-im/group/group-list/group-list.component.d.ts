import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { Group } from 'tim-js-sdk';
import { TimHelperService } from '../../tim-helper.service';
import * as i0 from "@angular/core";
export declare class GroupListComponent implements OnInit, OnDestroy {
    private store;
    private cd;
    private modal;
    private timHelper;
    group: Group;
    loading: boolean;
    groupList: Array<Group>;
    groupListOfOption: any[];
    subscription: Subscription;
    private selectGroup;
    constructor(store: Store, cd: ChangeDetectorRef, modal: NzModalService, timHelper: TimHelperService);
    ngOnInit(): void;
    searchGroupByID(queryString: string): void;
    applyJoinGroup(group: Group): void;
    createGroup(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupListComponent, "app-group-list", never, {}, {}, never, never>;
}
