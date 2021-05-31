import { Component, Input, OnInit } from '@angular/core';
import { MessageItem } from 'projects/ng-tencent-im/src/im.type';


@Component({
  selector: 'app-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.less']
})
export class ImageElementComponent implements OnInit {
  @Input() message: MessageItem;
  @Input() isMine: boolean;
  @Input() payload: any;
  @Input() percent: number;
  imageUrl: string;
  constructor() { }

  ngOnInit(): void {
    const url = this.payload.imageInfoArray[0].imageUrl;
    if (typeof url !== 'string') {
      this.imageUrl = '';
    }
    this.imageUrl = url.slice(0, 2) === '//' ? `https:${url}` : url;
  }

}
