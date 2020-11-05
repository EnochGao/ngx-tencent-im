import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TimHelperService } from '../tim-helper.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {

  constructor(
    private store: Store,
    private timHelperService: TimHelperService

  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.timHelperService.logout();
  }
}
