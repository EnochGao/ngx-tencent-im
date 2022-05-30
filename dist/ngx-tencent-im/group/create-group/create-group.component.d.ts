import { OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { TIM_TYPES } from '../../shared.data';
import { TimHelperService } from '../../tim-helper.service';
import * as i0 from "@angular/core";
export declare class CreateGroupComponent implements OnInit {
    private fb;
    private store;
    private cd;
    modalRef: NzModalRef;
    private timeHelper;
    validateForm: FormGroup;
    captchaTooltipIcon: any;
    groupTypeOption: {
        label: string;
        value: TIM_TYPES;
    }[];
    memberListOfOption: any[];
    loading: boolean;
    private nzSelect;
    constructor(fb: FormBuilder, store: Store, cd: ChangeDetectorRef, modalRef: NzModalRef, timeHelper: TimHelperService);
    ngOnInit(): void;
    handleSearchUser(userID: string): void;
    submitForm(): void;
    getOptions(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateGroupComponent, "im-create-group", never, {}, {}, never, never>;
}
