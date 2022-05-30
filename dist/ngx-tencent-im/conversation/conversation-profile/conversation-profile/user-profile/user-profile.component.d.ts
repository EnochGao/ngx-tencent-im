import { OnInit } from '@angular/core';
import { Profile } from 'tim-js-sdk';
import * as i0 from "@angular/core";
export declare class UserProfileComponent implements OnInit {
    userProfile: Profile;
    constructor();
    ngOnInit(): void;
    get gender(): "男" | "女" | "未设置";
    get genderClass(): "" | "icon-male" | "icon-female";
    static ɵfac: i0.ɵɵFactoryDeclaration<UserProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserProfileComponent, "app-user-profile", never, { "userProfile": "userProfile"; }, {}, never, never>;
}
