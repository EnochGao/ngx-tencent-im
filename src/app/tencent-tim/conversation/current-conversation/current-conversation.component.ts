import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { updateCurrentConversationAction } from 'src/store/actions';
import { initialState } from 'src/store/reducer/conversation.reducer';
import { getCurrentConversationID, getSelectConversationStates } from 'src/store/selectors/conversation.selector';
import { ConversationItem } from '../../im.type';
import { TimAuthService } from '../../tim-auth.service';

@Component({
  selector: 'app-current-conversation',
  templateUrl: './current-conversation.component.html',
  styleUrls: ['./current-conversation.component.less']
})
export class CurrentConversationComponent implements OnInit {
  currentConversation: ConversationItem;
  currentMessageList = [];
  constructor(
    private store: Store,
    private timAuthService: TimAuthService,

  ) { }

  ngOnInit(): void {

    this.store.pipe(select(getSelectConversationStates)).subscribe(res => {
      console.log('当前会话：：---》', res);
      this.currentMessageList = res.currentMessageList;
      this.currentConversation = res.currentConversation;
    });
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



}
