import { AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewChild, ɵCodegenComponentFactoryResolver } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getSelectConversationStates } from 'src/store/selectors';

import { ConversationItem } from '../../im.type';
import { TimHelperService } from '../../tim-helper.service';

@Component({
  selector: 'app-current-conversation',
  templateUrl: './current-conversation.component.html',
  styleUrls: ['./current-conversation.component.less']
})
export class CurrentConversationComponent implements OnInit, AfterViewInit, OnDestroy {
  currentConversation: ConversationItem;
  currentMessageList = [];
  isShowScrollButtomTips = false;
  preScrollHeight = 0;
  isCompleted = false;
  subscription: Subscription;
  storeSubscription: Subscription;

  isShowCurrentConversation = false;
  isShowMessageSendBox = false;
  name: string;

  @ViewChild('messageList', { static: false }) messageListRef: ElementRef;
  constructor(
    private store: Store,
    private timHelperService: TimHelperService,

  ) { }


  ngAfterViewInit(): void {
    if (this.isShowCurrentConversation) {
      this.keepMessageListOnButtom();
    }

  }

  ngOnInit(): void {

    // 获取当前会话
    this.storeSubscription = this.store.select(getSelectConversationStates)
      .subscribe(res => {
        console.log('获取当前会话', res);
        this.currentMessageList = res.currentMessageList;
        this.currentConversation = res.currentConversation;
        this.isCompleted = res.isCompleted;

        this.showCurrentConversation();
        this.showMessageSendBox();
        this.getName();


        if (res.currentMessageList && res.currentMessageList.length > 0) {
          this.scrollMessageListToButtom();


          console.log('this.currentConversation.conversationID', this.currentConversation.conversationID);

          this.timHelperService.tim.setMessageRead({ conversationID: this.currentConversation.conversationID });
        }


      }, err => {
        console.log('获取当前会话err', err);

      });

    this.subscription = this.timHelperService.eventBus$
      .subscribe((res: string) => {
        if (res === 'scroll-bottom') {
          this.scrollMessageListToButtom();
        }
        // if (res === 'select-item') {
        //   this.scrollMessageListToButtom();
        // }
      });
  };


  getMore() {
    this.timHelperService.getMessageList(this.currentConversation.conversationID);
    this.isShowScrollButtomTips = true;
  }

  onscroll({ target: { scrollTop } }) {
    let messageListNode = this.messageListRef.nativeElement;

    if (!messageListNode) {
      return;
    }
    if (this.preScrollHeight - messageListNode.clientHeight - scrollTop < 20) {
      this.isShowScrollButtomTips = false;
    }
  }

  scrollMessageListToButtom() {
    let messageListNode = this.messageListRef.nativeElement;
    if (!messageListNode) {
      return;
    }

    setTimeout(() => {
      messageListNode.scrollTop = messageListNode.scrollHeight;
    }, 0);

    this.preScrollHeight = messageListNode.scrollHeight;
    this.isShowScrollButtomTips = false;
  }

  // 如果滚到底部就保持在底部，否则提示是否要滚到底部
  keepMessageListOnButtom() {
    let messageListNode = this.messageListRef.nativeElement;
    if (!messageListNode) {
      return;
    }
    // 距离底部20px内强制滚到底部,否则提示有新消息
    if (this.preScrollHeight - messageListNode.clientHeight - messageListNode.scrollTop < 20) {
      setTimeout(() => {
        messageListNode.scrollTop = messageListNode.scrollHeight;
      }, 0);

      this.isShowScrollButtomTips = false;
    } else {
      this.isShowScrollButtomTips = true;
    }
    this.preScrollHeight = messageListNode.scrollHeight;
  }

  private getName() {
    if (this.currentConversation?.type === 'C2C') {
      this.name = this.currentConversation?.conversationID.replace('C2C', '');
    } else if (this.currentConversation?.type === 'GROUP') {
      this.name = this.currentConversation?.conversationID.replace('GROUP', '');
    } else if (this.currentConversation?.conversationID === '@TIM#SYSTEM') {
      this.name = '系统通知';
    }
  }

  private showCurrentConversation() {
    this.isShowCurrentConversation = !!this.currentConversation?.conversationID;
  }

  private showMessageSendBox() {
    this.isShowMessageSendBox = (this.currentConversation.type !== TIM.TYPES.CONV_SYSTEM);
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
