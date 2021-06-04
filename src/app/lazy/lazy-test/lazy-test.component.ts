import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TimHelperService } from 'ngx-tencent-im';
import { genTestUserSig } from '../../tim-config/GenerateTestUserSig';


@Component({
  selector: 'app-lazy-test',
  templateUrl: './lazy-test.component.html',
  styleUrls: ['./lazy-test.component.less']
})
export class LazyTestComponent implements OnInit {
  isLogin = false;
  constructor(
    private message: NzMessageService,
    private timHelperService: TimHelperService
  ) {

    this.timHelperService.login('user1', genTestUserSig('user1').userSig);

    this.timHelperService.eventBus$.subscribe(res => {
      if (res === 'login') {
        this.isLogin = true;
      }
      if (res === 'logout') {
        this.isLogin = false;
      }
    });
  }

  ngOnInit(): void {
  }

  messageTip(message: any) {
    switch (message.type) {
      case 'success': this.message.success(message.message);
        break;
      case 'error': this.message.error(message.message);
        break;
      case 'warning': this.message.warning(message.message);
        break;
      case 'info': this.message.info(message.message);
        break;
      default:
        break;
    }
  }
}
