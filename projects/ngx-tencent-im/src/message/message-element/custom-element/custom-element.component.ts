import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Message } from 'tim-js-sdk';
import { formatDuration } from '../../../util/format-duration';
import { ACTION } from '../../../util/trtc-custom-message-map';


@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.less']
})
export class CustomElementComponent implements OnInit, OnChanges {
  @Input() message: Message;
  @Input() isMine: boolean;
  @Input() payload: any;
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.text = this.translateCustomMessage(this.payload);
  }

  translateCustomMessage(payload) {
    let videoPayload = {
      action: 0,
      duration: 0
    };
    try {
      videoPayload = JSON.parse(payload.data);
    } catch (e) {
      videoPayload = {
        action: 0,
        duration: 0
      };
    }
    if (payload.data === 'group_create') {
      return `${payload.extension}`;
    }
    switch (videoPayload.action) {
      case ACTION.VIDEO_CALL_ACTION_DIALING:
        return '[请求通话]';
      case ACTION.VIDEO_CALL_ACTION_SPONSOR_CANCEL:
        return '[取消通话]';
      case ACTION.VIDEO_CALL_ACTION_REJECT:
        return '[拒绝通话]';
      case ACTION.VIDEO_CALL_ACTION_SPONSOR_TIMEOUT:
        return '[无应答]';
      case ACTION.VIDEO_CALL_ACTION_ACCEPTED:
        return '[开始通话]';
      case ACTION.VIDEO_CALL_ACTION_HANGUP:
        return `[结束通话，通话时长：${formatDuration(videoPayload.duration)}]`;
      case ACTION.VIDEO_CALL_ACTION_LINE_BUSY:
        return '[正在通话中]';
      case ACTION.VIDEO_CALL_ACTION_ERROR:
        return '[设备异常]';
      default:
        return '[自定义消息]';
    }
  }
}
