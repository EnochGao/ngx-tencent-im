import { Component, Input, OnInit } from '@angular/core';
import { MessageItem } from 'src/app/tencent-tim/im.type';

@Component({
  selector: 'app-file-element',
  templateUrl: './file-element.component.html',
  styleUrls: ['./file-element.component.less']
})
export class FileElementComponent implements OnInit {

  @Input() message: MessageItem;
  @Input() isMine: boolean;
  @Input() payload: any;


  fileUrl: string;
  fileName: string;
  fileSize: string;

  constructor() { }

  ngOnInit(): void {
    this.fileUrl = this.payload.fileUrl;
    this.fileName = this.payload.fileName;
    this.getSize();
  }

  downloadFile() {
    // 浏览器支持fetch则用blob下载，避免浏览器点击a标签，跳转到新页面预览的行为
    if (window.fetch) {
      fetch(this.fileUrl)
        .then(res => res.blob())
        .then(blob => {
          let a = document.createElement('a');
          let url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = this.fileName;
          a.click();
        });
    } else {
      let a = document.createElement('a');
      a.href = this.fileUrl;
      a.target = '_blank';
      a.download = this.fileName;
      a.click();
    }
  }

  getSize() {
    const size = this.payload.fileSize;
    if (size > 1024) {
      if (size / 1024 > 1024) {
        this.fileSize = `${this.toFixed(size / 1024 / 1024)} Mb`;
        return;
      }
      this.fileSize = `${this.toFixed(size / 1024)} Kb`;
      return;
    }
    this.fileSize = `${this.toFixed(size)}B`;
  }

  toFixed(number: number, precision = 2) {
    return number.toFixed(precision);
  }

}
