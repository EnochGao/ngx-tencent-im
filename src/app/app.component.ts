import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

import { genTestUserSig } from './tim-config/GenerateTestUserSig';

import { TimHelperService } from 'ng-tencent-im';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isLogin = false;

  constructor(
    private message: NzMessageService,
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


  messageTip(message: any) {
    switch (message.type) {
      case 'success': this.message.success(message.message);
        break;
      case 'error': this.message.error(message.message);
        break;
      case 'warning': this.message.warning(message.message);
        break;

      default:
        break;
    }
  }

}
