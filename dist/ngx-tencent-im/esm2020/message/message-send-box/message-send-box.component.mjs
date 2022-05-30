import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MESSAGE_STATUS } from '../../shared.data';
import { pushCurrentMessageListAction, showAction } from '../../store/actions';
import { currentConversationSelector } from '../../store/selectors';
import { emojiMap, emojiName, emojiUrl } from '../../util/emoji-map';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../tim-helper.service";
import * as i3 from "../../re-edit-message.service";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "ng-zorro-antd/popover";
import * as i9 from "@angular/forms";
import * as i10 from "ng-zorro-antd/core/wave";
import * as i11 from "ng-zorro-antd/tooltip";
export class MessageSendBoxComponent {
    constructor(store, cd, timHelperService, reEditMessage) {
        this.store = store;
        this.cd = cd;
        this.timHelperService = timHelperService;
        this.reEditMessage = reEditMessage;
        this.visible = false;
        this.emojiName = emojiName;
        this.emojiUrl = emojiUrl;
        this.emojiMap = emojiMap;
        this.focus = false;
        // 消息内容
        this.messageContent = '';
    }
    ngOnInit() {
        this.store.select(currentConversationSelector).subscribe(currentConversation => {
            this.currentConversation = currentConversation;
            if (!currentConversation || !currentConversation.conversationID) {
                this.toAccount = '';
            }
            else {
                switch (currentConversation.type) {
                    case 'C2C':
                        this.toAccount = currentConversation.conversationID.replace('C2C', '');
                        break;
                    case 'GROUP':
                        this.toAccount = currentConversation.conversationID.replace('GROUP', '');
                        break;
                    default:
                        this.toAccount = currentConversation.conversationID;
                }
            }
            if (!currentConversation || !currentConversation.type) {
                this.currentConversationType = '';
            }
            else {
                this.currentConversationType = currentConversation.type;
            }
        });
        this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));
        this.reEditMessage.reEditMessage.subscribe((payload) => {
            this.messageContent = payload;
            this.cd.markForCheck();
        });
    }
    onfocus(event) {
        console.log('onfocus');
        this.focus = true;
        console.log(this.currentConversation);
        this.timHelperService.checkoutConversation(this.currentConversation.conversationID);
    }
    onblur(event) {
        console.log('onblur');
        this.focus = false;
    }
    handleEnter(event) {
        this.sendTextMessage();
    }
    handleLine(event) {
        event.preventDefault();
        if (event.ctrlKey && event.key === 'Enter') {
            this.messageContent += '\n';
        }
    }
    handleUp(event) {
        console.log('handleUp::', event);
    }
    handleDown(event) {
        console.log('handleDown::', event);
    }
    keyDown(event) {
        if (!event.ctrlKey && event.key === 'Enter') {
            event.preventDefault();
            this.handleEnter(event);
        }
        if (event.key === 'ArrowUp') {
            event.stopPropagation();
            this.handleUp(event);
        }
        if (event.key === 'ArrowDown') {
            event.stopPropagation();
            this.handleDown(event);
        }
    }
    handlePaste(e) {
        const clipboardData = e.clipboardData;
        let file;
        if (clipboardData && clipboardData.files && clipboardData.files.length > 0) {
            file = clipboardData.files[0];
        }
        if (typeof file === 'undefined') {
            return;
        }
        // 1. 创建消息实例，接口返回的实例可以上屏
        const message = this.timHelperService.tim.createImageMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: {
                file,
            },
            onProgress: (percent) => {
                message.progress = percent; // 手动给message 实例加个响应式属性: progress
            },
        });
        // 2. 发送消息
        const promise = this.timHelperService.tim.sendMessage(message).then(res => {
            this.store.dispatch(pushCurrentMessageListAction({ message }));
        });
        promise.catch((error) => {
            console.error('[sendMessage error]::', error);
        });
    }
    sendImage(event) {
        console.log('sendImage');
        const message = this.timHelperService.tim.createImageMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: {
                file: this.imagePicker.nativeElement // 或者用event.target
            },
            onProgress: (percent) => {
                // 手动给message 实例加个响应式属性: progress
                message.progress = percent;
                console.log('percent:', percent);
            }
        });
        this.timHelperService.tim
            .sendMessage(message)
            .then(({ data }) => {
            console.log('发送成功', data);
            this.store.dispatch(pushCurrentMessageListAction({ message: Object.assign({}, data.message) }));
            this.imagePicker.nativeElement.value = null;
        })
            .catch(imError => {
            console.error('imError::', imError);
        });
    }
    sendFile(event) {
        const message = this.timHelperService.tim.createFileMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: {
                file: document.getElementById('filePicker'), // 或者用event.target
            },
            onProgress: (percent) => {
                message.progress = percent;
                console.log('上传进度', percent);
            },
        });
        this.timHelperService.tim
            .sendMessage(message)
            .then(({ data }) => {
            this.store.dispatch(pushCurrentMessageListAction({ message: Object.assign({}, data.message) }));
            this.filePicker.nativeElement.value = null;
        })
            .catch((imError) => {
            console.error('imError::', imError);
        });
    }
    chooseEmoji(item) {
        console.log(item);
        this.messageContent += item;
    }
    sendTextMessage() {
        if (this.messageContent === '' ||
            this.messageContent.trim().length === 0) {
            this.messageContent = '';
            this.store.dispatch(showAction({ msgType: MESSAGE_STATUS.warning, message: '不能发送空消息哦！' }));
            return;
        }
        const message = this.timHelperService.tim.createTextMessage({
            to: this.toAccount,
            conversationType: this.currentConversationType,
            payload: { text: this.messageContent }
        });
        this.store.dispatch(pushCurrentMessageListAction({ message }));
        this.timHelperService.eventBus$.next('scroll-bottom');
        this.timHelperService.tim.sendMessage(message).catch(error => {
            console.error('[sendMessage error]::', error);
        });
        this.messageContent = '';
    }
    handleSendImageClick(input, event) {
        event.stopPropagation();
        input.click();
    }
    handleSendFileClick(input) {
        input.click();
    }
    ngOnDestroy() {
        this.textInput.nativeElement.addEventListener('paste', this.handlePaste.bind(this));
    }
}
MessageSendBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageSendBoxComponent, deps: [{ token: i1.Store }, { token: i0.ChangeDetectorRef }, { token: i2.TimHelperService }, { token: i3.ReEditMessageService }], target: i0.ɵɵFactoryTarget.Component });
MessageSendBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageSendBoxComponent, selector: "app-message-send-box", viewQueries: [{ propertyName: "imagePicker", first: true, predicate: ["imagePicker"], descendants: true }, { propertyName: "filePicker", first: true, predicate: ["filePicker"], descendants: true }, { propertyName: "textInput", first: true, predicate: ["textInput"], descendants: true, static: true }], ngImport: i0, template: "<div class=\"message-send-box-wrapper\" [ngClass]=\"{'white-background': focus}\"\r\n  (focus)=\"onfocus($event)\">\r\n  <div class=\"send-header-bar\">\r\n\r\n    <input type=\"file\" #imagePicker accept=\".jpg, .jpeg, .png, .gif\" (change)=\"sendImage($event)\"\r\n      (click)=\"$event.stopPropagation()\" style=\"display:none\" />\r\n\r\n    <input type=\"file\" #filePicker (change)=\"sendFile($event)\" (click)=\"$event.stopPropagation()\"\r\n      style=\"display:none\" />\r\n\r\n    <i nz-icon nzType=\"meh\" nzTheme=\"outline\" title=\"\u53D1\u8868\u60C5\" nz-popover nzPopoverTitle=\"Title\"\r\n      [(nzPopoverVisible)]=\"visible\" nzPopoverTrigger=\"click\" [nzPopoverContent]=\"contentTemplate\"\r\n      [nzPopoverTitle]=\"'\u8868\u60C5'\"></i>\r\n\r\n    <i nz-icon nzType=\"picture\" nzTheme=\"outline\" title=\"\u53D1\u56FE\u7247\"\r\n      (click)=\"handleSendImageClick(imagePicker,$event)\"></i>\r\n\r\n    <i nz-icon nzType=\"folder\" nzTheme=\"outline\" title=\"\u53D1\u6587\u4EF6\"\r\n      (click)=\"handleSendFileClick(filePicker)\"></i>\r\n\r\n  </div>\r\n  <div class=\"bottom\">\r\n    <textarea rows=\"4\" resize=\"false\" class=\"text-input\" #textInput [(ngModel)]=\"messageContent\"\r\n      (focus)=\"onfocus($event)\" (blur)=\"onblur($event)\" (keydown)=\"keyDown($event)\"\r\n      (keyup)=\"handleLine($event)\">\r\n    </textarea>\r\n    <div class=\"btn-send\" (click)=\"sendTextMessage()\">\r\n      <button nzTooltipTitle=\"\u6309Enter\u53D1\u9001\u6D88\u606F\uFF0CCtrl+Enter\u6362\u884C\" nzTooltipPlacement=\"left\" nz-button\r\n        nz-tooltip class=\"tim-icon-send\">\u53D1\u9001</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #contentTemplate>\r\n  <div class=\"emojis\" [ngStyle]=\"{'width': '400px'}\">\r\n    <div *ngFor=\"let item of emojiName\" class=\"emoji\" (click)=\"chooseEmoji(item)\">\r\n      <img [src]=\"emojiUrl + emojiMap[item]\" style=\"width:30px;height:30px\" />\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [".message-send-box-wrapper{box-sizing:border-box;overflow:hidden;padding:3px 20px 20px}.emojis{height:160px;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;overflow-y:scroll}.emoji{height:40px;width:40px;box-sizing:border-box}.send-header-bar{box-sizing:border-box;padding:3px 0 0}.send-header-bar i{cursor:pointer;font-size:24px;color:gray;margin:0 12px 0 0}.send-header-bar i:hover{color:#000}textarea{resize:none}.text-input{font-size:16px;width:100%;box-sizing:box-sizing;border:none;outline:none;background-color:transparent}.block{padding:10px 0;display:flex;align-items:center}.bottom{padding-top:10px;position:relative}.bottom .btn-send{cursor:pointer;position:absolute;color:#2d8cf0;font-size:30px;right:0;bottom:-5px;padding:6px 6px 4px 4px;border-radius:50%}.white-background{background-color:#fff}\n"], components: [{ type: i4.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }], directives: [{ type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i8.NzPopoverDirective, selector: "[nz-popover]", inputs: ["nzPopoverArrowPointAtCenter", "nzPopoverTitle", "nzPopoverContent", "nz-popover", "nzPopoverTrigger", "nzPopoverPlacement", "nzPopoverOrigin", "nzPopoverVisible", "nzPopoverMouseEnterDelay", "nzPopoverMouseLeaveDelay", "nzPopoverOverlayClassName", "nzPopoverOverlayStyle", "nzPopoverBackdrop"], outputs: ["nzPopoverVisibleChange"], exportAs: ["nzPopover"] }, { type: i9.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i9.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i9.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i10.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i11.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i5.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageSendBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-send-box', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"message-send-box-wrapper\" [ngClass]=\"{'white-background': focus}\"\r\n  (focus)=\"onfocus($event)\">\r\n  <div class=\"send-header-bar\">\r\n\r\n    <input type=\"file\" #imagePicker accept=\".jpg, .jpeg, .png, .gif\" (change)=\"sendImage($event)\"\r\n      (click)=\"$event.stopPropagation()\" style=\"display:none\" />\r\n\r\n    <input type=\"file\" #filePicker (change)=\"sendFile($event)\" (click)=\"$event.stopPropagation()\"\r\n      style=\"display:none\" />\r\n\r\n    <i nz-icon nzType=\"meh\" nzTheme=\"outline\" title=\"\u53D1\u8868\u60C5\" nz-popover nzPopoverTitle=\"Title\"\r\n      [(nzPopoverVisible)]=\"visible\" nzPopoverTrigger=\"click\" [nzPopoverContent]=\"contentTemplate\"\r\n      [nzPopoverTitle]=\"'\u8868\u60C5'\"></i>\r\n\r\n    <i nz-icon nzType=\"picture\" nzTheme=\"outline\" title=\"\u53D1\u56FE\u7247\"\r\n      (click)=\"handleSendImageClick(imagePicker,$event)\"></i>\r\n\r\n    <i nz-icon nzType=\"folder\" nzTheme=\"outline\" title=\"\u53D1\u6587\u4EF6\"\r\n      (click)=\"handleSendFileClick(filePicker)\"></i>\r\n\r\n  </div>\r\n  <div class=\"bottom\">\r\n    <textarea rows=\"4\" resize=\"false\" class=\"text-input\" #textInput [(ngModel)]=\"messageContent\"\r\n      (focus)=\"onfocus($event)\" (blur)=\"onblur($event)\" (keydown)=\"keyDown($event)\"\r\n      (keyup)=\"handleLine($event)\">\r\n    </textarea>\r\n    <div class=\"btn-send\" (click)=\"sendTextMessage()\">\r\n      <button nzTooltipTitle=\"\u6309Enter\u53D1\u9001\u6D88\u606F\uFF0CCtrl+Enter\u6362\u884C\" nzTooltipPlacement=\"left\" nz-button\r\n        nz-tooltip class=\"tim-icon-send\">\u53D1\u9001</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #contentTemplate>\r\n  <div class=\"emojis\" [ngStyle]=\"{'width': '400px'}\">\r\n    <div *ngFor=\"let item of emojiName\" class=\"emoji\" (click)=\"chooseEmoji(item)\">\r\n      <img [src]=\"emojiUrl + emojiMap[item]\" style=\"width:30px;height:30px\" />\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [".message-send-box-wrapper{box-sizing:border-box;overflow:hidden;padding:3px 20px 20px}.emojis{height:160px;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;overflow-y:scroll}.emoji{height:40px;width:40px;box-sizing:border-box}.send-header-bar{box-sizing:border-box;padding:3px 0 0}.send-header-bar i{cursor:pointer;font-size:24px;color:gray;margin:0 12px 0 0}.send-header-bar i:hover{color:#000}textarea{resize:none}.text-input{font-size:16px;width:100%;box-sizing:box-sizing;border:none;outline:none;background-color:transparent}.block{padding:10px 0;display:flex;align-items:center}.bottom{padding-top:10px;position:relative}.bottom .btn-send{cursor:pointer;position:absolute;color:#2d8cf0;font-size:30px;right:0;bottom:-5px;padding:6px 6px 4px 4px;border-radius:50%}.white-background{background-color:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: i0.ChangeDetectorRef }, { type: i2.TimHelperService }, { type: i3.ReEditMessageService }]; }, propDecorators: { imagePicker: [{
                type: ViewChild,
                args: ['imagePicker', { static: false }]
            }], filePicker: [{
                type: ViewChild,
                args: ['filePicker', { static: false }]
            }], textInput: [{
                type: ViewChild,
                args: ['textInput', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1zZW5kLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvbWVzc2FnZS9tZXNzYWdlLXNlbmQtYm94L21lc3NhZ2Utc2VuZC1ib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1zZW5kLWJveC9tZXNzYWdlLXNlbmQtYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFpQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEksT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVFyRSxNQUFNLE9BQU8sdUJBQXVCO0lBaUJsQyxZQUNVLEtBQVksRUFDWixFQUFxQixFQUNyQixnQkFBa0MsRUFDbEMsYUFBbUM7UUFIbkMsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBbkI3QyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQixhQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLFVBQUssR0FBRyxLQUFL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QUFsRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgUmVFZGl0TWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9yZS1lZGl0LW1lc3NhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1FU1NBR0VfU1RBVFVTIH0gZnJvbSAnLi4vLi4vc2hhcmVkLmRhdGEnO1xyXG5pbXBvcnQgeyBwdXNoQ3VycmVudE1lc3NhZ2VMaXN0QWN0aW9uLCBzaG93QWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGN1cnJlbnRDb252ZXJzYXRpb25TZWxlY3RvciB9IGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBUaW1IZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGltLWhlbHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZW1vamlNYXAsIGVtb2ppTmFtZSwgZW1vamlVcmwgfSBmcm9tICcuLi8uLi91dGlsL2Vtb2ppLW1hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1tZXNzYWdlLXNlbmQtYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1zZW5kLWJveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS1zZW5kLWJveC5jb21wb25lbnQubGVzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VuZEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBhY3RpdmU6IGJvb2xlYW47XHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIGVtb2ppTmFtZSA9IGVtb2ppTmFtZTtcclxuICBlbW9qaVVybCA9IGVtb2ppVXJsO1xyXG4gIGVtb2ppTWFwID0gZW1vamlNYXA7XHJcbiAgZm9jdXMgPSBmYWxzZTtcclxuICAvLyDmtojmga/lhoXlrrlcclxuICBtZXNzYWdlQ29udGVudCA9ICcnO1xyXG5cclxuICB0b0FjY291bnQ6IGFueTtcclxuICBjdXJyZW50Q29udmVyc2F0aW9uVHlwZTogYW55O1xyXG4gIGN1cnJlbnRDb252ZXJzYXRpb246IGFueTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnaW1hZ2VQaWNrZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgaW1hZ2VQaWNrZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmlsZVBpY2tlcicsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlUGlja2VyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIHRleHRJbnB1dDogRWxlbWVudFJlZjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHRpbUhlbHBlclNlcnZpY2U6IFRpbUhlbHBlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlRWRpdE1lc3NhZ2U6IFJlRWRpdE1lc3NhZ2VTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0b3JlLnNlbGVjdChjdXJyZW50Q29udmVyc2F0aW9uU2VsZWN0b3IpLnN1YnNjcmliZShjdXJyZW50Q29udmVyc2F0aW9uID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uID0gY3VycmVudENvbnZlcnNhdGlvbjtcclxuICAgICAgaWYgKCFjdXJyZW50Q29udmVyc2F0aW9uIHx8ICFjdXJyZW50Q29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklEKSB7XHJcbiAgICAgICAgdGhpcy50b0FjY291bnQgPSAnJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRDb252ZXJzYXRpb24udHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAnQzJDJzpcclxuICAgICAgICAgICAgdGhpcy50b0FjY291bnQgPSBjdXJyZW50Q29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklELnJlcGxhY2UoJ0MyQycsICcnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdHUk9VUCc6XHJcbiAgICAgICAgICAgIHRoaXMudG9BY2NvdW50ID0gY3VycmVudENvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JRC5yZXBsYWNlKCdHUk9VUCcsICcnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aGlzLnRvQWNjb3VudCA9IGN1cnJlbnRDb252ZXJzYXRpb24uY29udmVyc2F0aW9uSUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWN1cnJlbnRDb252ZXJzYXRpb24gfHwgIWN1cnJlbnRDb252ZXJzYXRpb24udHlwZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvbnZlcnNhdGlvblR5cGUgPSAnJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb25UeXBlID0gY3VycmVudENvbnZlcnNhdGlvbi50eXBlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudGV4dElucHV0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLmhhbmRsZVBhc3RlLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMucmVFZGl0TWVzc2FnZS5yZUVkaXRNZXNzYWdlLnN1YnNjcmliZSgocGF5bG9hZCkgPT4ge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VDb250ZW50ID0gcGF5bG9hZDtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25mb2N1cyhldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbmZvY3VzJyk7XHJcbiAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudENvbnZlcnNhdGlvbik7XHJcbiAgICB0aGlzLnRpbUhlbHBlclNlcnZpY2UuY2hlY2tvdXRDb252ZXJzYXRpb24odGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklEKTtcclxuICB9XHJcblxyXG4gIG9uYmx1cihldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbmJsdXInKTtcclxuICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbmRUZXh0TWVzc2FnZSgpO1xyXG4gIH1cclxuICBoYW5kbGVMaW5lKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQgKz0gJ1xcbic7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlVXA6OicsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVEb3duOjonLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBrZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoIWV2ZW50LmN0cmxLZXkgJiYgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlRW50ZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLmhhbmRsZVVwKGV2ZW50KTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLmhhbmRsZURvd24oZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGFzdGUoZTogYW55KSB7XHJcbiAgICBjb25zdCBjbGlwYm9hcmREYXRhID0gZS5jbGlwYm9hcmREYXRhO1xyXG4gICAgbGV0IGZpbGU6IGFueTtcclxuICAgIGlmIChjbGlwYm9hcmREYXRhICYmIGNsaXBib2FyZERhdGEuZmlsZXMgJiYgY2xpcGJvYXJkRGF0YS5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZpbGUgPSBjbGlwYm9hcmREYXRhLmZpbGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgZmlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gMS4g5Yib5bu65raI5oGv5a6e5L6L77yM5o6l5Y+j6L+U5Zue55qE5a6e5L6L5Y+v5Lul5LiK5bGPXHJcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy50aW1IZWxwZXJTZXJ2aWNlLnRpbS5jcmVhdGVJbWFnZU1lc3NhZ2Uoe1xyXG4gICAgICB0bzogdGhpcy50b0FjY291bnQsXHJcbiAgICAgIGNvbnZlcnNhdGlvblR5cGU6IHRoaXMuY3VycmVudENvbnZlcnNhdGlvblR5cGUsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBmaWxlLFxyXG4gICAgICB9LFxyXG4gICAgICBvblByb2dyZXNzOiAocGVyY2VudCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UucHJvZ3Jlc3MgPSBwZXJjZW50OyAvLyDmiYvliqjnu5ltZXNzYWdlIOWunuS+i+WKoOS4quWTjeW6lOW8j+WxnuaApzogcHJvZ3Jlc3NcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDIuIOWPkemAgea2iOaBr1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMudGltSGVscGVyU2VydmljZS50aW0uc2VuZE1lc3NhZ2UobWVzc2FnZSkudGhlbihyZXMgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHB1c2hDdXJyZW50TWVzc2FnZUxpc3RBY3Rpb24oeyBtZXNzYWdlIH0pKTtcclxuICAgIH0pO1xyXG4gICAgcHJvbWlzZS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignW3NlbmRNZXNzYWdlIGVycm9yXTo6JywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZW5kSW1hZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ3NlbmRJbWFnZScpO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMudGltSGVscGVyU2VydmljZS50aW0uY3JlYXRlSW1hZ2VNZXNzYWdlKHtcclxuICAgICAgdG86IHRoaXMudG9BY2NvdW50LFxyXG4gICAgICBjb252ZXJzYXRpb25UeXBlOiB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb25UeXBlLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgZmlsZTogdGhpcy5pbWFnZVBpY2tlci5uYXRpdmVFbGVtZW50IC8vIOaIluiAheeUqGV2ZW50LnRhcmdldFxyXG4gICAgICB9LFxyXG4gICAgICBvblByb2dyZXNzOiAocGVyY2VudCkgPT4ge1xyXG4gICAgICAgIC8vIOaJi+WKqOe7mW1lc3NhZ2Ug5a6e5L6L5Yqg5Liq5ZON5bqU5byP5bGe5oCnOiBwcm9ncmVzc1xyXG4gICAgICAgIG1lc3NhZ2UucHJvZ3Jlc3MgPSBwZXJjZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwZXJjZW50OicsIHBlcmNlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRpbUhlbHBlclNlcnZpY2UudGltXHJcbiAgICAgIC5zZW5kTWVzc2FnZShtZXNzYWdlKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Y+R6YCB5oiQ5YqfJywgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChwdXNoQ3VycmVudE1lc3NhZ2VMaXN0QWN0aW9uKHsgbWVzc2FnZTogT2JqZWN0LmFzc2lnbih7fSwgZGF0YS5tZXNzYWdlKSB9KSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZVBpY2tlci5uYXRpdmVFbGVtZW50LnZhbHVlID0gbnVsbDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGltRXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ltRXJyb3I6OicsIGltRXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbmRGaWxlKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnRpbUhlbHBlclNlcnZpY2UudGltLmNyZWF0ZUZpbGVNZXNzYWdlKHtcclxuICAgICAgdG86IHRoaXMudG9BY2NvdW50LFxyXG4gICAgICBjb252ZXJzYXRpb25UeXBlOiB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb25UeXBlLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgZmlsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVQaWNrZXInKSwgLy8g5oiW6ICF55SoZXZlbnQudGFyZ2V0XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uUHJvZ3Jlc3M6IChwZXJjZW50KSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5wcm9ncmVzcyA9IHBlcmNlbnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+S4iuS8oOi/m+W6picsIHBlcmNlbnQpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50aW1IZWxwZXJTZXJ2aWNlLnRpbVxyXG4gICAgICAuc2VuZE1lc3NhZ2UobWVzc2FnZSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChwdXNoQ3VycmVudE1lc3NhZ2VMaXN0QWN0aW9uKHsgbWVzc2FnZTogT2JqZWN0LmFzc2lnbih7fSwgZGF0YS5tZXNzYWdlKSB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsZVBpY2tlci5uYXRpdmVFbGVtZW50LnZhbHVlID0gbnVsbDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChpbUVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignaW1FcnJvcjo6JywgaW1FcnJvcik7XHJcblxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNob29zZUVtb2ppKGl0ZW06IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICB0aGlzLm1lc3NhZ2VDb250ZW50ICs9IGl0ZW07XHJcbiAgfVxyXG5cclxuICBzZW5kVGV4dE1lc3NhZ2UoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQgPT09ICcnIHx8XHJcbiAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQudHJpbSgpLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUNvbnRlbnQgPSAnJztcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzaG93QWN0aW9uKHsgbXNnVHlwZTogTUVTU0FHRV9TVEFUVVMud2FybmluZywgbWVzc2FnZTogJ+S4jeiDveWPkemAgeepuua2iOaBr+WTpu+8gScgfSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy50aW1IZWxwZXJTZXJ2aWNlLnRpbS5jcmVhdGVUZXh0TWVzc2FnZSh7XHJcbiAgICAgIHRvOiB0aGlzLnRvQWNjb3VudCxcclxuICAgICAgY29udmVyc2F0aW9uVHlwZTogdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uVHlwZSxcclxuICAgICAgcGF5bG9hZDogeyB0ZXh0OiB0aGlzLm1lc3NhZ2VDb250ZW50IH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChwdXNoQ3VycmVudE1lc3NhZ2VMaXN0QWN0aW9uKHsgbWVzc2FnZSB9KSk7XHJcbiAgICB0aGlzLnRpbUhlbHBlclNlcnZpY2UuZXZlbnRCdXMkLm5leHQoJ3Njcm9sbC1ib3R0b20nKTtcclxuICAgIHRoaXMudGltSGVscGVyU2VydmljZS50aW0uc2VuZE1lc3NhZ2UobWVzc2FnZSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdbc2VuZE1lc3NhZ2UgZXJyb3JdOjonLCBlcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm1lc3NhZ2VDb250ZW50ID0gJyc7XHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VuZEltYWdlQ2xpY2soaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGV2ZW50OiBFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgaW5wdXQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbmRGaWxlQ2xpY2soaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgIGlucHV0LmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGV4dElucHV0Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLmhhbmRsZVBhc3RlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1lc3NhZ2Utc2VuZC1ib3gtd3JhcHBlclwiIFtuZ0NsYXNzXT1cInsnd2hpdGUtYmFja2dyb3VuZCc6IGZvY3VzfVwiXHJcbiAgKGZvY3VzKT1cIm9uZm9jdXMoJGV2ZW50KVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJzZW5kLWhlYWRlci1iYXJcIj5cclxuXHJcbiAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAjaW1hZ2VQaWNrZXIgYWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmcsIC5naWZcIiAoY2hhbmdlKT1cInNlbmRJbWFnZSgkZXZlbnQpXCJcclxuICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCIgLz5cclxuXHJcbiAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAjZmlsZVBpY2tlciAoY2hhbmdlKT1cInNlbmRGaWxlKCRldmVudClcIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgICAgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiAvPlxyXG5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwibWVoXCIgbnpUaGVtZT1cIm91dGxpbmVcIiB0aXRsZT1cIuWPkeihqOaDhVwiIG56LXBvcG92ZXIgbnpQb3BvdmVyVGl0bGU9XCJUaXRsZVwiXHJcbiAgICAgIFsobnpQb3BvdmVyVmlzaWJsZSldPVwidmlzaWJsZVwiIG56UG9wb3ZlclRyaWdnZXI9XCJjbGlja1wiIFtuelBvcG92ZXJDb250ZW50XT1cImNvbnRlbnRUZW1wbGF0ZVwiXHJcbiAgICAgIFtuelBvcG92ZXJUaXRsZV09XCIn6KGo5oOFJ1wiPjwvaT5cclxuXHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cInBpY3R1cmVcIiBuelRoZW1lPVwib3V0bGluZVwiIHRpdGxlPVwi5Y+R5Zu+54mHXCJcclxuICAgICAgKGNsaWNrKT1cImhhbmRsZVNlbmRJbWFnZUNsaWNrKGltYWdlUGlja2VyLCRldmVudClcIj48L2k+XHJcblxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJmb2xkZXJcIiBuelRoZW1lPVwib3V0bGluZVwiIHRpdGxlPVwi5Y+R5paH5Lu2XCJcclxuICAgICAgKGNsaWNrKT1cImhhbmRsZVNlbmRGaWxlQ2xpY2soZmlsZVBpY2tlcilcIj48L2k+XHJcblxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cclxuICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIHJlc2l6ZT1cImZhbHNlXCIgY2xhc3M9XCJ0ZXh0LWlucHV0XCIgI3RleHRJbnB1dCBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VDb250ZW50XCJcclxuICAgICAgKGZvY3VzKT1cIm9uZm9jdXMoJGV2ZW50KVwiIChibHVyKT1cIm9uYmx1cigkZXZlbnQpXCIgKGtleWRvd24pPVwia2V5RG93bigkZXZlbnQpXCJcclxuICAgICAgKGtleXVwKT1cImhhbmRsZUxpbmUoJGV2ZW50KVwiPlxyXG4gICAgPC90ZXh0YXJlYT5cclxuICAgIDxkaXYgY2xhc3M9XCJidG4tc2VuZFwiIChjbGljayk9XCJzZW5kVGV4dE1lc3NhZ2UoKVwiPlxyXG4gICAgICA8YnV0dG9uIG56VG9vbHRpcFRpdGxlPVwi5oyJRW50ZXLlj5HpgIHmtojmga/vvIxDdHJsK0VudGVy5o2i6KGMXCIgbnpUb29sdGlwUGxhY2VtZW50PVwibGVmdFwiIG56LWJ1dHRvblxyXG4gICAgICAgIG56LXRvb2x0aXAgY2xhc3M9XCJ0aW0taWNvbi1zZW5kXCI+5Y+R6YCBPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZW1vamlzXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6ICc0MDBweCd9XCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGVtb2ppTmFtZVwiIGNsYXNzPVwiZW1vamlcIiAoY2xpY2spPVwiY2hvb3NlRW1vamkoaXRlbSlcIj5cclxuICAgICAgPGltZyBbc3JjXT1cImVtb2ppVXJsICsgZW1vamlNYXBbaXRlbV1cIiBzdHlsZT1cIndpZHRoOjMwcHg7aGVpZ2h0OjMwcHhcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==