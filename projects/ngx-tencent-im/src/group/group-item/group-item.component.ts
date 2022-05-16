import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Group } from 'tim-js-sdk';
import { TimHelperService } from '../../tim-helper.service';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.less']
})
export class GroupItemComponent implements OnInit {
  @Input() group: Group;

  constructor(
    private timHelperService: TimHelperService,
  ) { }

  ngOnInit(): void {
  }

  handleGroupClick() {
    const conversationID = `GROUP${this.group.groupID}`;
    this.timHelperService.checkoutConversation(conversationID);
  }

}
