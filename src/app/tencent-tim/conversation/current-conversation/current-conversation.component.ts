import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getSelectConversationStates } from 'src/store/selectors/conversation.selector';
import { ConversationItem } from '../../im.type';
import { TimAuthService } from '../../tim-auth.service';
import TIM from 'tim-js-sdk';

@Component({
  selector: 'app-current-conversation',
  templateUrl: './current-conversation.component.html',
  styleUrls: ['./current-conversation.component.less']
})
export class CurrentConversationComponent implements OnInit, AfterViewChecked, AfterViewInit {
  currentConversation: ConversationItem;
  currentMessageList = [];
  isShowScrollButtomTips = true;
  preScrollHeight = 0;
  isCompleted = false;
  @ViewChild('messageList', { static: false }) messageListRef: ElementRef;
  constructor(
    private store: Store,
    private timAuthService: TimAuthService,

  ) { }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

  }

  ngOnInit(): void {

    this.store.pipe(select(getSelectConversationStates)).subscribe(res => {
      this.currentMessageList = res.currentMessageList;
      this.currentConversation = res.currentConversation;
      this.isCompleted = res.isCompleted;
    });
  };

  getMore() {
    this.timAuthService.getMessageList(this.currentConversation.conversationID);
    this.isShowScrollButtomTips = true;
  }

  get name() {
    if (this.currentConversation?.type === 'C2C') {
      return this.currentConversation?.conversationID.replace('C2C', '');
    } else if (this.currentConversation?.type === 'GROUP') {
      return this.currentConversation?.conversationID.replace('GROUP', '');
    } else if (this.currentConversation?.conversationID === '@TIM#SYSTEM') {
      return '系统通知';
    }
  }


  get showCurrentConversation() {
    return !!this.currentConversation?.conversationID;
  }


  get showMessageSendBox() {
    return this.currentConversation.type !== TIM.TYPES.CONV_SYSTEM;
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
    messageListNode.scrollTop = messageListNode.scrollHeight;
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

      messageListNode.scrollTop = messageListNode.scrollHeight;

      this.isShowScrollButtomTips = false;
    } else {
      this.isShowScrollButtomTips = true;
    }
    this.preScrollHeight = messageListNode.scrollHeight;
  }
}
