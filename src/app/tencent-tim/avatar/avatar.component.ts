import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnInit {
  @Input() shape: string = 'circle';
  @Input() avatarSrc: string = 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-3.png';

  constructor() { }

  ngOnInit(): void {
  }

}
