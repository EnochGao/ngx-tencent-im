import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
} from 'ng-zorro-antd';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducer';
import { environment } from 'src/environments/environment';
import { ConversationProfileComponent } from './conversation/conversation-profile/conversation-profile.component';
import { UserProfileComponent } from './conversation/conversation-profile/conversation-profile/user-profile/user-profile.component';



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
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzPopoverModule,
    FormsModule,
    NzToolTipModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzProgressModule,
    NzIconModule,
    NzMessageModule,
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
