import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { UserProfile } from '../../im.type';
import { TIM } from '../../shared.data';

@Component({
  selector: 'im-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent implements OnInit {

  @Input() set userProfile(value: UserProfile) {
    this._userProfile = value;
    switch (value.gender) {
      case TIM.TYPES.GENDER_MALE:
        this.className = 'icon-male';
        break;
      case TIM.TYPES.GENDER_FEMALE:
        this.className = 'icon-female';
        break;
      default:
        this.className = null;
    }
  };

  get userProfile() {
    return this._userProfile;
  }

  className: string;

  private _userProfile: UserProfile;

  constructor() { };

  ngOnInit(): void {

  }

}
