import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { pushCurrentMessageListAction, showAction } from '../../store/actions';

import { TimHelperService } from '../../tim-helper.service';
import { emojiMap, emojiName, emojiUrl } from '../../util/emojiMap';

@Component({
  selector: 'app-message-send-box',
  templateUrl: './message-send-box.component.html',
  styleUrls: ['./message-send-box.component.less']
})
export class MessageSendBoxComponent implements OnInit, OnDestroy {
  active: boolean;
  visible: boolean = false;
  emojiName = emojiName;
  emojiUrl = emojiUrl;
  emojiMap = emojiMap;
  focus = false;
  // 消息内容
  messageContent: string = '';
  @ViewChild('imagePicker', { static: false }) imagePicker: ElementRef;
  @ViewChild('filePicker', { static: false }) filePicker: ElementRef;
  @ViewChild('textInput', { static: true }) textInput: ElementRef;
  constructor(
    private timHelperService: TimHelperService,
    private store: Store,

  ) { }
  ngOnDestroy(): void {
    this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));
  }

  ngOnInit(): void {
    console.log('%ctextInput:::', 'color:green;font-size:30px', this.textInput);
    this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));
  }

  onfocus(event: any) {
    console.log('cccccD', event);
  }

  handleEnter(event: KeyboardEvent) {
    console.log('handleEnter::', event);
    this.sendTextMessage();
  }
  handleLine(event: KeyboardEvent) {
    event.preventDefault();
    if (event.ctrlKey && event.key === 'Enter') {
      this.messageContent += '\n';
      console.log('handleLine::', event);
    }
  }
  handleUp(event: KeyboardEvent) {
    console.log('handleUp::', event);
  }

  handleDown(event: KeyboardEvent) {
    console.log('handleDown::', event);
  }

  keyDown(event: KeyboardEvent) {
    if (!event.ctrlKey && event.key === 'Enter') {
      event.preventDefault();
      this.handleEnter(event);
    }
    if (event.key === 'ArrowUp') {
      event.stopPropagation();
      this.handleUp(event);
    }
    if (event.key === 'ArrowDown') {
      event.stopPropagation();
      this.handleDown(event);
    }
  }

  handlePaste(e) {
    let clipboardData = e.clipboardData;
    let file;
    if (clipboardData && clipboardData.files && clipboardData.files.length > 0) {
      file = clipboardData.files[0];
    }

    if (typeof file === 'undefined') {
      return;
    }
    // 1. 创建消息实例，接口返回的实例可以上屏
    let message = this.timHelperService.tim.createImageMessage({
      to: this.timHelperService.toAccount,
      conversationType: this.timHelperService.currentConversationType,
      payload: {
        file: file,
      },
      onProgress: (percent) => {
        message['progress'] = percent; // 手动给message 实例加个响应式属性: progress
      },
    });

    // 2. 发送消息
    let promise = this.timHelperService.tim.sendMessage(message).then(res => {
      this.store.dispatch(pushCurrentMessageListAction({ message }));
    });
    promise.catch((error) => {
      console.error('[sendMessage error]::', error);
    });
  }

  sendImage(event: any) {
    let message = this.timHelperService.tim.createImageMessage({
      to: this.timHelperService.toAccount,
      conversationType: this.timHelperService.currentConversationType,
      payload: {
        file: this.imagePicker.nativeElement // 或者用event.target
      },
      onProgress: (percent) => {
        // 手动给message 实例加个响应式属性: progress
        message['progress'] = percent;
        console.log('percent:', percent);
      }
    });

    this.timHelperService.tim
      .sendMessage(message)
      .then(({ data }) => {
        console.log('发送成功', data);
        this.store.dispatch(pushCurrentMessageListAction({ message: Object.assign({}, data.message) }));
        this.imagePicker.nativeElement.value = null;
      })
      .catch(imError => {
        console.error('imError::', imError);
      });
  }

  sendFile(event: any) {
    const message = this.timHelperService.tim.createFileMessage({
      to: this.timHelperService.toAccount,
      conversationType: this.timHelperService.currentConversationType,
      payload: {
        file: document.getElementById('filePicker'), // 或者用event.target
      },
      onProgress: (percent) => {
        message['progress'] = percent;
        console.log('上传进度', percent);
      },
    });

    this.timHelperService.tim
      .sendMessage(message)
      .then(({ data }) => {
        this.store.dispatch(pushCurrentMessageListAction({ message: Object.assign({}, data.message) }));

        this.filePicker.nativeElement.value = null;
      })
      .catch((imError) => {
        console.error('imError::', imError);

      });
  }

  chooseEmoji(item: string) {
    console.log(item);
    this.messageContent += item;
  }

  sendTextMessage() {
    if (
      this.messageContent === '' ||
      this.messageContent.trim().length === 0
    ) {
      this.messageContent = '';
      this.store.dispatch(showAction({ msgType: 'warn', message: '不能发送空消息哦！' }));
      return;
    }
    let message = this.timHelperService.tim.createTextMessage({
      to: this.timHelperService.toAccount,
      conversationType: this.timHelperService.currentConversationType,
      payload: { text: this.messageContent }
    });
    this.store.dispatch(pushCurrentMessageListAction({ message }));
    this.timHelperService.eventBus$.next('scroll-bottom');
    this.timHelperService.tim.sendMessage(message).catch(error => {
      console.error('[sendMessage error]::', error);
    });

    this.messageContent = '';

  }

  handleSendImageClick(input: HTMLInputElement) {
    input.click();
  }

  handleSendFileClick(input: HTMLInputElement) {
    input.click();
  }

}
