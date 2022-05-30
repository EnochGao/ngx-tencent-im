import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Profile } from 'tim-js-sdk';
import { TimHelperService } from '../../tim-helper.service';
import * as i0 from "@angular/core";
export declare class EditProfileComponent implements OnInit {
    private fb;
    modalRef: NzModalRef;
    private store;
    private timHelperService;
    userProfile: Profile;
    form: FormGroup;
    radioOption: {
        label: string;
        value: string;
    }[];
    constructor(fb: FormBuilder, modalRef: NzModalRef, store: Store, timHelperService: TimHelperService);
    ngOnInit(): void;
    submitForm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditProfileComponent, "im-edit-profile", never, { "userProfile": "userProfile"; }, {}, never, never>;
}
