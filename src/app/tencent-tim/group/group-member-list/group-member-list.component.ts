import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Conversation, GroupProfile } from '../../im.type';

@Component({
  selector: 'app-group-member-list',
  templateUrl: './group-member-list.component.html',
  styleUrls: ['./group-member-list.component.less']
})
export class GroupMemberListComponent implements OnInit {
  @Input() currentConversation: Conversation;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    console.log('currentConversation::', this.currentConversation);
  }

}
