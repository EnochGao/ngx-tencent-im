import { Component, Input } from '@angular/core';
import TIM from 'tim-js-sdk';
import { showAction } from '../../store/actions';
import { MESSAGE_STATUS } from '../../shared.data';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/dropdown";
import * as i2 from "../../tim-helper.service";
import * as i3 from "@ngrx/store";
import * as i4 from "../../re-edit-message.service";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/menu";
import * as i7 from "ng-zorro-antd/core/transition-patch";
export class MessageBubbleComponent {
    constructor(nzContextMenuService, timHelper, store, reEditMessage) {
        this.nzContextMenuService = nzContextMenuService;
        this.timHelper = timHelper;
        this.store = store;
        this.reEditMessage = reEditMessage;
        this.isTimeout = false;
    }
    ngOnInit() {
        this.isTimeoutHandler();
    }
    get bubbleStyle() {
        let classString = '';
        if (this.isMine) {
            classString += 'message-send';
        }
        else {
            classString += 'message-received';
        }
        if (this.isNew) {
            classString += 'new';
        }
        return classString;
    }
    get messageReadByPeer() {
        if (this.message.conversationType === TIM.TYPES.CONV_C2C && this.message.isPeerRead) {
            return '已读';
        }
        if (this.message.conversationType === TIM.TYPES.CONV_C2C && !this.message.isPeerRead) {
            return '未读';
        }
        return '';
    }
    get text() {
        if (this.message.conversationType === TIM.TYPES.CONV_C2C && !this.isMine) {
            return '对方撤回了一条消息';
        }
        if (this.message.conversationType === TIM.TYPES.CONV_GROUP && !this.isMine) {
            return `${this.message.from}撤回了一条消息`;
        }
        return '你撤回了一条消息';
    }
    get isEdit() {
        if (!this.isMine) {
            return false;
        }
        if (this.message.type !== TIM.TYPES.MSG_TEXT) {
            return false;
        }
        if (this.isTimeout) {
            return false;
        }
        return true;
    }
    contextMenu($event, menu) {
        this.nzContextMenuService.create($event, menu);
    }
    revokeMessage() {
        this.timHelper.tim.revokeMessage(this.message).then(() => {
            this.isTimeoutHandler();
        }).catch((err) => {
            this.store.dispatch(showAction({
                message: err,
                msgType: MESSAGE_STATUS.warning
            }));
        });
    }
    reEdit() {
        this.reEditMessage.reEditMessage.emit(this.message.payload.text);
    }
    isTimeoutHandler() {
        // this.subscription = timer(0, 1000).subscribe(() => {
        //   const time = (new Date().getTime() / 1000) + '';
        //   if (parseInt((time)) - this.message.time > 2 * 60) {
        //     this.isTimeout = true;
        //     this.subscription.unsubscribe();
        //   } else {
        //     this.isTimeoutHandler();
        //   }
        // });
        const now = new Date();
        const time = (now.getTime() / 1000).toString();
        if (parseInt(time, 10) - this.message.time > 2 * 60) {
            this.isTimeout = true;
            return;
        }
        setTimeout(this.isTimeoutHandler, 1000);
    }
}
MessageBubbleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageBubbleComponent, deps: [{ token: i1.NzContextMenuService }, { token: i2.TimHelperService }, { token: i3.Store }, { token: i4.ReEditMessageService }], target: i0.ɵɵFactoryTarget.Component });
MessageBubbleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageBubbleComponent, selector: "app-message-bubble", inputs: { message: "message", isMine: "isMine", isNew: "isNew" }, ngImport: i0, template: "<div class=\"chat-bubble\">\r\n  <div *ngIf=\"!message.isRevoked\" (contextmenu)=\"contextMenu($event, menu)\">\r\n    <div style=\"display: flex\">\r\n      <div *ngIf=\"isMine\" class=\"message-status\">\r\n        <span>{{messageReadByPeer}}</span>\r\n      </div>\r\n      <div class=\"message-content\" [class]=\"bubbleStyle\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n      <ul nz-menu>\r\n        <li nz-menu-item *ngIf=\"isMine&&!isTimeout\" (click)=\"revokeMessage()\">\u64A4\u56DE</li>\r\n        <!-- <li nz-menu-item [hidden]=\"message.status ==='fail'\">\u8F6C\u53D1</li>\r\n        <li nz-menu-item [hidden]=\"message.status ==='fail'\">\u591A\u9009</li> -->\r\n      </ul>\r\n    </nz-dropdown-menu>\r\n  </div>\r\n  <div class=\"group-tip-element-wrapper\" *ngIf=\"message.isRevoked\">\r\n    {{text}}\r\n    <a *ngIf=\"isEdit\" (click)=\"reEdit()\">\u91CD\u65B0\u7F16\u8F91</a>\r\n  </div>\r\n</div>\r\n", styles: [".chat-bubble{position:relative}.chat-bubble .message-status{display:flex;min-width:25px;margin-right:10px;justify-content:center;align-items:center;font-size:12px;color:#6e7981}.chat-bubble .message-content{outline:none;font-size:14px;position:relative;max-width:350px;word-wrap:break-word;word-break:break-all;padding:10px;box-shadow:0 5px 10px #0000001a}.chat-bubble .message-content span{white-space:pre-wrap;margin:0;text-shadow:#495060 0 0 .05em}.chat-bubble .message-content img{vertical-align:bottom}.chat-bubble .message-content:before{position:absolute;top:-6px;width:12px;height:40px;content:\"\\e900\";font-family:tim!important;font-size:24px}.chat-bubble .message-received{background-color:#fff;margin-left:15px;border-radius:0 4px 4px}.chat-bubble .message-received:before{left:-10px;transform:scaleX(-1);color:#fff}.chat-bubble .message-received.new{transform:scale(0);transform-origin:top left;animation:bounce .5s linear both}.chat-bubble .message-send{background-color:#9eea6a;margin-right:15px;border-radius:4px 0 4px 4px;color:#000}.chat-bubble .message-send:before{right:-10px;color:#9eea6a}.chat-bubble .message-send.new{transform:scale(0);transform-origin:top right;animation:bounce .5s linear both}.chat-bubble .el-dropdown{vertical-align:top;display:flex}.chat-bubble .el-dropdown+.el-dropdown{margin-left:15px}.chat-bubble .el-icon-arrow-down{font-size:12px}.group-tip-element-wrapper{background:#fff;padding:4px 15px;border-radius:3px;color:#a5b5c1;font-size:12px}.edit-button{padding-top:4px;height:20px;font-size:10px}@keyframes bounce{0%{transform:scale(0)}4.7%{transform:scale(.45)}9.41%{transform:scale(.883)}14.11%{transform:scale(1.141)}18.72%{transform:scale(1.212)}24.32%{transform:scale(1.151)}29.93%{transform:scale(1.048)}35.54%{transform:scale(.979)}41.04%{transform:scale(.961)}52.15%{transform:scale(.991)}63.26%{transform:scale(1.007)}85.49%{transform:scale(.999)}to{transform:scale(1)}}\n"], components: [{ type: i1.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { type: i7.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageBubbleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-bubble', template: "<div class=\"chat-bubble\">\r\n  <div *ngIf=\"!message.isRevoked\" (contextmenu)=\"contextMenu($event, menu)\">\r\n    <div style=\"display: flex\">\r\n      <div *ngIf=\"isMine\" class=\"message-status\">\r\n        <span>{{messageReadByPeer}}</span>\r\n      </div>\r\n      <div class=\"message-content\" [class]=\"bubbleStyle\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n      <ul nz-menu>\r\n        <li nz-menu-item *ngIf=\"isMine&&!isTimeout\" (click)=\"revokeMessage()\">\u64A4\u56DE</li>\r\n        <!-- <li nz-menu-item [hidden]=\"message.status ==='fail'\">\u8F6C\u53D1</li>\r\n        <li nz-menu-item [hidden]=\"message.status ==='fail'\">\u591A\u9009</li> -->\r\n      </ul>\r\n    </nz-dropdown-menu>\r\n  </div>\r\n  <div class=\"group-tip-element-wrapper\" *ngIf=\"message.isRevoked\">\r\n    {{text}}\r\n    <a *ngIf=\"isEdit\" (click)=\"reEdit()\">\u91CD\u65B0\u7F16\u8F91</a>\r\n  </div>\r\n</div>\r\n", styles: [".chat-bubble{position:relative}.chat-bubble .message-status{display:flex;min-width:25px;margin-right:10px;justify-content:center;align-items:center;font-size:12px;color:#6e7981}.chat-bubble .message-content{outline:none;font-size:14px;position:relative;max-width:350px;word-wrap:break-word;word-break:break-all;padding:10px;box-shadow:0 5px 10px #0000001a}.chat-bubble .message-content span{white-space:pre-wrap;margin:0;text-shadow:#495060 0 0 .05em}.chat-bubble .message-content img{vertical-align:bottom}.chat-bubble .message-content:before{position:absolute;top:-6px;width:12px;height:40px;content:\"\\e900\";font-family:tim!important;font-size:24px}.chat-bubble .message-received{background-color:#fff;margin-left:15px;border-radius:0 4px 4px}.chat-bubble .message-received:before{left:-10px;transform:scaleX(-1);color:#fff}.chat-bubble .message-received.new{transform:scale(0);transform-origin:top left;animation:bounce .5s linear both}.chat-bubble .message-send{background-color:#9eea6a;margin-right:15px;border-radius:4px 0 4px 4px;color:#000}.chat-bubble .message-send:before{right:-10px;color:#9eea6a}.chat-bubble .message-send.new{transform:scale(0);transform-origin:top right;animation:bounce .5s linear both}.chat-bubble .el-dropdown{vertical-align:top;display:flex}.chat-bubble .el-dropdown+.el-dropdown{margin-left:15px}.chat-bubble .el-icon-arrow-down{font-size:12px}.group-tip-element-wrapper{background:#fff;padding:4px 15px;border-radius:3px;color:#a5b5c1;font-size:12px}.edit-button{padding-top:4px;height:20px;font-size:10px}@keyframes bounce{0%{transform:scale(0)}4.7%{transform:scale(.45)}9.41%{transform:scale(.883)}14.11%{transform:scale(1.141)}18.72%{transform:scale(1.212)}24.32%{transform:scale(1.151)}29.93%{transform:scale(1.048)}35.54%{transform:scale(.979)}41.04%{transform:scale(.961)}52.15%{transform:scale(.991)}63.26%{transform:scale(1.007)}85.49%{transform:scale(.999)}to{transform:scale(1)}}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NzContextMenuService }, { type: i2.TimHelperService }, { type: i3.Store }, { type: i4.ReEditMessageService }]; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], isNew: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1idWJibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1idWJibGUvbWVzc2FnZS1idWJibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1idWJibGUvbWVzc2FnZS1idWJibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxHQUFHLE1BQU0sWUFBWSxDQUFDO0FBSTdCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7OztBQVNuRCxNQUFNLE9BQU8sc0JBQXNCO0lBUWpDLFlBQ1Usb0JBQTBDLEVBQzFDLFNBQTJCLEVBQzNCLEtBQVksRUFDWixhQUFtQztRQUhuQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFQN0MsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVFkLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdELElBQUksV0FBVztRQUNiLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixXQUFXLElBQUksY0FBYyxDQUFDO1NBQy9CO2FBQU07WUFDTCxXQUFXLElBQUksa0JBQWtCLENBQUM7U0FDbkM7UUFDRCxJQUFJ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LENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE9BQU87U0FDUjtRQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7bUhBeEdVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLDRIQ2hCbkMsMCtCQXVCQTsyRkRQYSxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0Usb0JBQW9CO2lNQUtyQixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAndGltLWpzLXNkayc7XHJcbmltcG9ydCBUSU0gZnJvbSAndGltLWpzLXNkayc7XHJcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlLCBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBUaW1IZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGltLWhlbHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IHNob3dBY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcclxuaW1wb3J0IHsgTUVTU0FHRV9TVEFUVVMgfSBmcm9tICcuLi8uLi9zaGFyZWQuZGF0YSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUmVFZGl0TWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9yZS1lZGl0LW1lc3NhZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1tZXNzYWdlLWJ1YmJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21lc3NhZ2UtYnViYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tZXNzYWdlLWJ1YmJsZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnViYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xyXG4gIEBJbnB1dCgpIGlzTWluZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBpc05ldzogYm9vbGVhbjtcclxuXHJcbiAgaXNUaW1lb3V0ID0gZmFsc2U7XHJcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuekNvbnRleHRNZW51U2VydmljZTogTnpDb250ZXh0TWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRpbUhlbHBlcjogVGltSGVscGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSByZUVkaXRNZXNzYWdlOiBSZUVkaXRNZXNzYWdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1RpbWVvdXRIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0IGJ1YmJsZVN0eWxlKCkge1xyXG4gICAgbGV0IGNsYXNzU3RyaW5nID0gJyc7XHJcbiAgICBpZiAodGhpcy5pc01pbmUpIHtcclxuICAgICAgY2xhc3NTdHJpbmcgKz0gJ21lc3NhZ2Utc2VuZCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGFzc1N0cmluZyArPSAnbWVzc2FnZS1yZWNlaXZlZCc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc05ldykge1xyXG4gICAgICBjbGFzc1N0cmluZyArPSAnbmV3JztcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc1N0cmluZztcclxuICB9XHJcblxyXG4gIGdldCBtZXNzYWdlUmVhZEJ5UGVlcigpIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2UuY29udmVyc2F0aW9uVHlwZSA9PT0gVElNLlRZUEVTLkNPTlZfQzJDICYmIHRoaXMubWVzc2FnZS5pc1BlZXJSZWFkKSB7XHJcbiAgICAgIHJldHVybiAn5bey6K+7JztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1lc3NhZ2UuY29udmVyc2F0aW9uVHlwZSA9PT0gVElNLlRZUEVTLkNPTlZfQzJDICYmICF0aGlzLm1lc3NhZ2UuaXNQZWVyUmVhZCkge1xyXG4gICAgICByZXR1cm4gJ+acquivuyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dCgpIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2UuY29udmVyc2F0aW9uVHlwZSA9PT0gVElNLlRZUEVTLkNPTlZfQzJDICYmICF0aGlzLmlzTWluZSkge1xyXG4gICAgICByZXR1cm4gJ+WvueaWueaSpOWbnuS6huS4gOadoea2iOaBryc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlLmNvbnZlcnNhdGlvblR5cGUgPT09IFRJTS5UWVBFUy5DT05WX0dST1VQICYmICF0aGlzLmlzTWluZSkge1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5tZXNzYWdlLmZyb2195pKk5Zue5LqG5LiA5p2h5raI5oGvYDtcclxuICAgIH1cclxuICAgIHJldHVybiAn5L2g5pKk5Zue5LqG5LiA5p2h5raI5oGvJztcclxuICB9XHJcblxyXG4gIGdldCBpc0VkaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNNaW5lKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1lc3NhZ2UudHlwZSAhPT0gVElNLlRZUEVTLk1TR19URVhUKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzVGltZW91dCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnRleHRNZW51KCRldmVudDogTW91c2VFdmVudCwgbWVudTogTnpEcm9wZG93bk1lbnVDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb250ZXh0TWVudVNlcnZpY2UuY3JlYXRlKCRldmVudCwgbWVudSk7XHJcbiAgfVxyXG5cclxuICByZXZva2VNZXNzYWdlKCkge1xyXG4gICAgdGhpcy50aW1IZWxwZXIudGltLnJldm9rZU1lc3NhZ2UodGhpcy5tZXNzYWdlKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5pc1RpbWVvdXRIYW5kbGVyKCk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgc2hvd0FjdGlvbih7XHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnIsXHJcbiAgICAgICAgICBtc2dUeXBlOiBNRVNTQUdFX1NUQVRVUy53YXJuaW5nXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVFZGl0KCkge1xyXG4gICAgdGhpcy5yZUVkaXRNZXNzYWdlLnJlRWRpdE1lc3NhZ2UuZW1pdCh0aGlzLm1lc3NhZ2UucGF5bG9hZC50ZXh0KTtcclxuICB9XHJcblxyXG4gIGlzVGltZW91dEhhbmRsZXIoKSB7IC8vIOS7juWPkemAgea2iOaBr+aXtumXtOW8gOWni+eul+i1t++8jOS4pOWIhumSn+WGheWPr+S7pee8lui+kVxyXG4gICAgLy8gdGhpcy5zdWJzY3JpcHRpb24gPSB0aW1lcigwLCAxMDAwKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCB0aW1lID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgKyAnJztcclxuICAgIC8vICAgaWYgKHBhcnNlSW50KCh0aW1lKSkgLSB0aGlzLm1lc3NhZ2UudGltZSA+IDIgKiA2MCkge1xyXG4gICAgLy8gICAgIHRoaXMuaXNUaW1lb3V0ID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIHRoaXMuaXNUaW1lb3V0SGFuZGxlcigpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB0aW1lID0gKG5vdy5nZXRUaW1lKCkgLyAxMDAwKS50b1N0cmluZygpO1xyXG4gICAgaWYgKHBhcnNlSW50KHRpbWUsIDEwKSAtIHRoaXMubWVzc2FnZS50aW1lID4gMiAqIDYwKSB7XHJcbiAgICAgIHRoaXMuaXNUaW1lb3V0ID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCh0aGlzLmlzVGltZW91dEhhbmRsZXIsIDEwMDApO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY2hhdC1idWJibGVcIj5cclxuICA8ZGl2ICpuZ0lmPVwiIW1lc3NhZ2UuaXNSZXZva2VkXCIgKGNvbnRleHRtZW51KT1cImNvbnRleHRNZW51KCRldmVudCwgbWVudSlcIj5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4XCI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJpc01pbmVcIiBjbGFzcz1cIm1lc3NhZ2Utc3RhdHVzXCI+XHJcbiAgICAgICAgPHNwYW4+e3ttZXNzYWdlUmVhZEJ5UGVlcn19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtY29udGVudFwiIFtjbGFzc109XCJidWJibGVTdHlsZVwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuei1kcm9wZG93bi1tZW51ICNtZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPHVsIG56LW1lbnU+XHJcbiAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAqbmdJZj1cImlzTWluZSYmIWlzVGltZW91dFwiIChjbGljayk9XCJyZXZva2VNZXNzYWdlKClcIj7mkqTlm548L2xpPlxyXG4gICAgICAgIDwhLS0gPGxpIG56LW1lbnUtaXRlbSBbaGlkZGVuXT1cIm1lc3NhZ2Uuc3RhdHVzID09PSdmYWlsJ1wiPui9rOWPkTwvbGk+XHJcbiAgICAgICAgPGxpIG56LW1lbnUtaXRlbSBbaGlkZGVuXT1cIm1lc3NhZ2Uuc3RhdHVzID09PSdmYWlsJ1wiPuWkmumAiTwvbGk+IC0tPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJncm91cC10aXAtZWxlbWVudC13cmFwcGVyXCIgKm5nSWY9XCJtZXNzYWdlLmlzUmV2b2tlZFwiPlxyXG4gICAge3t0ZXh0fX1cclxuICAgIDxhICpuZ0lmPVwiaXNFZGl0XCIgKGNsaWNrKT1cInJlRWRpdCgpXCI+6YeN5paw57yW6L6RPC9hPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19