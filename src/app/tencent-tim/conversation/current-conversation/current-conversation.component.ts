import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Conversation, ConversationItem } from '../../im.type';
import { conversationSelector } from '../../store/selectors';
import { TimHelperService } from '../../tim-helper.service';

@Component({
  selector: 'app-current-conversation',
  templateUrl: './current-conversation.component.html',
  styleUrls: ['./current-conversation.component.less']
})
export class CurrentConversationComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  currentConversation: Conversation;
  currentMessageList = [];

  isShowScrollBottomTips = false;
  isCompleted = false;
  subscription: Subscription;
  storeSubscription: Subscription;

  preScrollHeight = 0;

  name: string;
  toAccount: string;

  @ViewChild('messageList', { static: false }) messageListRef: ElementRef;
  constructor(
    private store: Store,
    private timHelperService: TimHelperService,

  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('value changes', changes);
  }


  ngAfterViewInit(): void {
    this.keepMessageListOnBottom();
  }

  ngOnInit(): void {

    // 获取当前会话
    this.storeSubscription = this.store.select(conversationSelector)
      .subscribe(res => {
        this.currentMessageList = res.currentMessageList;
        this.currentConversation = res.currentConversation;
        this.isCompleted = res.isCompleted;
        console.log('当前会话', res);
        if (!res.currentConversation || !res.currentConversation.conversationID) {
          this.toAccount = '';
        }
        switch (res.currentConversation.type) {
          case 'C2C':
            this.toAccount = res.currentConversation.conversationID.replace('C2C', '');
            break;
          case 'GROUP':
            this.toAccount = res.currentConversation.conversationID.replace('GROUP', '');
            break;
          default:
            this.toAccount = res.currentConversation.conversationID;
        }
        this.getName();
        if (res.currentMessageList && res.currentMessageList.length > 0) {
          this.keepMessageListOnBottom();
          this.timHelperService.tim.setMessageRead({ conversationID: this.currentConversation.conversationID });
        }
      }, err => {
        console.log('获取当前会话err', err);
      });

    this.subscription = this.timHelperService.eventBus$
      .subscribe((res: string) => {
        if (res === 'scroll-bottom') {
          this.scrollMessageListToBottom();
        }
        // if (res === 'select-item') {
        //   this.scrollMessageListToButtom();
        // }
      });
  };


  getMore() {
    this.timHelperService.getMessageList(this.currentConversation.conversationID);
    // this.isShowScrollBottomTips = true;
  }

  onscroll({ target: { scrollTop } }) {
    let messageListNode = this.messageListRef.nativeElement;

    if (!messageListNode) {
      return;
    }
    if (this.preScrollHeight - messageListNode.clientHeight - scrollTop < 20) {
      this.isShowScrollBottomTips = false;
    }
  }

  scrollMessageListToBottom() {
    let messageListNode = this.messageListRef.nativeElement;
    if (!messageListNode) {
      return;
    }

    setTimeout(() => {
      messageListNode.scrollTop = messageListNode.scrollHeight;
      this.preScrollHeight = messageListNode.scrollHeight;
      this.isShowScrollBottomTips = false;
    }, 0);

  }

  // 如果滚到底部就保持在底部，否则提示是否要滚到底部
  keepMessageListOnBottom() {
    setTimeout(() => {
      let messageListNode = this.messageListRef.nativeElement;
      if (!messageListNode) {
        return;
      }

      // 距离底部20px内强制滚到底部,否则提示有新消息
      if (this.preScrollHeight - messageListNode.clientHeight - messageListNode.scrollTop < 20) {
        messageListNode.scrollTop = messageListNode.scrollHeight;
        this.isShowScrollBottomTips = false;
      } else {
        this.isShowScrollBottomTips = true;
      }
      this.preScrollHeight = messageListNode.scrollHeight;
    }, 0);

  }

  private getName() {
    if (this.currentConversation?.type === 'C2C') {
      this.name = this.currentConversation.userProfile.nick || this.toAccount;
    } else if (this.currentConversation?.type === 'GROUP') {
      this.name = this.currentConversation.groupProfile.name || this.toAccount;
    } else if (this.currentConversation?.conversationID === '@TIM#SYSTEM') {
      this.name = '系统通知';
    }
  }

  get showCurrentConversation() {
    return !!this.currentConversation?.conversationID;
  }

  get showMessageSendBox() {
    return (this.currentConversation.type !== TIM.TYPES.CONV_SYSTEM);
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
