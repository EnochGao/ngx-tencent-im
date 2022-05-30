import { Component, EventEmitter, Input, Output } from '@angular/core';
import { currentUserProfileSelector } from '../../store/selectors';
import { getFullDate } from '../../util/date';
import { MESSAGE_STATUS, TIM } from '../../shared.data';
import { showAction } from '../../store/actions';
import * as i0 from "@angular/core";
import * as i1 from "../../tim-helper.service";
import * as i2 from "@ngrx/store";
import * as i3 from "ng-zorro-antd/input-number";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/popover";
import * as i6 from "@angular/forms";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "ng-zorro-antd/input";
export class GroupMemberInfoComponent {
    constructor(timHelper, store) {
        this.timHelper = timHelper;
        this.store = store;
        this.enterEnd = new EventEmitter();
        this.current = Date.now();
    }
    ngOnInit() {
        this.isOwner = this.currentConversation.groupProfile.selfInfo.role === 'Owner';
        this.isAdmin = this.currentConversation.groupProfile.selfInfo.role === 'Admin';
        this.store.select(currentUserProfileSelector).subscribe(res => {
            if (res) {
                this.currentUserProfile = res;
                this.isMine = this.currentUserProfile.userID === this.member.userID;
            }
        });
    }
    // 是否显示取消禁言按钮
    get showCancelBan() {
        if (this.showMuteUntil && this.currentConversation.type === TIM.TYPES.CONV_GROUP && !this.isMine) {
            return this.isOwner || this.isAdmin;
        }
        return false;
    }
    get changeRoleTitle() {
        if (!this.canChangeRole) {
            return '';
        }
        return this.isOwner && this.member.role === 'Admin' ? '设为：Member' : '设为：Admin';
    }
    get canChangeRole() {
        return this.isOwner && ['ChatRoom', 'Public'].includes(this.currentConversation.subType);
    }
    // 是否显示踢出群成员按钮
    get showKickout() {
        return (this.isOwner || this.isAdmin) && !this.isMine;
    }
    // 日期格式化后的禁言时间
    get muteUntil() {
        return getFullDate(new Date(this.member.muteUntil * 1000));
    }
    // 是否显示禁言时间
    get showMuteUntil() {
        // 禁言时间小于当前时间
        return this.member.muteUntil * 1000 > this.current;
    }
    setGroupMemberMuteTime() {
        if (!this.muteTime)
            return;
        this.timHelper.tim
            .setGroupMemberMuteTime({
            groupID: this.currentConversation.groupProfile.groupID,
            userID: this.member.userID,
            muteTime: Number(this.muteTime)
        })
            .then(() => {
            this.muteTime = '';
            this.muteTimeVisible = false;
            this.enterEnd.emit();
        })
            .catch(error => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
        });
    }
    // 取消禁言
    cancelMute() {
        this.timHelper.tim
            .setGroupMemberMuteTime({
            groupID: this.currentConversation.groupProfile.groupID,
            userID: this.member.userID,
            muteTime: 0,
        })
            .then(() => {
            this.muteTime = '';
            this.enterEnd.emit();
        })
            .catch((error) => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
        });
    }
    setGroupMemberNameCard() {
        if (this.nameCard.trim().length === 0) {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: '不能设置空的群名片' }));
            return;
        }
        this.timHelper.tim
            .setGroupMemberNameCard({
            groupID: this.currentConversation.groupProfile.groupID,
            userID: this.member.userID,
            nameCard: this.nameCard
        })
            .then(() => {
            this.nameCard = null;
            this.enterEnd.emit();
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.success, message: '修改成功' }));
        })
            .catch(error => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: error.message }));
        });
    }
    changeMemberRole() {
        if (!this.canChangeRole) {
            return;
        }
        let currentRole = this.member.role;
        this.timHelper.tim
            .setGroupMemberRole({
            groupID: this.currentConversation.groupProfile.groupID,
            userID: this.member.userID,
            role: currentRole === 'Admin' ? 'Member' : 'Admin',
        })
            .catch((error) => {
        });
    }
    kickoutGroupMember() {
        this.timHelper.tim
            .deleteGroupMember({
            groupID: this.currentConversation.groupProfile.groupID,
            reason: '我要踢你出群',
            userIDList: [this.member.userID],
        })
            .then(() => {
            // this.$store.commit('deleteGroupMemeber', this.member.userID);
        })
            .catch((error) => {
        });
    }
}
GroupMemberInfoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupMemberInfoComponent, deps: [{ token: i1.TimHelperService }, { token: i2.Store }], target: i0.ɵɵFactoryTarget.Component });
GroupMemberInfoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupMemberInfoComponent, selector: "app-group-member-info", inputs: { member: "member", currentConversation: "currentConversation" }, outputs: { enterEnd: "enterEnd" }, ngImport: i0, template: "<div>\r\n  <div>\r\n    <span class=\"label\">userID:</span>\r\n    {{ member.userID }}\r\n    <a *ngIf=\"showCancelBan\" type=\"text\" (click)=\"cancelMute()\">\u53D6\u6D88\u7981\u8A00</a>\r\n    <a [ngStyle]=\"{'color': 'red'}\" nz-popover [nzPopoverContent]=\"contentTemplate\"\r\n      nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\" [nzPopoverVisible]=\"muteTimeVisible\"\r\n      [nzPopoverTitle]=\"'\u7981\u8A00(\u56DE\u8F66\u786E\u8BA4)'\">\u7981\u8A00</a>\r\n    <ng-template #contentTemplate>\r\n      <nz-input-number [ngStyle]=\"{'width': '100%'}\" [(ngModel)]=\"muteTime\" [nzMin]=\"1\" [nzStep]=\"1\"\r\n        nzPlaceholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"setGroupMemberMuteTime()\">\r\n      </nz-input-number>\r\n    </ng-template>\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">nick:</span>\r\n    {{ member.nick || '\u6682\u65E0' }}\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">nameCard:</span>\r\n    {{ member.nameCard || '\u6682\u65E0' }}\r\n    <i nz-icon nzType=\"edit\" nzTheme=\"outline\" [ngStyle]=\"{'cursor': 'pointer'}\" nz-popover\r\n      [nzPopoverContent]=\"nameCardTemplate\" nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\"\r\n      [nzPopoverVisible]=\"muteTimeVisible\" [nzPopoverTitle]=\"'\u4FEE\u6539\u7FA4\u540D\u7247'\"></i>\r\n    <ng-template #nameCardTemplate>\r\n      <input nz-input [(ngModel)]=\"nameCard\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\"\r\n        (keydown.enter)=\"setGroupMemberNameCard()\">\r\n    </ng-template>\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">role:</span>\r\n    <span class=\"content role\" [title]=\"changeRoleTitle\">{{ member.role }}</span>\r\n  </div>\r\n  <div *ngIf=\"showMuteUntil\">\r\n    <span class=\"label\">\u7981\u8A00\u81F3:</span>\r\n    <span class=\"content\">{{ muteUntil }}</span>\r\n  </div>\r\n  <a type=\"text\" *ngIf=\"canChangeRole\" (click)=\"changeMemberRole()\">\r\n    {{\r\n    member.role === 'Admin' ? '\u53D6\u6D88\u7BA1\u7406\u5458' : '\u8BBE\u4E3A\u7BA1\u7406\u5458'\r\n    }}\r\n  </a>\r\n  <a type=\"text\" *ngIf=\"showKickout\" [ngStyle]=\"{'color': 'red'}\"\r\n    (click)=\"kickoutGroupMember()\">\u8E22\u51FA\u7FA4\u7EC4\r\n  </a>\r\n</div>\r\n", styles: [".label{color:#ccc8c8}.cursor-pointer{cursor:pointer}\n"], components: [{ type: i3.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }, { type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i7.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i8.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i9.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupMemberInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-member-info', template: "<div>\r\n  <div>\r\n    <span class=\"label\">userID:</span>\r\n    {{ member.userID }}\r\n    <a *ngIf=\"showCancelBan\" type=\"text\" (click)=\"cancelMute()\">\u53D6\u6D88\u7981\u8A00</a>\r\n    <a [ngStyle]=\"{'color': 'red'}\" nz-popover [nzPopoverContent]=\"contentTemplate\"\r\n      nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\" [nzPopoverVisible]=\"muteTimeVisible\"\r\n      [nzPopoverTitle]=\"'\u7981\u8A00(\u56DE\u8F66\u786E\u8BA4)'\">\u7981\u8A00</a>\r\n    <ng-template #contentTemplate>\r\n      <nz-input-number [ngStyle]=\"{'width': '100%'}\" [(ngModel)]=\"muteTime\" [nzMin]=\"1\" [nzStep]=\"1\"\r\n        nzPlaceholder=\"\u56DE\u8F66\u786E\u8BA4\" (keydown.enter)=\"setGroupMemberMuteTime()\">\r\n      </nz-input-number>\r\n    </ng-template>\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">nick:</span>\r\n    {{ member.nick || '\u6682\u65E0' }}\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">nameCard:</span>\r\n    {{ member.nameCard || '\u6682\u65E0' }}\r\n    <i nz-icon nzType=\"edit\" nzTheme=\"outline\" [ngStyle]=\"{'cursor': 'pointer'}\" nz-popover\r\n      [nzPopoverContent]=\"nameCardTemplate\" nzPopoverPlacement=\"topRight\" nzPopoverTrigger=\"click\"\r\n      [nzPopoverVisible]=\"muteTimeVisible\" [nzPopoverTitle]=\"'\u4FEE\u6539\u7FA4\u540D\u7247'\"></i>\r\n    <ng-template #nameCardTemplate>\r\n      <input nz-input [(ngModel)]=\"nameCard\" placeholder=\"\u56DE\u8F66\u786E\u8BA4\"\r\n        (keydown.enter)=\"setGroupMemberNameCard()\">\r\n    </ng-template>\r\n  </div>\r\n  <div>\r\n    <span class=\"label\">role:</span>\r\n    <span class=\"content role\" [title]=\"changeRoleTitle\">{{ member.role }}</span>\r\n  </div>\r\n  <div *ngIf=\"showMuteUntil\">\r\n    <span class=\"label\">\u7981\u8A00\u81F3:</span>\r\n    <span class=\"content\">{{ muteUntil }}</span>\r\n  </div>\r\n  <a type=\"text\" *ngIf=\"canChangeRole\" (click)=\"changeMemberRole()\">\r\n    {{\r\n    member.role === 'Admin' ? '\u53D6\u6D88\u7BA1\u7406\u5458' : '\u8BBE\u4E3A\u7BA1\u7406\u5458'\r\n    }}\r\n  </a>\r\n  <a type=\"text\" *ngIf=\"showKickout\" [ngStyle]=\"{'color': 'red'}\"\r\n    (click)=\"kickoutGroupMember()\">\u8E22\u51FA\u7FA4\u7EC4\r\n  </a>\r\n</div>\r\n", styles: [".label{color:#ccc8c8}.cursor-pointer{cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TimHelperService }, { type: i2.Store }]; }, propDecorators: { member: [{
                type: Input
            }], currentConversation: [{
                type: Input
            }], enterEnd: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtbWVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL2dyb3VwL2dyb3VwLW1lbWJlci1pbmZvL2dyb3VwLW1lbWJlci1pbmZvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9ncm91cC9ncm91cC1tZW1iZXItaW5mby9ncm91cC1tZW1iZXItaW5mby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFPakQsTUFBTSxPQUFPLHdCQUF3QjtJQWNuQyxZQUNVLFNBQTJCLEVBQzNCLEtBQVk7UUFEWixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBWlosYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFLOUMsWUFBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQVFqQixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztRQUMvRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIs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QixPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxPQUFPO1lBQ3RELE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2pDLENBQUM7YUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1QsZ0VBQWdFO1FBQ2xFLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBRWpCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7cUhBaktVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDBLQ2hCckMsOHFFQThDQTsyRkQ5QmEsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLHVCQUF1QjsySEFLeEIsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFFSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgQ29udmVyc2F0aW9uLCBHcm91cE1lbWJlciwgUHJvZmlsZSB9IGZyb20gJ3RpbS1qcy1zZGsnO1xyXG5pbXBvcnQgeyBjdXJyZW50VXNlclByb2ZpbGVTZWxlY3RvciB9IGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFRpbUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi90aW0taGVscGVyLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RnVsbERhdGUgfSBmcm9tICcuLi8uLi91dGlsL2RhdGUnO1xyXG5cclxuaW1wb3J0IHsgTUVTU0FHRV9TVEFUVVMsIFRJTSB9IGZyb20gJy4uLy4uL3NoYXJlZC5kYXRhJztcclxuaW1wb3J0IHsgc2hvd0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZ3JvdXAtbWVtYmVyLWluZm8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncm91cC1tZW1iZXItaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ3JvdXAtbWVtYmVyLWluZm8uY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBNZW1iZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBtZW1iZXI6IEdyb3VwTWVtYmVyO1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRDb252ZXJzYXRpb246IENvbnZlcnNhdGlvbjtcclxuXHJcbiAgQE91dHB1dCgpIGVudGVyRW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIGlzT3duZXI6IGJvb2xlYW47XHJcbiAgaXNBZG1pbjogYm9vbGVhbjtcclxuICBpc01pbmU6IGJvb2xlYW47XHJcbiAgY3VycmVudFVzZXJQcm9maWxlOiBQcm9maWxlO1xyXG4gIGN1cnJlbnQgPSBEYXRlLm5vdygpO1xyXG4gIG11dGVUaW1lOiBzdHJpbmc7XHJcbiAgbXV0ZVRpbWVWaXNpYmxlOiBib29sZWFuO1xyXG4gIG5hbWVDYXJkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0aW1IZWxwZXI6IFRpbUhlbHBlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc093bmVyID0gdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLmdyb3VwUHJvZmlsZS5zZWxmSW5mby5yb2xlID09PSAnT3duZXInO1xyXG4gICAgdGhpcy5pc0FkbWluID0gdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLmdyb3VwUHJvZmlsZS5zZWxmSW5mby5yb2xlID09PSAnQWRtaW4nO1xyXG5cclxuICAgIHRoaXMuc3RvcmUuc2VsZWN0KGN1cnJlbnRVc2VyUHJvZmlsZVNlbGVjdG9yKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJQcm9maWxlID0gcmVzO1xyXG4gICAgICAgIHRoaXMuaXNNaW5lID0gdGhpcy5jdXJyZW50VXNlclByb2ZpbGUudXNlcklEID09PSB0aGlzLm1lbWJlci51c2VySUQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyDmmK/lkKbmmL7npLrlj5bmtojnpoHoqIDmjInpkq5cclxuICBnZXQgc2hvd0NhbmNlbEJhbigpIHtcclxuICAgIGlmICh0aGlzLnNob3dNdXRlVW50aWwgJiYgdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLnR5cGUgPT09IFRJTS5UWVBFUy5DT05WX0dST1VQICYmICF0aGlzLmlzTWluZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc093bmVyIHx8IHRoaXMuaXNBZG1pbjtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldCBjaGFuZ2VSb2xlVGl0bGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuQ2hhbmdlUm9sZSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pc093bmVyICYmIHRoaXMubWVtYmVyLnJvbGUgPT09ICdBZG1pbicgPyAn6K6+5Li677yaTWVtYmVyJyA6ICforr7kuLrvvJpBZG1pbic7XHJcbiAgfVxyXG5cclxuICBnZXQgY2FuQ2hhbmdlUm9sZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzT3duZXIgJiYgWydDaGF0Um9vbScsICdQdWJsaWMnXS5pbmNsdWRlcyh0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24uc3ViVHlwZSk7XHJcbiAgfVxyXG5cclxuICAvLyDmmK/lkKbmmL7npLrouKLlh7rnvqTmiJDlkZjmjInpkq5cclxuICBnZXQgc2hvd0tpY2tvdXQoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuaXNPd25lciB8fCB0aGlzLmlzQWRtaW4pICYmICF0aGlzLmlzTWluZTtcclxuICB9XHJcblxyXG4gIC8vIOaXpeacn+agvOW8j+WMluWQjueahOemgeiogOaXtumXtFxyXG4gIGdldCBtdXRlVW50aWwoKSB7XHJcbiAgICByZXR1cm4gZ2V0RnVsbERhdGUobmV3IERhdGUodGhpcy5tZW1iZXIubXV0ZVVudGlsICogMTAwMCkpO1xyXG4gIH1cclxuXHJcbiAgLy8g5piv5ZCm5pi+56S656aB6KiA5pe26Ze0XHJcbiAgZ2V0IHNob3dNdXRlVW50aWwoKSB7XHJcbiAgICAvLyDnpoHoqIDml7bpl7TlsI/kuo7lvZPliY3ml7bpl7RcclxuICAgIHJldHVybiB0aGlzLm1lbWJlci5tdXRlVW50aWwgKiAxMDAwID4gdGhpcy5jdXJyZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0R3JvdXBNZW1iZXJNdXRlVGltZSgpIHtcclxuICAgIGlmICghdGhpcy5tdXRlVGltZSkgcmV0dXJuO1xyXG4gICAgdGhpcy50aW1IZWxwZXIudGltXHJcbiAgICAgIC5zZXRHcm91cE1lbWJlck11dGVUaW1lKHtcclxuICAgICAgICBncm91cElEOiB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24uZ3JvdXBQcm9maWxlLmdyb3VwSUQsXHJcbiAgICAgICAgdXNlcklEOiB0aGlzLm1lbWJlci51c2VySUQsXHJcbiAgICAgICAgbXV0ZVRpbWU6IE51bWJlcih0aGlzLm11dGVUaW1lKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tdXRlVGltZSA9ICcnO1xyXG4gICAgICAgIHRoaXMubXV0ZVRpbWVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbnRlckVuZC5lbWl0KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICAgIHNob3dBY3Rpb24oeyBtc2dUeXBlOiBNRVNTQUdFX1NUQVRVUy5lcnJvciwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8g5Y+W5raI56aB6KiAXHJcbiAgY2FuY2VsTXV0ZSgpIHtcclxuICAgIHRoaXMudGltSGVscGVyLnRpbVxyXG4gICAgICAuc2V0R3JvdXBNZW1iZXJNdXRlVGltZSh7XHJcbiAgICAgICAgZ3JvdXBJRDogdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLmdyb3VwUHJvZmlsZS5ncm91cElELFxyXG4gICAgICAgIHVzZXJJRDogdGhpcy5tZW1iZXIudXNlcklELFxyXG4gICAgICAgIG11dGVUaW1lOiAwLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tdXRlVGltZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZW50ZXJFbmQuZW1pdCgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICAgIHNob3dBY3Rpb24oeyBtc2dUeXBlOiBNRVNTQUdFX1NUQVRVUy5lcnJvciwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0R3JvdXBNZW1iZXJOYW1lQ2FyZCgpIHtcclxuICAgIGlmICh0aGlzLm5hbWVDYXJkLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICBzaG93QWN0aW9uKHsgbXNnVHlwZTogTUVTU0FHRV9TVEFUVVMud2FybmluZywgbWVzc2FnZTogJ+S4jeiDveiuvue9ruepuueahOe+pOWQjeeJhycgfSlcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aW1IZWxwZXIudGltXHJcbiAgICAgIC5zZXRHcm91cE1lbWJlck5hbWVDYXJkKHtcclxuICAgICAgICBncm91cElEOiB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24uZ3JvdXBQcm9maWxlLmdyb3VwSUQsXHJcbiAgICAgICAgdXNlcklEOiB0aGlzLm1lbWJlci51c2VySUQsXHJcbiAgICAgICAgbmFtZUNhcmQ6IHRoaXMubmFtZUNhcmRcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmFtZUNhcmQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZW50ZXJFbmQuZW1pdCgpO1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgICBzaG93QWN0aW9uKHsgbXNnVHlwZTogTUVTU0FHRV9TVEFUVVMuc3VjY2VzcywgbWVzc2FnZTogJ+S/ruaUueaIkOWKnycgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgICBzaG93QWN0aW9uKHsgbXNnVHlwZTogTUVTU0FHRV9TVEFUVVMuZXJyb3IsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBjaGFuZ2VNZW1iZXJSb2xlKCkge1xyXG4gICAgaWYgKCF0aGlzLmNhbkNoYW5nZVJvbGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGN1cnJlbnRSb2xlID0gdGhpcy5tZW1iZXIucm9sZTtcclxuICAgIHRoaXMudGltSGVscGVyLnRpbVxyXG4gICAgICAuc2V0R3JvdXBNZW1iZXJSb2xlKHtcclxuICAgICAgICBncm91cElEOiB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24uZ3JvdXBQcm9maWxlLmdyb3VwSUQsXHJcbiAgICAgICAgdXNlcklEOiB0aGlzLm1lbWJlci51c2VySUQsXHJcbiAgICAgICAgcm9sZTogY3VycmVudFJvbGUgPT09ICdBZG1pbicgPyAnTWVtYmVyJyA6ICdBZG1pbicsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAga2lja291dEdyb3VwTWVtYmVyKCkge1xyXG4gICAgdGhpcy50aW1IZWxwZXIudGltXHJcbiAgICAgIC5kZWxldGVHcm91cE1lbWJlcih7XHJcbiAgICAgICAgZ3JvdXBJRDogdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLmdyb3VwUHJvZmlsZS5ncm91cElELFxyXG4gICAgICAgIHJlYXNvbjogJ+aIkeimgei4ouS9oOWHuue+pCcsXHJcbiAgICAgICAgdXNlcklETGlzdDogW3RoaXMubWVtYmVyLnVzZXJJRF0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyB0aGlzLiRzdG9yZS5jb21taXQoJ2RlbGV0ZUdyb3VwTWVtZWJlcicsIHRoaXMubWVtYmVyLnVzZXJJRCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+dXNlcklEOjwvc3Bhbj5cclxuICAgIHt7IG1lbWJlci51c2VySUQgfX1cclxuICAgIDxhICpuZ0lmPVwic2hvd0NhbmNlbEJhblwiIHR5cGU9XCJ0ZXh0XCIgKGNsaWNrKT1cImNhbmNlbE11dGUoKVwiPuWPlua2iOemgeiogDwvYT5cclxuICAgIDxhIFtuZ1N0eWxlXT1cInsnY29sb3InOiAncmVkJ31cIiBuei1wb3BvdmVyIFtuelBvcG92ZXJDb250ZW50XT1cImNvbnRlbnRUZW1wbGF0ZVwiXHJcbiAgICAgIG56UG9wb3ZlclBsYWNlbWVudD1cInRvcFJpZ2h0XCIgbnpQb3BvdmVyVHJpZ2dlcj1cImNsaWNrXCIgW256UG9wb3ZlclZpc2libGVdPVwibXV0ZVRpbWVWaXNpYmxlXCJcclxuICAgICAgW256UG9wb3ZlclRpdGxlXT1cIifnpoHoqIAo5Zue6L2m56Gu6K6kKSdcIj7npoHoqIA8L2E+XHJcbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT5cclxuICAgICAgPG56LWlucHV0LW51bWJlciBbbmdTdHlsZV09XCJ7J3dpZHRoJzogJzEwMCUnfVwiIFsobmdNb2RlbCldPVwibXV0ZVRpbWVcIiBbbnpNaW5dPVwiMVwiIFtuelN0ZXBdPVwiMVwiXHJcbiAgICAgICAgbnpQbGFjZWhvbGRlcj1cIuWbnui9puehruiupFwiIChrZXlkb3duLmVudGVyKT1cInNldEdyb3VwTWVtYmVyTXV0ZVRpbWUoKVwiPlxyXG4gICAgICA8L256LWlucHV0LW51bWJlcj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5uaWNrOjwvc3Bhbj5cclxuICAgIHt7IG1lbWJlci5uaWNrIHx8ICfmmoLml6AnIH19XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5uYW1lQ2FyZDo8L3NwYW4+XHJcbiAgICB7eyBtZW1iZXIubmFtZUNhcmQgfHwgJ+aaguaXoCcgfX1cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiZWRpdFwiIG56VGhlbWU9XCJvdXRsaW5lXCIgW25nU3R5bGVdPVwieydjdXJzb3InOiAncG9pbnRlcid9XCIgbnotcG9wb3ZlclxyXG4gICAgICBbbnpQb3BvdmVyQ29udGVudF09XCJuYW1lQ2FyZFRlbXBsYXRlXCIgbnpQb3BvdmVyUGxhY2VtZW50PVwidG9wUmlnaHRcIiBuelBvcG92ZXJUcmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICBbbnpQb3BvdmVyVmlzaWJsZV09XCJtdXRlVGltZVZpc2libGVcIiBbbnpQb3BvdmVyVGl0bGVdPVwiJ+S/ruaUuee+pOWQjeeJhydcIj48L2k+XHJcbiAgICA8bmctdGVtcGxhdGUgI25hbWVDYXJkVGVtcGxhdGU+XHJcbiAgICAgIDxpbnB1dCBuei1pbnB1dCBbKG5nTW9kZWwpXT1cIm5hbWVDYXJkXCIgcGxhY2Vob2xkZXI9XCLlm57ovabnoa7orqRcIlxyXG4gICAgICAgIChrZXlkb3duLmVudGVyKT1cInNldEdyb3VwTWVtYmVyTmFtZUNhcmQoKVwiPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPnJvbGU6PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjb250ZW50IHJvbGVcIiBbdGl0bGVdPVwiY2hhbmdlUm9sZVRpdGxlXCI+e3sgbWVtYmVyLnJvbGUgfX08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cInNob3dNdXRlVW50aWxcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7npoHoqIDoh7M6PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJjb250ZW50XCI+e3sgbXV0ZVVudGlsIH19PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDxhIHR5cGU9XCJ0ZXh0XCIgKm5nSWY9XCJjYW5DaGFuZ2VSb2xlXCIgKGNsaWNrKT1cImNoYW5nZU1lbWJlclJvbGUoKVwiPlxyXG4gICAge3tcclxuICAgIG1lbWJlci5yb2xlID09PSAnQWRtaW4nID8gJ+WPlua2iOeuoeeQhuWRmCcgOiAn6K6+5Li6566h55CG5ZGYJ1xyXG4gICAgfX1cclxuICA8L2E+XHJcbiAgPGEgdHlwZT1cInRleHRcIiAqbmdJZj1cInNob3dLaWNrb3V0XCIgW25nU3R5bGVdPVwieydjb2xvcic6ICdyZWQnfVwiXHJcbiAgICAoY2xpY2spPVwia2lja291dEdyb3VwTWVtYmVyKClcIj7ouKLlh7rnvqTnu4RcclxuICA8L2E+XHJcbjwvZGl2PlxyXG4iXX0=