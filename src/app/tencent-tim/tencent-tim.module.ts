import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TencentTimComponent } from './tencent-tim/tencent-tim.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AvatarComponent } from './avatar/avatar.component';

import {
  CurrentConversationComponent,
  ConversationItemComponent,
  ConversationListComponent
} from './conversation';

import {
  FileElementComponent,
  ImageElementComponent,
  MessageSendBoxComponent,
  MessageFooterComponent,
  MessageBubbleComponent,
  TextElementComponent,
  MessageStatusIconComponent,
  MessageItemComponent,
} from './message';

import {
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzPopoverModule,
  NzMessageModule,
  NzProgressModule,
  NzIconModule,
  NzModalModule,
  NzToolTipModule,
  NzButtonModule,
  NzRadioModule,
} from 'ng-zorro-antd';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducer';
import { environment } from 'src/environments/environment';
import { ConversationProfileComponent } from './conversation/conversation-profile/conversation-profile.component';
import { UserProfileComponent } from './conversation/conversation-profile/conversation-profile/user-profile/user-profile.component';
import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupTipElementComponent } from './message/message-element/group-tip-element/group-tip-element.component';
import { MessageHeaderComponent } from './message/message-header/message-header.component';
import { CustomElementComponent } from './message/message-element/custom-element/custom-element.component';
import { GroupSystemNoticeElementComponent } from './message/message-element/group-system-notice-element/group-system-notice-element.component';
import { GroupProfileComponent } from './conversation/conversation-profile/conversation-profile/group-profile/group-profile.component';
import { GroupMemberListComponent } from './group/group-member-list/group-member-list.component';
import { GroupItemComponent } from './group/group-item/group-item.component';
import { GroupMemberInfoComponent } from './group/group-member-info/group-member-info.component';



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
    MessageSendBoxComponent,
    ImageElementComponent,
    FileElementComponent,
    ConversationProfileComponent,
    UserProfileComponent,
    GroupListComponent,
    GroupTipElementComponent,
    MessageHeaderComponent,
    CustomElementComponent,
    GroupSystemNoticeElementComponent,
    GroupProfileComponent,
    GroupMemberListComponent,
    GroupItemComponent,
    GroupMemberInfoComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    NzGridModule,
    NzPopoverModule,
    FormsModule,
    NzToolTipModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzProgressModule,
    NzButtonModule,
    NzIconModule,
    NzMessageModule,
    NzRadioModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  exports: [
    TencentTimComponent
  ]
})
export class TencentTimModule { }
