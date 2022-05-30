import { OnInit } from '@angular/core';
import { Profile } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class ProfileCardComponent implements OnInit {
    set userProfile(value: Profile);
    get userProfile(): Profile;
    className: string;
    private _userProfile;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileCardComponent, "im-profile-card", never, { "userProfile": "userProfile"; }, {}, never, never>;
}
