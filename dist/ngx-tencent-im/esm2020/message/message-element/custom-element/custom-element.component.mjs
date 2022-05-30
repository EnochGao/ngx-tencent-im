import { Component, Input } from '@angular/core';
import { formatDuration } from '../../../util/format-duration';
import { ACTION } from '../../../util/trtc-custom-message-map';
import * as i0 from "@angular/core";
import * as i1 from "../../message-bubble/message-bubble.component";
import * as i2 from "@angular/common";
export class CustomElementComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.text = this.translateCustomMessage(this.payload);
    }
    translateCustomMessage(payload) {
        let videoPayload = {
            action: 0,
            duration: 0
        };
        try {
            videoPayload = JSON.parse(payload.data);
        }
        catch (e) {
            videoPayload = {
                action: 0,
                duration: 0
            };
        }
        if (payload.data === 'group_create') {
            return `${payload.extension}`;
        }
        switch (videoPayload.action) {
            case ACTION.VIDEO_CALL_ACTION_DIALING:
                return '[请求通话]';
            case ACTION.VIDEO_CALL_ACTION_SPONSOR_CANCEL:
                return '[取消通话]';
            case ACTION.VIDEO_CALL_ACTION_REJECT:
                return '[拒绝通话]';
            case ACTION.VIDEO_CALL_ACTION_SPONSOR_TIMEOUT:
                return '[无应答]';
            case ACTION.VIDEO_CALL_ACTION_ACCEPTED:
                return '[开始通话]';
            case ACTION.VIDEO_CALL_ACTION_HANGUP:
                return `[结束通话，通话时长：${formatDuration(videoPayload.duration)}]`;
            case ACTION.VIDEO_CALL_ACTION_LINE_BUSY:
                return '[正在通话中]';
            case ACTION.VIDEO_CALL_ACTION_ERROR:
                return '[设备异常]';
            default:
                return '[自定义消息]';
        }
    }
}
CustomElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CustomElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: CustomElementComponent, selector: "app-custom-element", inputs: { message: "message", isMine: "isMine", payload: "payload" }, usesOnChanges: true, ngImport: i0, template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <div class=\"custom-element-wrapper\">\r\n    <div class=\"survey\" *ngIf=\"this.payload.data === 'survey';else other\">\r\n      <div class=\"title\">\u5BF9IM DEMO\u7684\u8BC4\u5206\u548C\u5EFA\u8BAE</div>\r\n      <!-- <el-rate v-model=\"rate\" disabled show-score text-color=\"#ff9900\" score-template=\"{value}\">\r\n      </el-rate> -->\r\n      <div class=\"suggestion\">{{this.payload.extension}}</div>\r\n    </div>\r\n    <ng-template #other>\r\n      <span class=\"text\" title=\"\u60A8\u53EF\u4EE5\u81EA\u884C\u89E3\u6790\u81EA\u5B9A\u4E49\u6D88\u606F\">{{text}}</span>\r\n    </ng-template>\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".text{font-weight:700}.title{font-size:16px;font-weight:600;padding-bottom:10px}.survey{background-color:#fff;color:#000;padding:20px;display:flex;flex-direction:column}.suggestion{padding-top:10px;font-size:14px}\n"], components: [{ type: i1.MessageBubbleComponent, selector: "app-message-bubble", inputs: ["message", "isMine", "isNew"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: CustomElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-custom-element', template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <div class=\"custom-element-wrapper\">\r\n    <div class=\"survey\" *ngIf=\"this.payload.data === 'survey';else other\">\r\n      <div class=\"title\">\u5BF9IM DEMO\u7684\u8BC4\u5206\u548C\u5EFA\u8BAE</div>\r\n      <!-- <el-rate v-model=\"rate\" disabled show-score text-color=\"#ff9900\" score-template=\"{value}\">\r\n      </el-rate> -->\r\n      <div class=\"suggestion\">{{this.payload.extension}}</div>\r\n    </div>\r\n    <ng-template #other>\r\n      <span class=\"text\" title=\"\u60A8\u53EF\u4EE5\u81EA\u884C\u89E3\u6790\u81EA\u5B9A\u4E49\u6D88\u606F\">{{text}}</span>\r\n    </ng-template>\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".text{font-weight:700}.title{font-size:16px;font-weight:600;padding-bottom:10px}.survey{background-color:#fff;color:#000;padding:20px;display:flex;flex-direction:column}.suggestion{padding-top:10px;font-size:14px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], payload: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1lbGVtZW50L2N1c3RvbS1lbGVtZW50L2N1c3RvbS1lbGVtZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9tZXNzYWdlL21lc3NhZ2UtZWxlbWVudC9jdXN0b20tZWxlbWVudC9jdXN0b20tZWxlbWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFFbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQVEvRCxNQUFNLE9BQU8sc0JBQXNCO0lBTWpDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsT0FBTztRQUM1QixJQUFJLFlBQVksR0FBRztZQUNqQixNQUFNLEVBQUUsQ0FBQztZQUNULFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUNGLElBQUk7WUFDRixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLFlBQVksR0FBRztnQkFDYixNQUFNLEVBQUUsQ0FBQztnQkFDVCxRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUM7U0FDSDtRQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxjQUFjLEVBQUU7WUFDbkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMvQjtRQUNELFFBQVEsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUMzQixLQUFLLE1BQU0sQ0FBQyx5QkFBeUI7Z0JBQ25DLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLEtBQUssTUFBTSxDQUFDLGdDQUFnQztnQkFDMUMsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxNQUFNLENBQUMsd0JBQXdCO2dCQUNsQyxPQUFPLFFBQVEsQ0FBQztZQUNsQixLQUFLLE1BQU0sQ0FBQyxpQ0FBaUM7Z0JBQzNDLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLEtBQUssTUFBTSxDQUFDLDBCQUEwQjtnQkFDcEMsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxNQUFNLENBQUMsd0JBQXdCO2dCQUNsQyxPQUFPLGNBQWMsY0FBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ2hFLEtBQUssTUFBTSxDQUFDLDJCQUEyQjtnQkFDckMsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxNQUFNLENBQUMsdUJBQXVCO2dCQUNqQyxPQUFPLFFBQVEsQ0FBQztZQUNsQjtnQkFDRSxPQUFPLFNBQVMsQ0FBQztTQUNwQjtJQUNILENBQUM7O21IQW5EVSxzQkFBc0I7dUdBQXRCLHNCQUFzQixxSkNYbkMseXNCQWFBOzJGREZhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxvQkFBb0I7MEVBS3JCLE9BQU87c0JBQWYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ3RpbS1qcy1zZGsnO1xyXG5pbXBvcnQgeyBmb3JtYXREdXJhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvZm9ybWF0LWR1cmF0aW9uJztcclxuaW1wb3J0IHsgQUNUSU9OIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC90cnRjLWN1c3RvbS1tZXNzYWdlLW1hcCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tLWVsZW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tZWxlbWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWVsZW1lbnQuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tRWxlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xyXG4gIEBJbnB1dCgpIGlzTWluZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwYXlsb2FkOiBhbnk7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMudHJhbnNsYXRlQ3VzdG9tTWVzc2FnZSh0aGlzLnBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNsYXRlQ3VzdG9tTWVzc2FnZShwYXlsb2FkKSB7XHJcbiAgICBsZXQgdmlkZW9QYXlsb2FkID0ge1xyXG4gICAgICBhY3Rpb246IDAsXHJcbiAgICAgIGR1cmF0aW9uOiAwXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmlkZW9QYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB2aWRlb1BheWxvYWQgPSB7XHJcbiAgICAgICAgYWN0aW9uOiAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAwXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAocGF5bG9hZC5kYXRhID09PSAnZ3JvdXBfY3JlYXRlJykge1xyXG4gICAgICByZXR1cm4gYCR7cGF5bG9hZC5leHRlbnNpb259YDtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodmlkZW9QYXlsb2FkLmFjdGlvbikge1xyXG4gICAgICBjYXNlIEFDVElPTi5WSURFT19DQUxMX0FDVElPTl9ESUFMSU5HOlxyXG4gICAgICAgIHJldHVybiAnW+ivt+axgumAmuivnV0nO1xyXG4gICAgICBjYXNlIEFDVElPTi5WSURFT19DQUxMX0FDVElPTl9TUE9OU09SX0NBTkNFTDpcclxuICAgICAgICByZXR1cm4gJ1vlj5bmtojpgJror51dJztcclxuICAgICAgY2FzZSBBQ1RJT04uVklERU9fQ0FMTF9BQ1RJT05fUkVKRUNUOlxyXG4gICAgICAgIHJldHVybiAnW+aLkue7nemAmuivnV0nO1xyXG4gICAgICBjYXNlIEFDVElPTi5WSURFT19DQUxMX0FDVElPTl9TUE9OU09SX1RJTUVPVVQ6XHJcbiAgICAgICAgcmV0dXJuICdb5peg5bqU562UXSc7XHJcbiAgICAgIGNhc2UgQUNUSU9OLlZJREVPX0NBTExfQUNUSU9OX0FDQ0VQVEVEOlxyXG4gICAgICAgIHJldHVybiAnW+W8gOWni+mAmuivnV0nO1xyXG4gICAgICBjYXNlIEFDVElPTi5WSURFT19DQUxMX0FDVElPTl9IQU5HVVA6XHJcbiAgICAgICAgcmV0dXJuIGBb57uT5p2f6YCa6K+d77yM6YCa6K+d5pe26ZW/77yaJHtmb3JtYXREdXJhdGlvbih2aWRlb1BheWxvYWQuZHVyYXRpb24pfV1gO1xyXG4gICAgICBjYXNlIEFDVElPTi5WSURFT19DQUxMX0FDVElPTl9MSU5FX0JVU1k6XHJcbiAgICAgICAgcmV0dXJuICdb5q2j5Zyo6YCa6K+d5LitXSc7XHJcbiAgICAgIGNhc2UgQUNUSU9OLlZJREVPX0NBTExfQUNUSU9OX0VSUk9SOlxyXG4gICAgICAgIHJldHVybiAnW+iuvuWkh+W8guW4uF0nO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnW+iHquWumuS5iea2iOaBr10nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8YXBwLW1lc3NhZ2UtYnViYmxlIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiBbaXNNaW5lXT1cImlzTWluZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjdXN0b20tZWxlbWVudC13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3VydmV5XCIgKm5nSWY9XCJ0aGlzLnBheWxvYWQuZGF0YSA9PT0gJ3N1cnZleSc7ZWxzZSBvdGhlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7lr7lJTSBERU1P55qE6K+E5YiG5ZKM5bu66K6uPC9kaXY+XHJcbiAgICAgIDwhLS0gPGVsLXJhdGUgdi1tb2RlbD1cInJhdGVcIiBkaXNhYmxlZCBzaG93LXNjb3JlIHRleHQtY29sb3I9XCIjZmY5OTAwXCIgc2NvcmUtdGVtcGxhdGU9XCJ7dmFsdWV9XCI+XHJcbiAgICAgIDwvZWwtcmF0ZT4gLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdWdnZXN0aW9uXCI+e3t0aGlzLnBheWxvYWQuZXh0ZW5zaW9ufX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLXRlbXBsYXRlICNvdGhlcj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgdGl0bGU9XCLmgqjlj6/ku6Xoh6rooYzop6PmnpDoh6rlrprkuYnmtojmga9cIj57e3RleHR9fTwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbjwvYXBwLW1lc3NhZ2UtYnViYmxlPlxyXG4iXX0=