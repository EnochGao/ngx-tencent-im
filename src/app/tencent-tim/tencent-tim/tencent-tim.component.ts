import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd';
import { getMessage } from '../store/selectors';

@Component({
  selector: 'app-tencent-tim',
  templateUrl: './tencent-tim.component.html',
  styleUrls: ['./tencent-tim.component.less']
})
export class TencentTimComponent implements OnInit {

  constructor(
    private store: Store,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.store.select(getMessage)
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
}
