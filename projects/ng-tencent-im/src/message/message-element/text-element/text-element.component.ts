import { Component, Input, OnInit } from '@angular/core';
import { MessageItem } from '../../../im.type';
import { decodeText } from '../../../util/decode-text';


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
