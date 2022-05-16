import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'tim-js-sdk';

import TIM from 'tim-js-sdk';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {
  @Input() userProfile: Profile;
  constructor() { }

  ngOnInit(): void {
  }

  get gender() {
    switch (this.userProfile.gender) {
      case TIM.TYPES.GENDER_MALE:
        return '男';
      case TIM.TYPES.GENDER_FEMALE:
        return '女';
      default:
        return '未设置';
    }
  }
  get genderClass() {
    switch (this.userProfile.gender) {
      case TIM.TYPES.GENDER_MALE:
        return 'icon-male';
      case TIM.TYPES.GENDER_FEMALE:
        return 'icon-female';
      default:
        return '';
    }
  }

}
