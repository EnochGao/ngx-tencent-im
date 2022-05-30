import { Component, ViewChild } from '@angular/core';
import { conversationSelector, currentConversationSelector } from '../../store/selectors';
import { ChangeDetectionStrategy } from '@angular/core';
import { showAction } from '../../store/actions';
import { MESSAGE_STATUS, TIM } from '../../shared.data';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../tim-helper.service";
import * as i3 from "../../message/message-item/message-item.component";
import * as i4 from "../../message/message-send-box/message-send-box.component";
import * as i5 from "@angular/common";
export class CurrentConversationComponent {
    constructor(store, cd, timHelperService) {
        this.store = store;
        this.cd = cd;
        this.timHelperService = timHelperService;
        this.currentMessageList = [];
        this.isShowScrollBottomTips = false;
        this.isCompleted = false;
        this.preScrollHeight = 0;
    }
    get showCurrentConversation() {
        return !!this.currentConversation?.conversationID;
    }
    get showMessageSendBox() {
        return (this.currentConversation.type !== TIM.TYPES.CONV_SYSTEM);
    }
    ngOnInit() {
        // 获取当前会话
        this.currentConversationSubscription = this.store.select(currentConversationSelector).subscribe(res => {
            this.currentConversation = res;
            this.preScrollHeight = 0;
            this.cd.markForCheck();
        });
        this.conversationSubscription = this.store.select(conversationSelector)
            .subscribe(res => {
            this.currentMessageList = res.currentMessageList;
            this.isCompleted = res.isCompleted;
            if (res.currentMessageList && res.currentMessageList.length > 0) {
                if (this.currentConversation.conversationID) {
                    this.keepMessageListOnBottom();
                    this.timHelperService.tim.setMessageRead({ conversationID: this.currentConversation.conversationID });
                }
            }
            this.cd.markForCheck();
        }, err => {
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.error, message: err.message }));
        });
        this.eventBusSubscription = this.timHelperService.eventBus$
            .subscribe((res) => {
            if (res === 'scroll-bottom') {
                this.scrollMessageListToBottom();
                this.cd.markForCheck();
            }
        });
    }
    ngAfterViewInit() {
        this.keepMessageListOnBottom();
    }
    getMore() {
        this.timHelperService.getMessageList(this.currentConversation.conversationID);
    }
    onscroll({ target: { scrollTop } }) {
        const messageListNode = this.messageListRef?.nativeElement;
        if (!messageListNode) {
            return;
        }
        if (this.preScrollHeight - messageListNode.clientHeight - scrollTop < 20) {
            this.isShowScrollBottomTips = false;
        }
    }
    scrollMessageListToBottom() {
        const messageListNode = this.messageListRef?.nativeElement;
        if (!messageListNode) {
            return;
        }
        setTimeout(() => {
            messageListNode.scrollTop = messageListNode.scrollHeight;
            this.preScrollHeight = messageListNode.scrollHeight;
            this.isShowScrollBottomTips = false;
        }, 0);
    }
    // 如果滚到底部就保持在底部，否则提示是否要滚到底部
    keepMessageListOnBottom() {
        const messageListNode = this.messageListRef?.nativeElement;
        if (!messageListNode) {
            return;
        }
        setTimeout(() => {
            // 距离底部20px内强制滚到底部,否则提示有新消息
            if (this.preScrollHeight - messageListNode.clientHeight - messageListNode.scrollTop < 20) {
                messageListNode.scrollTop = messageListNode.scrollHeight;
                this.isShowScrollBottomTips = false;
            }
            else {
                this.isShowScrollBottomTips = true;
            }
            this.preScrollHeight = messageListNode.scrollHeight;
        }, 0);
    }
    ngOnDestroy() {
        [
            this.eventBusSubscription,
            this.conversationSubscription,
            this.currentConversationSubscription
        ].forEach(item => {
            if (item) {
                item.unsubscribe();
            }
        });
    }
}
CurrentConversationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CurrentConversationComponent, deps: [{ token: i1.Store }, { token: i0.ChangeDetectorRef }, { token: i2.TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
CurrentConversationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: CurrentConversationComponent, selector: "app-current-conversation", viewQueries: [{ propertyName: "messageListRef", first: true, predicate: ["messageList"], descendants: true }], ngImport: i0, template: "<div class=\"current-conversation-wrapper\">\r\n  <div class=\"current-conversation\" *ngIf=\"showCurrentConversation\" (scroll)=\"onscroll($event)\">\r\n    <div class=\"content\">\r\n      <div class=\"message-list\" #messageList (scroll)=\"onscroll($event)\">\r\n        <div class=\"more\" *ngIf=\"!isCompleted\">\r\n          <a (click)=\"getMore()\">\u67E5\u770B\u66F4\u591A</a>\r\n        </div>\r\n        <div class=\"no-more\" *ngIf=\"isCompleted\">\u6CA1\u6709\u66F4\u591A\u4E86</div>\r\n        <app-message-item *ngFor=\"let message of currentMessageList\" [message]=\"message\"\r\n          [currentConversation]=\"currentConversation\">\r\n        </app-message-item>\r\n      </div>\r\n      <div class=\"newMessageTips\" *ngIf=\"isShowScrollBottomTips\"\r\n        (click)=\"scrollMessageListToBottom()\">\u56DE\u5230\u6700\u65B0\u4F4D\u7F6E</div>\r\n    </div>\r\n    <div class=\"footer\" *ngIf=\"showMessageSendBox\">\r\n      <app-message-send-box></app-message-send-box>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".current-conversation-wrapper{background-color:#f5f5f5;color:#1c2438;display:flex;height:75vh}.current-conversation-wrapper .current-conversation{display:flex;flex-direction:column;width:100%}.current-conversation-wrapper .more{display:flex;justify-content:center;font-size:12px}.current-conversation-wrapper .no-more{display:flex;justify-content:center;color:#a5b5c1;font-size:12px;padding:10px}.content{display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative}.content .message-list{width:100%;box-sizing:border-box;overflow-y:scroll;padding:0 20px}.content .newMessageTips{position:absolute;cursor:pointer;padding:5px;width:120px;margin:auto;left:0;right:0;bottom:5px;font-size:12px;text-align:center;border-radius:10px;border:#e9eaec 1px solid;background-color:#fff;color:#2d8cf0}.footer{border-top:1px solid #e7e7e7}\n"], components: [{ type: i3.MessageItemComponent, selector: "app-message-item", inputs: ["currentConversation", "message"] }, { type: i4.MessageSendBoxComponent, selector: "app-message-send-box" }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CurrentConversationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-current-conversation', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"current-conversation-wrapper\">\r\n  <div class=\"current-conversation\" *ngIf=\"showCurrentConversation\" (scroll)=\"onscroll($event)\">\r\n    <div class=\"content\">\r\n      <div class=\"message-list\" #messageList (scroll)=\"onscroll($event)\">\r\n        <div class=\"more\" *ngIf=\"!isCompleted\">\r\n          <a (click)=\"getMore()\">\u67E5\u770B\u66F4\u591A</a>\r\n        </div>\r\n        <div class=\"no-more\" *ngIf=\"isCompleted\">\u6CA1\u6709\u66F4\u591A\u4E86</div>\r\n        <app-message-item *ngFor=\"let message of currentMessageList\" [message]=\"message\"\r\n          [currentConversation]=\"currentConversation\">\r\n        </app-message-item>\r\n      </div>\r\n      <div class=\"newMessageTips\" *ngIf=\"isShowScrollBottomTips\"\r\n        (click)=\"scrollMessageListToBottom()\">\u56DE\u5230\u6700\u65B0\u4F4D\u7F6E</div>\r\n    </div>\r\n    <div class=\"footer\" *ngIf=\"showMessageSendBox\">\r\n      <app-message-send-box></app-message-send-box>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".current-conversation-wrapper{background-color:#f5f5f5;color:#1c2438;display:flex;height:75vh}.current-conversation-wrapper .current-conversation{display:flex;flex-direction:column;width:100%}.current-conversation-wrapper .more{display:flex;justify-content:center;font-size:12px}.current-conversation-wrapper .no-more{display:flex;justify-content:center;color:#a5b5c1;font-size:12px;padding:10px}.content{display:flex;flex:1;flex-direction:column;overflow:hidden;position:relative}.content .message-list{width:100%;box-sizing:border-box;overflow-y:scroll;padding:0 20px}.content .newMessageTips{position:absolute;cursor:pointer;padding:5px;width:120px;margin:auto;left:0;right:0;bottom:5px;font-size:12px;text-align:center;border-radius:10px;border:#e9eaec 1px solid;background-color:#fff;color:#2d8cf0}.footer{border-top:1px solid #e7e7e7}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: i0.ChangeDetectorRef }, { type: i2.TimHelperService }]; }, propDecorators: { messageListRef: [{
                type: ViewChild,
                args: ['messageList', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1jb252ZXJzYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL2NvbnZlcnNhdGlvbi9jdXJyZW50LWNvbnZlcnNhdGlvbi9jdXJyZW50LWNvbnZlcnNhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvY29udmVyc2F0aW9uL2N1cnJlbnQtY29udmVyc2F0aW9uL2N1cnJlbnQtY29udmVyc2F0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBSVQsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBTXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztBQVN4RCxNQUFNLE9BQU8sNEJBQTRCO0lBdUJ2QyxZQUNVLEtBQVksRUFDWixFQUFxQixFQUNyQixnQkFBa0M7UUFGbEMsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF4QjVDLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7SUFzQmhCLENBQUM7SUFkTCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLENBQUMsQ0FBQyxJQUFJ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TCxDQUFDOzt5SEE5SFUsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsK0tDM0J6QywwZ0NBb0JBOzJGRE9hLDRCQUE0QjtrQkFOeEMsU0FBUzsrQkFDRSwwQkFBMEIsbUJBR25CLHVCQUF1QixDQUFDLE1BQU07MkpBdUJGLGNBQWM7c0JBQTFELFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbnZlcnNhdGlvbiB9IGZyb20gJ3RpbS1qcy1zZGsnO1xuaW1wb3J0IHsgY29udmVyc2F0aW9uU2VsZWN0b3IsIGN1cnJlbnRDb252ZXJzYXRpb25TZWxlY3RvciB9IGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBUaW1IZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGltLWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzaG93QWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBNRVNTQUdFX1NUQVRVUywgVElNIH0gZnJvbSAnLi4vLi4vc2hhcmVkLmRhdGEnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jdXJyZW50LWNvbnZlcnNhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXJyZW50LWNvbnZlcnNhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1cnJlbnQtY29udmVyc2F0aW9uLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDb252ZXJzYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIGN1cnJlbnRDb252ZXJzYXRpb246IENvbnZlcnNhdGlvbjtcbiAgY3VycmVudE1lc3NhZ2VMaXN0ID0gW107XG4gIGlzU2hvd1Njcm9sbEJvdHRvbVRpcHMgPSBmYWxzZTtcbiAgaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgcHJlU2Nyb2xsSGVpZ2h0ID0gMDtcbiAgbmFtZTogc3RyaW5nO1xuICB0b0FjY291bnQ6IHN0cmluZztcblxuICBldmVudEJ1c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBjb252ZXJzYXRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgY3VycmVudENvbnZlcnNhdGlvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBzaG93Q3VycmVudENvbnZlcnNhdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24/LmNvbnZlcnNhdGlvbklEO1xuICB9XG5cbiAgZ2V0IHNob3dNZXNzYWdlU2VuZEJveCgpIHtcbiAgICByZXR1cm4gKHRoaXMuY3VycmVudENvbnZlcnNhdGlvbi50eXBlICE9PSBUSU0uVFlQRVMuQ09OVl9TWVNURU0pO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnbWVzc2FnZUxpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWVzc2FnZUxpc3RSZWY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0aW1IZWxwZXJTZXJ2aWNlOiBUaW1IZWxwZXJTZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIOiOt+WPluW9k+WJjeS8muivnVxuICAgIHRoaXMuY3VycmVudENvbnZlcnNhdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUuc2VsZWN0KGN1cnJlbnRDb252ZXJzYXRpb25TZWxlY3Rvcikuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24gPSByZXM7XG4gICAgICB0aGlzLnByZVNjcm9sbEhlaWdodCA9IDA7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb252ZXJzYXRpb25TdWJzY3JpcHRpb24gPSB0aGlzLnN0b3JlLnNlbGVjdChjb252ZXJzYXRpb25TZWxlY3RvcilcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZUxpc3QgPSByZXMuY3VycmVudE1lc3NhZ2VMaXN0O1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gcmVzLmlzQ29tcGxldGVkO1xuICAgICAgICBpZiAocmVzLmN1cnJlbnRNZXNzYWdlTGlzdCAmJiByZXMuY3VycmVudE1lc3NhZ2VMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklEKSB7XG4gICAgICAgICAgICB0aGlzLmtlZXBNZXNzYWdlTGlzdE9uQm90dG9tKCk7XG4gICAgICAgICAgICB0aGlzLnRpbUhlbHBlclNlcnZpY2UudGltLnNldE1lc3NhZ2VSZWFkKHsgY29udmVyc2F0aW9uSUQ6IHRoaXMuY3VycmVudENvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JRCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgc2hvd0FjdGlvbih7IG1zZ1R5cGU6IE1FU1NBR0VfU1RBVFVTLmVycm9yLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50QnVzU3Vic2NyaXB0aW9uID0gdGhpcy50aW1IZWxwZXJTZXJ2aWNlLmV2ZW50QnVzJFxuICAgICAgLnN1YnNjcmliZSgocmVzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHJlcyA9PT0gJ3Njcm9sbC1ib3R0b20nKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxNZXNzYWdlTGlzdFRvQm90dG9tKCk7XG4gICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5rZWVwTWVzc2FnZUxpc3RPbkJvdHRvbSgpO1xuICB9XG5cbiAgZ2V0TW9yZSgpIHtcbiAgICB0aGlzLnRpbUhlbHBlclNlcnZpY2UuZ2V0TWVzc2FnZUxpc3QodGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklEKTtcbiAgfVxuXG4gIG9uc2Nyb2xsKHsgdGFyZ2V0OiB7IHNjcm9sbFRvcCB9IH0pIHtcbiAgICBjb25zdCBtZXNzYWdlTGlzdE5vZGUgPSB0aGlzLm1lc3NhZ2VMaXN0UmVmPy5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKCFtZXNzYWdlTGlzdE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJlU2Nyb2xsSGVpZ2h0IC0gbWVzc2FnZUxpc3ROb2RlLmNsaWVudEhlaWdodCAtIHNjcm9sbFRvcCA8IDIwKSB7XG4gICAgICB0aGlzLmlzU2hvd1Njcm9sbEJvdHRvbVRpcHMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxNZXNzYWdlTGlzdFRvQm90dG9tKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VMaXN0Tm9kZSA9IHRoaXMubWVzc2FnZUxpc3RSZWY/Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCFtZXNzYWdlTGlzdE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1lc3NhZ2VMaXN0Tm9kZS5zY3JvbGxUb3AgPSBtZXNzYWdlTGlzdE5vZGUuc2Nyb2xsSGVpZ2h0O1xuICAgICAgdGhpcy5wcmVTY3JvbGxIZWlnaHQgPSBtZXNzYWdlTGlzdE5vZGUuc2Nyb2xsSGVpZ2h0O1xuICAgICAgdGhpcy5pc1Nob3dTY3JvbGxCb3R0b21UaXBzID0gZmFsc2U7XG4gICAgfSwgMCk7XG5cbiAgfVxuXG4gIC8vIOWmguaenOa7muWIsOW6lemDqOWwseS/neaMgeWcqOW6lemDqO+8jOWQpuWImeaPkOekuuaYr+WQpuimgea7muWIsOW6lemDqFxuICBrZWVwTWVzc2FnZUxpc3RPbkJvdHRvbSgpIHtcbiAgICBjb25zdCBtZXNzYWdlTGlzdE5vZGUgPSB0aGlzLm1lc3NhZ2VMaXN0UmVmPy5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghbWVzc2FnZUxpc3ROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyDot53nprvlupXpg6gyMHB45YaF5by65Yi25rua5Yiw5bqV6YOoLOWQpuWImeaPkOekuuacieaWsOa2iOaBr1xuICAgICAgaWYgKHRoaXMucHJlU2Nyb2xsSGVpZ2h0IC0gbWVzc2FnZUxpc3ROb2RlLmNsaWVudEhlaWdodCAtIG1lc3NhZ2VMaXN0Tm9kZS5zY3JvbGxUb3AgPCAyMCkge1xuICAgICAgICBtZXNzYWdlTGlzdE5vZGUuc2Nyb2xsVG9wID0gbWVzc2FnZUxpc3ROb2RlLnNjcm9sbEhlaWdodDtcbiAgICAgICAgdGhpcy5pc1Nob3dTY3JvbGxCb3R0b21UaXBzID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzU2hvd1Njcm9sbEJvdHRvbVRpcHMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVTY3JvbGxIZWlnaHQgPSBtZXNzYWdlTGlzdE5vZGUuc2Nyb2xsSGVpZ2h0O1xuICAgIH0sIDApO1xuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBbXG4gICAgICB0aGlzLmV2ZW50QnVzU3Vic2NyaXB0aW9uLFxuICAgICAgdGhpcy5jb252ZXJzYXRpb25TdWJzY3JpcHRpb24sXG4gICAgICB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb25TdWJzY3JpcHRpb25cbiAgICBdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBpdGVtLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjdXJyZW50LWNvbnZlcnNhdGlvbi13cmFwcGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImN1cnJlbnQtY29udmVyc2F0aW9uXCIgKm5nSWY9XCJzaG93Q3VycmVudENvbnZlcnNhdGlvblwiIChzY3JvbGwpPVwib25zY3JvbGwoJGV2ZW50KVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtbGlzdFwiICNtZXNzYWdlTGlzdCAoc2Nyb2xsKT1cIm9uc2Nyb2xsKCRldmVudClcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9yZVwiICpuZ0lmPVwiIWlzQ29tcGxldGVkXCI+XHJcbiAgICAgICAgICA8YSAoY2xpY2spPVwiZ2V0TW9yZSgpXCI+5p+l55yL5pu05aSaPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuby1tb3JlXCIgKm5nSWY9XCJpc0NvbXBsZXRlZFwiPuayoeacieabtOWkmuS6hjwvZGl2PlxyXG4gICAgICAgIDxhcHAtbWVzc2FnZS1pdGVtICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIGN1cnJlbnRNZXNzYWdlTGlzdFwiIFttZXNzYWdlXT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgW2N1cnJlbnRDb252ZXJzYXRpb25dPVwiY3VycmVudENvbnZlcnNhdGlvblwiPlxyXG4gICAgICAgIDwvYXBwLW1lc3NhZ2UtaXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdNZXNzYWdlVGlwc1wiICpuZ0lmPVwiaXNTaG93U2Nyb2xsQm90dG9tVGlwc1wiXHJcbiAgICAgICAgKGNsaWNrKT1cInNjcm9sbE1lc3NhZ2VMaXN0VG9Cb3R0b20oKVwiPuWbnuWIsOacgOaWsOS9jee9rjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCIgKm5nSWY9XCJzaG93TWVzc2FnZVNlbmRCb3hcIj5cclxuICAgICAgPGFwcC1tZXNzYWdlLXNlbmQtYm94PjwvYXBwLW1lc3NhZ2Utc2VuZC1ib3g+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==