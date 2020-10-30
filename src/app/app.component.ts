import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLogin } from 'src/store/selectors/login.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'winkong-tencent-im';
  isLogin = false;
  constructor(
    private store: Store
  ) {

    this.store.select(getLogin).subscribe(res => {
      if (!res) {
        this.isLogin = false;
      }
    });
  }

  login(login: boolean) {
    this.isLogin = login;
  }
}
