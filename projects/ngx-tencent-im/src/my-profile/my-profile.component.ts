import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';

import { UserProfile } from '../im.type';
import { currentUserProfileSelector } from '../store/selectors';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.less'],
})
export class MyProfileComponent implements OnInit, OnDestroy {
  currentUserProfile: UserProfile;
  subscription: Subscription;

  constructor(
    private store: Store,
    private modal: NzModalService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select(currentUserProfileSelector)
      .subscribe(res => {
        if (res) {
          this.currentUserProfile = res;
        }
      });
  }

  editProfile() {
    this.modal.create({
      nzTitle: `编辑资料`,
      nzContent: EditProfileComponent,
      nzMaskClosable: false,
      nzFooter: null,
      nzWidth: '40%',
      nzStyle: { top: '20px' },
      nzComponentParams: {
        userProfile: this.currentUserProfile
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  };

}
