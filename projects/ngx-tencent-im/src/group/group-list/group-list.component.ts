import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GroupProfile } from '../../im.type';
import { groupListSelector } from '../../store/selectors/group.selector';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.less']
})
export class GroupListComponent implements OnInit, OnDestroy {
  groupList: Array<GroupProfile> = [];
  subscription: Subscription;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select(groupListSelector).subscribe(res => {
      console.log('group::', res);
      this.groupList = res;
    });
  }
  createGroup() {

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
