import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TimHelperService } from 'ngx-tencent-im';
import { genTestUserSig } from '../tim-config/GenerateTestUserSig';

@Component({
  selector: 'app-im-test',
  templateUrl: './im-test.component.html',
  styleUrls: ['./im-test.component.less']
})
export class ImTestComponent implements OnInit {
  isLogin = false;
  hidden = false;

  unread = this.timHelperService.totalUnRead;

  constructor(
    private message: NzMessageService,
    private timHelperService: TimHelperService
  ) { }

  ngOnInit(): void {
    this.timHelperService.login('user0', genTestUserSig('user0').userSig);
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
      case 'info': this.message.info(message.message);
        break;

      default:
        break;
    }
  }

}
