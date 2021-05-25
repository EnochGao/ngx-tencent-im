import { Component, Input, OnInit } from '@angular/core';
import { MessageItem } from 'src/app/tencent-tim/im.type';
import { decodeText } from 'src/app/tencent-tim/util/decodeText';

@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.less']
})
export class TextElementComponent implements OnInit {
  @Input() message: MessageItem;
  @Input() isMine: boolean;
  @Input() payload: any;

  contentList: Array<{ name: string, src: string; text: string; }>;

  constructor() { }

  ngOnInit(): void {
    this.contentList = decodeText(this.payload);
  }


}
