import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

import { genTestUserSig } from './tim-config/GenerateTestUserSig';

import { TimHelperService } from 'ngx-tencent-im';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isLogin = false;
  constructor() { }
}
