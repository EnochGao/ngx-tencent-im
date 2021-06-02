import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { MESSAGE_STATUS } from '../shared.data';
import { getMessage } from '../store/selectors';

@Component({
  selector: 'app-tencent-tim',
  templateUrl: './tencent-tim.component.html',
  styleUrls: ['./tencent-tim.component.less']
})
export class TencentTimComponent implements OnInit, OnDestroy {

  @Output() message = new EventEmitter<any>();

  subscription: Subscription;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select(getMessage)
      .subscribe((res: { type: string, message: string; }) => {
        this.message.emit(res);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
