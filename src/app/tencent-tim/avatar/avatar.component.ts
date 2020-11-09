import { Component, Input, OnInit } from '@angular/core';
import { MessageItem } from '../im.type';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnInit {
  @Input() shape: string = 'circle';
  @Input() message: MessageItem;
  @Input() avatarSrc: string = 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-3.png';

  constructor() { }

  ngOnInit(): void {
    if (this.message) {
      if (this.message.flow === 'in') {
        this.avatarSrc = 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-2.png';
      }
    }
  }

}
