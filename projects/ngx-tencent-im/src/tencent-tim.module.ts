import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducer';
// import { environment } from 'src/environments/environment';
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
import { NgTimConfig } from './type';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { NG_Tim_CONFIG } from './shared.data';
import { TitleComponent } from './title/title.component';
import { CreateGroupComponent } from './group/create-group/create-group.component';
import { ApprovalJoinGroupComponent } from './message/message-element/group-system-notice-element/approval-join-group/approval-join-group.component';
import { ProfileCardComponent } from './my-profile/profile-card/profile-card.component';
import { EditProfileComponent } from './my-profile/edit-profile/edit-profile.component';
import { ReEditMessageService } from './re-edit-message.service';

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
    GroupMemberInfoComponent,
    TitleComponent,
    CreateGroupComponent,
    ApprovalJoinGroupComponent,
    ProfileCardComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    NzPopoverModule,
    NzToolTipModule,
    NzModalModule,
    NzImageModule,
    NzFormModule,
    NzInputModule,
    NzPopconfirmModule,
    NzInputNumberModule,
    NzButtonModule,
    NzIconModule,
    NzMessageModule,
    NzSelectModule,
    NzBadgeModule,
    NzCollapseModule,
    NzRadioModule,
    NzAvatarModule,
    NzDropDownModule,
    NzSwitchModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      }
    }),
  ],
  exports: [
    TencentTimComponent
  ],
  providers: [ReEditMessageService]
})
export class TencentTimModule {
  static forRoot(config?: NgTimConfig): ModuleWithProviders<TencentTimModule> {
    return {
      ngModule: TencentTimModule,
      providers: [
        {
          provide: NG_Tim_CONFIG,
          useValue: config
        }
      ],
    };
  }
}
