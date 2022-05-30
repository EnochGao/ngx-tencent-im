import { Component, Input } from '@angular/core';
import { getFullDate } from '../../util/date';
import TIM from 'tim-js-sdk';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class MessageHeaderComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    get isMine() {
        return this.message.flow === 'out';
    }
    get date() {
        return getFullDate(new Date(this.message.time * 1000));
    }
    get from() {
        const isC2C = this.currentConversation.type === TIM.TYPES.CONV_C2C;
        // 自己发送的用昵称渲染
        if (this.isMine) {
            return this.currentUserProfile.nick || this.currentUserProfile.userID;
        }
        // 1. C2C 的消息体中还无 nick / avatar 字段，需从 conversation.userProfile 中获取
        if (isC2C) {
            return this.currentConversation.userProfile.nick || this.currentConversation.userProfile.userID;
        }
        else if (this.currentConversation.type === TIM.TYPES.CONV_SYSTEM) {
            return this.message.type === TIM.TYPES.MSG_GRP_SYS_NOTICE ? '群系统通知' : '系统通知';
        }
        // 2. 群组消息，用消息体中的 nick 渲染。nameCard暂时支持不完善
        return this.message.nick || this.message.from;
    }
}
MessageHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageHeaderComponent, deps: [{ token: i1.Store }], target: i0.ɵɵFactoryTarget.Component });
MessageHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageHeaderComponent, selector: "app-message-header", inputs: { message: "message", currentUserProfile: "currentUserProfile", currentConversation: "currentConversation" }, ngImport: i0, template: "<div class=\"base\" [class]=\"[ isMine ? 'right' : 'left']\">\r\n  <div class=\"name text-ellipsis\">{{ from }}</div>\r\n  <div class=\"date\">{{ date }}</div>\r\n</div>\r\n", styles: [".right{display:flex;flex-direction:row-reverse}.left{display:flex;flex-direction:row}.base{color:#a5b5c1;font-size:12px}.name{padding:0 4px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-header', template: "<div class=\"base\" [class]=\"[ isMine ? 'right' : 'left']\">\r\n  <div class=\"name text-ellipsis\">{{ from }}</div>\r\n  <div class=\"date\">{{ date }}</div>\r\n</div>\r\n", styles: [".right{display:flex;flex-direction:row-reverse}.left{display:flex;flex-direction:row}.base{color:#a5b5c1;font-size:12px}.name{padding:0 4px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }]; }, propDecorators: { message: [{
                type: Input
            }], currentUserProfile: [{
                type: Input
            }], currentConversation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1oZWFkZXIvbWVzc2FnZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1oZWFkZXIvbWVzc2FnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sR0FBRyxNQUFNLFlBQVksQ0FBQzs7O0FBTzdCLE1BQU0sT0FBTyxzQkFBc0I7SUFLakMsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBSSxDQUFDO0lBRXJDLFFBQVE7SUFDUixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDbkUsYUFBYTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1NBQ3ZFO1FBQ0Qsa0VBQWtFO1FBQ2xFLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUNqRzthQUFNLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUNsRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQzlFO1FBQ0QseUNBQXlDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDaEQsQ0FBQzs7bUhBaENVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLGdMQ1huQywrS0FJQTsyRkRPYSxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0Usb0JBQW9COzRGQUtyQixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgQ29udmVyc2F0aW9uLCBNZXNzYWdlLCBQcm9maWxlIH0gZnJvbSAndGltLWpzLXNkayc7XHJcbmltcG9ydCB7IGdldEZ1bGxEYXRlIH0gZnJvbSAnLi4vLi4vdXRpbC9kYXRlJztcclxuaW1wb3J0IFRJTSBmcm9tICd0aW0tanMtc2RrJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW1lc3NhZ2UtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UtaGVhZGVyLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgQElucHV0KCkgY3VycmVudFVzZXJQcm9maWxlOiBQcm9maWxlO1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRDb252ZXJzYXRpb246IENvbnZlcnNhdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGdldCBpc01pbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlLmZsb3cgPT09ICdvdXQnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGUoKSB7XHJcbiAgICByZXR1cm4gZ2V0RnVsbERhdGUobmV3IERhdGUodGhpcy5tZXNzYWdlLnRpbWUgKiAxMDAwKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZnJvbSgpIHtcclxuICAgIGNvbnN0IGlzQzJDID0gdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLnR5cGUgPT09IFRJTS5UWVBFUy5DT05WX0MyQztcclxuICAgIC8vIOiHquW3seWPkemAgeeahOeUqOaYteensOa4suafk1xyXG4gICAgaWYgKHRoaXMuaXNNaW5lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyUHJvZmlsZS5uaWNrIHx8IHRoaXMuY3VycmVudFVzZXJQcm9maWxlLnVzZXJJRDtcclxuICAgIH1cclxuICAgIC8vIDEuIEMyQyDnmoTmtojmga/kvZPkuK3ov5jml6AgbmljayAvIGF2YXRhciDlrZfmrrXvvIzpnIDku44gY29udmVyc2F0aW9uLnVzZXJQcm9maWxlIOS4reiOt+WPllxyXG4gICAgaWYgKGlzQzJDKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24udXNlclByb2ZpbGUubmljayB8fCB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24udXNlclByb2ZpbGUudXNlcklEO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24udHlwZSA9PT0gVElNLlRZUEVTLkNPTlZfU1lTVEVNKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2UudHlwZSA9PT0gVElNLlRZUEVTLk1TR19HUlBfU1lTX05PVElDRSA/ICfnvqTns7vnu5/pgJrnn6UnIDogJ+ezu+e7n+mAmuefpSc7XHJcbiAgICB9XHJcbiAgICAvLyAyLiDnvqTnu4Tmtojmga/vvIznlKjmtojmga/kvZPkuK3nmoQgbmljayDmuLLmn5PjgIJuYW1lQ2FyZOaaguaXtuaUr+aMgeS4jeWujOWWhFxyXG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZS5uaWNrIHx8IHRoaXMubWVzc2FnZS5mcm9tO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImJhc2VcIiBbY2xhc3NdPVwiWyBpc01pbmUgPyAncmlnaHQnIDogJ2xlZnQnXVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuYW1lIHRleHQtZWxsaXBzaXNcIj57eyBmcm9tIH19PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImRhdGVcIj57eyBkYXRlIH19PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=