import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReEditMessageService } from '../../re-edit-message.service';
import { MESSAGE_STATUS } from '../../shared.data';
import { pushCurrentMessageListAction, showAction } from '../../store/actions';
import { currentConversationSelector } from '../../store/selectors';

import { TimHelperService } from '../../tim-helper.service';
import { emojiMap, emojiName, emojiUrl } from '../../util/emoji-map';

@Component({
  selector: 'app-message-send-box',
  templateUrl: './message-send-box.component.html',
  styleUrls: ['./message-send-box.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageSendBoxComponent implements OnInit, OnDestroy {
  active: boolean;
  visible = false;
  emojiName = emojiName;
  emojiUrl = emojiUrl;
  emojiMap = emojiMap;
  focus = false;
  // 消息内容
  messageContent = '';

  toAccount: any;
  currentConversationType: any;
  currentConversation: any;

  @ViewChild('imagePicker', { static: false }) imagePicker: ElementRef;
  @ViewChild('filePicker', { static: false }) filePicker: ElementRef;
  @ViewChild('textInput', { static: true }) textInput: ElementRef;
  constructor(
    private store: Store,
    private cd: ChangeDetectorRef,
    private timHelperService: TimHelperService,
    private reEditMessage: ReEditMessageService
  ) { }

  ngOnInit(): void {
    this.store.select(currentConversationSelector).subscribe(currentConversation => {
      this.currentConversation = currentConversation;
      if (!currentConversation || !currentConversation.conversationID) {
        this.toAccount = '';
      } else {
        switch (currentConversation.type) {
          case 'C2C':
            this.toAccount = currentConversation.conversationID.replace('C2C', '');
            break;
          case 'GROUP':
            this.toAccount = currentConversation.conversationID.replace('GROUP', '');
            break;
          default:
            this.toAccount = currentConversation.conversationID;
        }
      }

      if (!currentConversation || !currentConversation.type) {
        this.currentConversationType = '';
      } else {
        this.currentConversationType = currentConversation.type;
      }
    });
    this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));

    this.reEditMessage.reEditMessage.subscribe((payload) => {
      this.messageContent = payload;
      this.cd.markForCheck();
    });
  }

  onfocus(event: Event) {
    console.log('onfocus');
    this.focus = true;
    console.log(this.currentConversation);
    this.timHelperService.checkoutConversation(this.currentConversation.conversationID);
  }

  onblur(event: Event) {
    console.log('onblur');
    this.focus = false;
  }

  handleEnter(event: KeyboardEvent) {
    this.sendTextMessage();
  }
  handleLine(event: KeyboardEvent) {
    event.preventDefault();
    if (event.ctrlKey && event.key === 'Enter') {
      this.messageContent += '\n';
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

  handlePaste(e: any) {
    const clipboardData = e.clipboardData;
    let file: any;
    if (clipboardData && clipboardData.files && clipboardData.files.length > 0) {
      file = clipboardData.files[0];
    }

    if (typeof file === 'undefined') {
      return;
    }
    // 1. 创建消息实例，接口返回的实例可以上屏
    const message = this.timHelperService.tim.createImageMessage({
      to: this.toAccount,
      conversationType: this.currentConversationType,
      payload: {
        file,
      },
      onProgress: (percent) => {
        message.progress = percent; // 手动给message 实例加个响应式属性: progress
      },
    });

    // 2. 发送消息
    const promise = this.timHelperService.tim.sendMessage(message).then(res => {
      this.store.dispatch(pushCurrentMessageListAction({ message }));
    });
    promise.catch((error) => {
      console.error('[sendMessage error]::', error);
    });
  }

  sendImage(event: any) {
    console.log('sendImage');
    const message = this.timHelperService.tim.createImageMessage({
      to: this.toAccount,
      conversationType: this.currentConversationType,
      payload: {
        file: this.imagePicker.nativeElement // 或者用event.target
      },
      onProgress: (percent) => {
        // 手动给message 实例加个响应式属性: progress
        message.progress = percent;
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
      to: this.toAccount,
      conversationType: this.currentConversationType,
      payload: {
        file: document.getElementById('filePicker'), // 或者用event.target
      },
      onProgress: (percent) => {
        message.progress = percent;
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
      this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: '不能发送空消息哦！' }));
      return;
    }
    const message = this.timHelperService.tim.createTextMessage({
      to: this.toAccount,
      conversationType: this.currentConversationType,
      payload: { text: this.messageContent }
    });
    this.store.dispatch(pushCurrentMessageListAction({ message }));
    this.timHelperService.eventBus$.next('scroll-bottom');
    this.timHelperService.tim.sendMessage(message).catch(error => {
      console.error('[sendMessage error]::', error);
    });

    this.messageContent = '';

  }

  handleSendImageClick(input: HTMLInputElement, event: Event) {
    event.stopPropagation();

    input.click();
  }

  handleSendFileClick(input: HTMLInputElement) {
    input.click();
  }

  ngOnDestroy(): void {
    this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));
  }

}
