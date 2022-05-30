import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TencentTimComponent } from './tencent-tim/tencent-tim.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CurrentConversationComponent, ConversationItemComponent, ConversationListComponent } from './conversation';
import { FileElementComponent, ImageElementComponent, MessageSendBoxComponent, MessageFooterComponent, MessageBubbleComponent, TextElementComponent, MessageStatusIconComponent, MessageItemComponent, } from './message';
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
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class TencentTimModule {
    static forRoot(config) {
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
TencentTimModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TencentTimModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimModule, declarations: [TencentTimComponent,
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
        EditProfileComponent], imports: [CommonModule,
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
        NzSwitchModule, i1.StoreRootModule], exports: [TencentTimComponent] });
TencentTimModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimModule, providers: [ReEditMessageService], imports: [[
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
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TencentTimModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuY2VudC10aW0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL3RlbmNlbnQtdGltLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUl4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUNMLDRCQUE0QixFQUM1Qix5QkFBeUIsRUFDekIseUJBQXlCLEVBQzFCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLDBCQUEwQixFQUMxQixvQkFBb0IsR0FDckIsTUFBTSxXQUFXLENBQUM7QUFHbkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsOERBQThEO0FBQzlELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhG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QVEsRUFBRTs0QkFDNUIsYUFBYSxFQUFFO2dDQUNiLHVCQUF1QixFQUFFLEtBQUs7Z0NBQzlCLHdCQUF3QixFQUFFLEtBQUs7Z0NBQy9CLDBCQUEwQixFQUFFLEtBQUs7Z0NBQ2pDLDJCQUEyQixFQUFFLEtBQUs7NkJBQ25DO3lCQUNGLENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjtxQkFDcEI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IFRlbmNlbnRUaW1Db21wb25lbnQgfSBmcm9tICcuL3RlbmNlbnQtdGltL3RlbmNlbnQtdGltLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZGVCYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE15UHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyL2F2YXRhci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDdXJyZW50Q29udmVyc2F0aW9uQ29tcG9uZW50LFxyXG4gIENvbnZlcnNhdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgQ29udmVyc2F0aW9uTGlzdENvbXBvbmVudFxyXG59IGZyb20gJy4vY29udmVyc2F0aW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRmlsZUVsZW1lbnRDb21wb25lbnQsXHJcbiAgSW1hZ2VFbGVtZW50Q29tcG9uZW50LFxyXG4gIE1lc3NhZ2VTZW5kQm94Q29tcG9uZW50LFxyXG4gIE1lc3NhZ2VGb290ZXJDb21wb25lbnQsXHJcbiAgTWVzc2FnZUJ1YmJsZUNvbXBvbmVudCxcclxuICBUZXh0RWxlbWVudENvbXBvbmVudCxcclxuICBNZXNzYWdlU3RhdHVzSWNvbkNvbXBvbmVudCxcclxuICBNZXNzYWdlSXRlbUNvbXBvbmVudCxcclxufSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlLWRldnRvb2xzJztcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUvcmVkdWNlcic7XHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IENvbnZlcnNhdGlvblByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbnZlcnNhdGlvbi9jb252ZXJzYXRpb24tcHJvZmlsZS9jb252ZXJzYXRpb24tcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi1wcm9maWxlL2NvbnZlcnNhdGlvbi1wcm9maWxlL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JvdXBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9ncm91cC9ncm91cC1saXN0L2dyb3VwLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JvdXBUaXBFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2UtZWxlbWVudC9ncm91cC10aXAtZWxlbWVudC9ncm91cC10aXAtZWxlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2UtaGVhZGVyL21lc3NhZ2UtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UvbWVzc2FnZS1lbGVtZW50L2N1c3RvbS1lbGVtZW50L2N1c3RvbS1lbGVtZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdyb3VwU3lzdGVtTm90aWNlRWxlbWVudENvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlLWVsZW1lbnQvZ3JvdXAtc3lzdGVtLW5vdGljZS1lbGVtZW50L2dyb3VwLXN5c3RlbS1ub3RpY2UtZWxlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcm91cFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbnZlcnNhdGlvbi9jb252ZXJzYXRpb24tcHJvZmlsZS9jb252ZXJzYXRpb24tcHJvZmlsZS9ncm91cC1wcm9maWxlL2dyb3VwLXByb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JvdXBNZW1iZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9ncm91cC9ncm91cC1tZW1iZXItbGlzdC9ncm91cC1tZW1iZXItbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcm91cEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2dyb3VwL2dyb3VwLWl0ZW0vZ3JvdXAtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcm91cE1lbWJlckluZm9Db21wb25lbnQgfSBmcm9tICcuL2dyb3VwL2dyb3VwLW1lbWJlci1pbmZvL2dyb3VwLW1lbWJlci1pbmZvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nVGltQ29uZmlnIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbmltcG9ydCB7IE56QmFkZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcclxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmltcG9ydCB7IE56Q29sbGFwc2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvbGxhcHNlJztcclxuaW1wb3J0IHsgTnpGb3JtTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9mb3JtJztcclxuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcclxuaW1wb3J0IHsgTnpJbWFnZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XHJcbmltcG9ydCB7IE56TWVzc2FnZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XHJcbmltcG9ydCB7IE56UG9wY29uZmlybU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcG9wY29uZmlybSc7XHJcbmltcG9ydCB7IE56UG9wb3Zlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcG9wb3Zlcic7XHJcbmltcG9ydCB7IE56U2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBOek1vZGFsTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XHJcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhZGlvJztcclxuaW1wb3J0IHsgTnpTd2l0Y2hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3N3aXRjaCc7XHJcbmltcG9ydCB7IE56SW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0LW51bWJlcic7XHJcbmltcG9ydCB7IE56QXZhdGFyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9hdmF0YXInO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcblxyXG5pbXBvcnQgeyBOR19UaW1fQ09ORklHIH0gZnJvbSAnLi9zaGFyZWQuZGF0YSc7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi90aXRsZS90aXRsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDcmVhdGVHcm91cENvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXAvY3JlYXRlLWdyb3VwL2NyZWF0ZS1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHByb3ZhbEpvaW5Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS9tZXNzYWdlLWVsZW1lbnQvZ3JvdXAtc3lzdGVtLW5vdGljZS1lbGVtZW50L2FwcHJvdmFsLWpvaW4tZ3JvdXAvYXBwcm92YWwtam9pbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9maWxlQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vbXktcHJvZmlsZS9wcm9maWxlLWNhcmQvcHJvZmlsZS1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9teS1wcm9maWxlL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVFZGl0TWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL3JlLWVkaXQtbWVzc2FnZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBUZW5jZW50VGltQ29tcG9uZW50LFxyXG4gICAgU2lkZUJhckNvbXBvbmVudCxcclxuICAgIENvbnZlcnNhdGlvbkxpc3RDb21wb25lbnQsXHJcbiAgICBNeVByb2ZpbGVDb21wb25lbnQsXHJcbiAgICBDb252ZXJzYXRpb25JdGVtQ29tcG9uZW50LFxyXG4gICAgQXZhdGFyQ29tcG9uZW50LFxyXG4gICAgQ3VycmVudENvbnZlcnNhdGlvbkNvbXBvbmVudCxcclxuICAgIE1lc3NhZ2VJdGVtQ29tcG9uZW50LFxyXG4gICAgTWVzc2FnZVN0YXR1c0ljb25Db21wb25lbnQsXHJcbiAgICBUZXh0RWxlbWVudENvbXBvbmVudCxcclxuICAgIE1lc3NhZ2VCdWJibGVDb21wb25lbnQsXHJcbiAgICBNZXNzYWdlRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgTWVzc2FnZVNlbmRCb3hDb21wb25lbnQsXHJcbiAgICBJbWFnZUVsZW1lbnRDb21wb25lbnQsXHJcbiAgICBGaWxlRWxlbWVudENvbXBvbmVudCxcclxuICAgIENvbnZlcnNhdGlvblByb2ZpbGVDb21wb25lbnQsXHJcbiAgICBVc2VyUHJvZmlsZUNvbXBvbmVudCxcclxuICAgIEdyb3VwTGlzdENvbXBvbmVudCxcclxuICAgIEdyb3VwVGlwRWxlbWVudENvbXBvbmVudCxcclxuICAgIE1lc3NhZ2VIZWFkZXJDb21wb25lbnQsXHJcbiAgICBDdXN0b21FbGVtZW50Q29tcG9uZW50LFxyXG4gICAgR3JvdXBTeXN0ZW1Ob3RpY2VFbGVtZW50Q29tcG9uZW50LFxyXG4gICAgR3JvdXBQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgR3JvdXBNZW1iZXJMaXN0Q29tcG9uZW50LFxyXG4gICAgR3JvdXBJdGVtQ29tcG9uZW50LFxyXG4gICAgR3JvdXBNZW1iZXJJbmZvQ29tcG9uZW50LFxyXG4gICAgVGl0bGVDb21wb25lbnQsXHJcbiAgICBDcmVhdGVHcm91cENvbXBvbmVudCxcclxuICAgIEFwcHJvdmFsSm9pbkdyb3VwQ29tcG9uZW50LFxyXG4gICAgUHJvZmlsZUNhcmRDb21wb25lbnQsXHJcbiAgICBFZGl0UHJvZmlsZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXHJcbiAgICBOelBvcG92ZXJNb2R1bGUsXHJcbiAgICBOelRvb2xUaXBNb2R1bGUsXHJcbiAgICBOek1vZGFsTW9kdWxlLFxyXG4gICAgTnpJbWFnZU1vZHVsZSxcclxuICAgIE56Rm9ybU1vZHVsZSxcclxuICAgIE56SW5wdXRNb2R1bGUsXHJcbiAgICBOelBvcGNvbmZpcm1Nb2R1bGUsXHJcbiAgICBOeklucHV0TnVtYmVyTW9kdWxlLFxyXG4gICAgTnpCdXR0b25Nb2R1bGUsXHJcbiAgICBOekljb25Nb2R1bGUsXHJcbiAgICBOek1lc3NhZ2VNb2R1bGUsXHJcbiAgICBOelNlbGVjdE1vZHVsZSxcclxuICAgIE56QmFkZ2VNb2R1bGUsXHJcbiAgICBOekNvbGxhcHNlTW9kdWxlLFxyXG4gICAgTnpSYWRpb01vZHVsZSxcclxuICAgIE56QXZhdGFyTW9kdWxlLFxyXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcclxuICAgIE56U3dpdGNoTW9kdWxlLFxyXG4gICAgU3RvcmVNb2R1bGUuZm9yUm9vdChyZWR1Y2Vycywge1xyXG4gICAgICBydW50aW1lQ2hlY2tzOiB7XHJcbiAgICAgICAgc3RyaWN0U3RhdGVJbW11dGFiaWxpdHk6IGZhbHNlLFxyXG4gICAgICAgIHN0cmljdEFjdGlvbkltbXV0YWJpbGl0eTogZmFsc2UsXHJcbiAgICAgICAgc3RyaWN0U3RhdGVTZXJpYWxpemFiaWxpdHk6IGZhbHNlLFxyXG4gICAgICAgIHN0cmljdEFjdGlvblNlcmlhbGl6YWJpbGl0eTogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVGVuY2VudFRpbUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbUmVFZGl0TWVzc2FnZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5jZW50VGltTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBOZ1RpbUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGVuY2VudFRpbU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRlbmNlbnRUaW1Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HX1RpbV9DT05GSUcsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19