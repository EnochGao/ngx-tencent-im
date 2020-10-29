import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'winkong-tencent-im';
  isLogin = false;

  login(login: boolean) {
    this.isLogin = login;
  }
}
