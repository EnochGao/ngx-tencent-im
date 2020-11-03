import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TencentTimComponent } from './tencent-tim/tencent-tim.component';
import { NzGridModule } from 'ng-zorro-antd';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ConversationListComponent } from './conversation/conversation-list/conversation-list.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ConversationItemComponent } from './conversation/conversation-item/conversation-item.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CurrentConversationComponent } from './conversation/current-conversation/current-conversation.component';
import { MessageItemComponent } from './message/message-item/message-item.component';
import { MessageStatusIconComponent } from './message/message-status-icon/message-status-icon.component';
import { TextElementComponent } from './message/message-element/text-element/text-element.component';
import { MessageBubbleComponent } from './message/message-bubble/message-bubble.component';
import { MessageFooterComponent } from './message/message-footer/message-footer.component';
import { MessageSendBoxComponent } from './message/message-send-box/message-send-box.component';



@NgModule({
  declarations: [
    TencentTimComponent,
    SideBarComponent,
    ConversationListComponent,
    MyProfileComponent,
    ConversationItemComponent,
    AvatarComponent,
    CurrentConversationComponent,
    MessageItemComponent,
    MessageStatusIconComponent,
    TextElementComponent,
    MessageBubbleComponent,
    MessageFooterComponent,
    MessageSendBoxComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,

  ],
  exports: [
    TencentTimComponent
  ]
})
export class TencentTimModule { }
