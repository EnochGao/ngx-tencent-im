import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd';
import { Subscription } from 'rxjs';
import { getMessage } from '../store/selectors';

@Component({
  selector: 'app-tencent-tim',
  templateUrl: './tencent-tim.component.html',
  styleUrls: ['./tencent-tim.component.less']
})
export class TencentTimComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(
    private store: Store,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.subscription = this.store.select(getMessage)
      .subscribe((res: { type: string, message: string; }) => {
        if (res.type === 'success') {
          this.message.success(res.message);
        }
        if (res.type === 'warn') {
          this.message.warning(res.message);
        }
        if (res.type === 'error') {
          this.message.error(res.message);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
