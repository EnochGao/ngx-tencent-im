import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UserProfile } from '../im.type';
import { currentUserProfileSelector } from '../store/selectors';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.less']
})
export class MyProfileComponent implements OnInit, OnDestroy {
  currentUser: UserProfile;
  subscription: Subscription;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.subscription = this.store.select(currentUserProfileSelector).subscribe(res => {
      if (res) {
        this.currentUser = res;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  };

}
