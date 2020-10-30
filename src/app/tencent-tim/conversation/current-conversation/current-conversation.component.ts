import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { updateCurrentConversationAction } from 'src/store/actions';
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
  constructor(
    private store: Store,
    private timAuthService: TimAuthService,

  ) { }

  ngOnInit(): void {
    this.store.pipe(select(getCurrentConversationID)).subscribe(res => {
      console.log('点击的id::', res);
      if (res) {
        this.timAuthService.tim.getConversationProfile(res).then(({ data }) => {


          this.currentConversation = data.conversation;
          console.log('消息会话：：：：', this.currentConversation);
          // 3.1 更新当前会话
          this.store.dispatch(updateCurrentConversationAction({ conversation: this.currentConversation }));

          // 3.2 获取消息列表
          // context.dispatch('getMessageList', conversationID);
          // // 3.3 拉取第一页群成员列表
          // if (data.conversation.type === TIM.TYPES.CONV_GROUP) {
          //   return context.dispatch('getGroupMemberList', data.conversation.groupProfile.groupID);
          // }

        });
      }
    });

    this.store.pipe(select(getSelectConversationStates)).subscribe(res => {
      console.log('当前会话：：---》', res);
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



}
