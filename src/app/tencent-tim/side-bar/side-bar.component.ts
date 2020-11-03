import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction } from 'src/store/actions';
import { TimAuthService } from '../tim-auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {

  constructor(
    private store: Store,
    private timAuthService: TimAuthService

  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.timAuthService.logout();
  }
}
