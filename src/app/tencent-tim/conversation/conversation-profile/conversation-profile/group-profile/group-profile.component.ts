import { Component, Input, OnInit } from '@angular/core';
import { Conversation, GroupProfile } from 'src/app/tencent-tim/im.type';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.less']
})
export class GroupProfileComponent implements OnInit {
  @Input() currentConversation: Conversation;

  constructor() { };

  ngOnInit(): void {
    console.log('currentConversation::😂😂😂', this.currentConversation);
  }

}
