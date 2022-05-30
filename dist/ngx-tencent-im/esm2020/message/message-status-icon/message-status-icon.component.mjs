import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../tim-helper.service";
export class MessageStatusIconComponent {
    constructor(timHelperService) {
        this.timHelperService = timHelperService;
    }
    ngOnInit() {
    }
    get messageIconClass() {
        switch (this.message.status) {
            case 'unSend':
                return 'el-icon-loading';
            case 'fail':
                return 'message-send-fail';
            default:
                return '';
        }
    }
    handleIconClick() {
        if (this.messageIconClass === 'message-send-fail') {
            this.timHelperService.tim.resendMessage(this.message).catch(imError => {
                console.error(imError.message);
            });
        }
    }
}
MessageStatusIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageStatusIconComponent, deps: [{ token: i1.TimHelperService }], target: i0.ɵɵFactoryTarget.Component });
MessageStatusIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageStatusIconComponent, selector: "app-message-status-icon", inputs: { message: "message" }, ngImport: i0, template: "<div style=\"width:16px;height:16px;\" [class]=\"messageIconClass\" (click)=\"handleIconClick()\">\r\n  {{messageIconClass==='message-send-fail'? '!':''}}</div>\r\n", styles: [".message-send-fail{margin-right:8px;background-color:#f35f5f;color:#fff;border-radius:50%;text-align:center;line-height:16px;cursor:pointer}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageStatusIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-status-icon', template: "<div style=\"width:16px;height:16px;\" [class]=\"messageIconClass\" (click)=\"handleIconClick()\">\r\n  {{messageIconClass==='message-send-fail'? '!':''}}</div>\r\n", styles: [".message-send-fail{margin-right:8px;background-color:#f35f5f;color:#fff;border-radius:50%;text-align:center;line-height:16px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TimHelperService }]; }, propDecorators: { message: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1zdGF0dXMtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvbWVzc2FnZS9tZXNzYWdlLXN0YXR1cy1pY29uL21lc3NhZ2Utc3RhdHVzLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1zdGF0dXMtaWNvbi9tZXNzYWdlLXN0YXR1cy1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFTekQsTUFBTSxPQUFPLDBCQUEwQjtJQUdyQyxZQUNVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3hDLENBQUM7SUFFTCxRQUFRO0lBQ1IsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDM0IsS0FBSyxRQUFRO2dCQUNYLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsS0FBSyxNQUFNO2dCQUNULE9BQU8sbUJBQW1CLENBQUM7WUFDN0I7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssbUJBQW1CLEVBQUU7WUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O3VIQTNCVSwwQkFBMEI7MkdBQTFCLDBCQUEwQiwrRkNUdkMsc0tBRUE7MkZET2EsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLHlCQUF5Qjt1R0FLMUIsT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICd0aW0tanMtc2RrJztcclxuaW1wb3J0IHsgVGltSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3RpbS1oZWxwZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1tZXNzYWdlLXN0YXR1cy1pY29uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1zdGF0dXMtaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS1zdGF0dXMtaWNvbi5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU3RhdHVzSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRpbUhlbHBlclNlcnZpY2U6IFRpbUhlbHBlclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGdldCBtZXNzYWdlSWNvbkNsYXNzKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLm1lc3NhZ2Uuc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgJ3VuU2VuZCc6XHJcbiAgICAgICAgcmV0dXJuICdlbC1pY29uLWxvYWRpbmcnO1xyXG4gICAgICBjYXNlICdmYWlsJzpcclxuICAgICAgICByZXR1cm4gJ21lc3NhZ2Utc2VuZC1mYWlsJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJY29uQ2xpY2soKSB7XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlSWNvbkNsYXNzID09PSAnbWVzc2FnZS1zZW5kLWZhaWwnKSB7XHJcbiAgICAgIHRoaXMudGltSGVscGVyU2VydmljZS50aW0ucmVzZW5kTWVzc2FnZSh0aGlzLm1lc3NhZ2UpLmNhdGNoKGltRXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoaW1FcnJvci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwid2lkdGg6MTZweDtoZWlnaHQ6MTZweDtcIiBbY2xhc3NdPVwibWVzc2FnZUljb25DbGFzc1wiIChjbGljayk9XCJoYW5kbGVJY29uQ2xpY2soKVwiPlxyXG4gIHt7bWVzc2FnZUljb25DbGFzcz09PSdtZXNzYWdlLXNlbmQtZmFpbCc/ICchJzonJ319PC9kaXY+XHJcbiJdfQ==