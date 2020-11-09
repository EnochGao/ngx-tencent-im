import { Component } from '@angular/core';

import { TimHelperService } from './tencent-tim/tim-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isLogin = false;

  constructor(
    private timHelperService: TimHelperService
  ) {
    this.timHelperService.eventBus$.subscribe(res => {
      if (res === 'login') {
        this.isLogin = true;
      }
      if (res === 'logout') {
        this.isLogin = false;
      }
    });
  }

}
