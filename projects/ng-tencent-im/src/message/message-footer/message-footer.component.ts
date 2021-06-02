import { Component, Input, OnInit } from '@angular/core';
import { MessageItem } from '../../im.type';
import { getFullDate } from '../../util/date';

@Component({
  selector: 'app-message-footer',
  templateUrl: './message-footer.component.html',
  styleUrls: ['./message-footer.component.less']
})
export class MessageFooterComponent implements OnInit {
  @Input() message: MessageItem;

  constructor() { }

  ngOnInit(): void {
  }

  get isMine() {
    return this.message.flow === 'out';
  }

  get date() {
    return getFullDate(new Date(this.message.time * 1000));
  }
}
