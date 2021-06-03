import { Component, Input, OnInit } from '@angular/core';
import { MessageItem } from '../../im.type';
import { TimHelperService } from '../../tim-helper.service';

@Component({
  selector: 'app-message-status-icon',
  templateUrl: './message-status-icon.component.html',
  styleUrls: ['./message-status-icon.component.less']
})
export class MessageStatusIconComponent implements OnInit {
  @Input() message: MessageItem;

  constructor(
    private timHelperService: TimHelperService
  ) { }

  ngOnInit(): void {
  }

  get messageIconClass() {
    switch (this.message.status) {
      case 'unSend':
        return 'el-icon-loading';
      case 'fail':
        return 'message-send-fail';
      default:
        return '';
    }
  }

  handleIconClick() {
    if (this.messageIconClass === 'message-send-fail') {
      this.timHelperService.tim.resendMessage(this.message).catch(imError => {
        console.error(imError.message);
      });
    }
  }

}
