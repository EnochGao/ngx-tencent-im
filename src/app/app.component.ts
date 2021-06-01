import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MESSAGE_STATUS } from 'projects/ng-tencent-im/src/shared.data';
import { TimHelperService } from 'projects/ng-tencent-im/src/tim-helper.service';



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

    this.timHelperService.login('user1');
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
      case MESSAGE_STATUS.success: this.message.success(message.message);
        break;
      case MESSAGE_STATUS.error: this.message.error(message.message);
        break;
      case MESSAGE_STATUS.warning: this.message.warning(message.message);
        break;

      default:
        break;
    }
  }

}
