import { Component, Input } from '@angular/core';
import TIM from 'tim-js-sdk';
import * as i0 from "@angular/core";
export class GroupTipElementComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.text = this.getGroupTipContent(this.message);
    }
    getGroupTipContent(message) {
        const userName = message.nick || message.payload.userIDList.join(',');
        switch (message.payload.operationType) {
            case TIM.TYPES.GRP_TIP_MBR_JOIN:
                return `群成员：${userName} 加入群组`;
            case TIM.TYPES.GRP_TIP_MBR_QUIT:
                return `群成员：${userName} 退出群组`;
            case TIM.TYPES.GRP_TIP_MBR_KICKED_OUT:
                return `群成员：${userName} 被${message.payload.operatorID}踢出群组`;
            case TIM.TYPES.GRP_TIP_MBR_SET_ADMIN:
                return `群成员：${userName} 成为管理员`;
            case TIM.TYPES.GRP_TIP_MBR_CANCELED_ADMIN:
                return `群成员：${userName} 被撤销管理员`;
            case TIM.TYPES.GRP_TIP_GRP_PROFILE_UPDATED:
                return '群资料修改';
            case TIM.TYPES.GRP_TIP_MBR_PROFILE_UPDATED:
                for (let member of message.payload.memberList) {
                    if (member.muteTime > 0) {
                        return `群成员：${member.userID}被禁言${member.muteTime}秒`;
                    }
                    else {
                        return `群成员：${member.userID}被取消禁言`;
                    }
                }
                break;
            default:
                return '[群提示消息]';
        }
    }
}
GroupTipElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupTipElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GroupTipElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupTipElementComponent, selector: "app-group-tip-element", inputs: { message: "message", isMine: "isMine", payload: "payload" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"group-tip-element-wrapper\">{{text}}</div>\r\n", styles: [".group-tip-element-wrapper{background:#fff;padding:4px 15px;border-radius:3px;color:#a5b5c1;font-size:12px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupTipElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-tip-element', template: "<div class=\"group-tip-element-wrapper\">{{text}}</div>\r\n", styles: [".group-tip-element-wrapper{background:#fff;padding:4px 15px;border-radius:3px;color:#a5b5c1;font-size:12px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], payload: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtdGlwLWVsZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1lbGVtZW50L2dyb3VwLXRpcC1lbGVtZW50L2dyb3VwLXRpcC1lbGVtZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9tZXNzYWdlL21lc3NhZ2UtZWxlbWVudC9ncm91cC10aXAtZWxlbWVudC9ncm91cC10aXAtZWxlbWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFHbkYsT0FBTyxHQUFHLE1BQU0sWUFBWSxDQUFDOztBQU83QixNQUFNLE9BQU8sd0JBQXdCO0lBT25DLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsT0FBZ0I7UUFDakMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEUsUUFBUSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUNyQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO2dCQUM3QixPQUFPLE9BQU8sUUFBUSxPQUFPLENBQUM7WUFDaEMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQjtnQkFDN0IsT0FBTyxPQUFPLFFBQVEsT0FBTyxDQUFDO1lBQ2hDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0I7Z0JBQ25DLE9BQU8sT0FBTyxRQUFRLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE1BQU0sQ0FBQztZQUM5RCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCO2dCQUNsQyxPQUFPLE9BQU8sUUFBUSxRQUFRLENBQUM7WUFDakMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLDBCQUEwQjtnQkFDdkMsT0FBTyxPQUFPLFFBQVEsU0FBUyxDQUFDO1lBQ2xDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkI7Z0JBQ3hDLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkI7Z0JBQ3hDLEtBQUssSUFBSSxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7b0JBQzdDLElBQUksTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7d0JBQ3ZCLE9BQU8sT0FBTyxNQUFNLENBQUMsTUFBTSxNQUFNLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQztxQkFDckQ7eUJBQU07d0JBQ0wsT0FBTyxPQUFPLE1BQU0sQ0FBQyxNQUFNLE9BQU8sQ0FBQztxQkFDcEM7aUJBQ0Y7Z0JBQ0QsTUFBTTtZQUNSO2dCQUNFLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7cUhBM0NVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLHdKQ1ZyQyw2REFDQTsyRkRTYSx3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0UsdUJBQXVCOzBFQUt4QixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICd0aW0tanMtc2RrJztcclxuXHJcbmltcG9ydCBUSU0gZnJvbSAndGltLWpzLXNkayc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ncm91cC10aXAtZWxlbWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyb3VwLXRpcC1lbGVtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ncm91cC10aXAtZWxlbWVudC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cFRpcEVsZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcclxuICBASW5wdXQoKSBpc01pbmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcGF5bG9hZDogYW55O1xyXG5cclxuICB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5nZXRHcm91cFRpcENvbnRlbnQodGhpcy5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGdldEdyb3VwVGlwQ29udGVudChtZXNzYWdlOiBNZXNzYWdlKSB7XHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IG1lc3NhZ2UubmljayB8fCBtZXNzYWdlLnBheWxvYWQudXNlcklETGlzdC5qb2luKCcsJyk7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UucGF5bG9hZC5vcGVyYXRpb25UeXBlKSB7XHJcbiAgICAgIGNhc2UgVElNLlRZUEVTLkdSUF9USVBfTUJSX0pPSU46XHJcbiAgICAgICAgcmV0dXJuIGDnvqTmiJDlkZjvvJoke3VzZXJOYW1lfSDliqDlhaXnvqTnu4RgO1xyXG4gICAgICBjYXNlIFRJTS5UWVBFUy5HUlBfVElQX01CUl9RVUlUOlxyXG4gICAgICAgIHJldHVybiBg576k5oiQ5ZGY77yaJHt1c2VyTmFtZX0g6YCA5Ye6576k57uEYDtcclxuICAgICAgY2FzZSBUSU0uVFlQRVMuR1JQX1RJUF9NQlJfS0lDS0VEX09VVDpcclxuICAgICAgICByZXR1cm4gYOe+pOaIkOWRmO+8miR7dXNlck5hbWV9IOiiqyR7bWVzc2FnZS5wYXlsb2FkLm9wZXJhdG9ySUR96Lii5Ye6576k57uEYDtcclxuICAgICAgY2FzZSBUSU0uVFlQRVMuR1JQX1RJUF9NQlJfU0VUX0FETUlOOlxyXG4gICAgICAgIHJldHVybiBg576k5oiQ5ZGY77yaJHt1c2VyTmFtZX0g5oiQ5Li6566h55CG5ZGYYDtcclxuICAgICAgY2FzZSBUSU0uVFlQRVMuR1JQX1RJUF9NQlJfQ0FOQ0VMRURfQURNSU46XHJcbiAgICAgICAgcmV0dXJuIGDnvqTmiJDlkZjvvJoke3VzZXJOYW1lfSDooqvmkqTplIDnrqHnkIblkZhgO1xyXG4gICAgICBjYXNlIFRJTS5UWVBFUy5HUlBfVElQX0dSUF9QUk9GSUxFX1VQREFURUQ6XHJcbiAgICAgICAgcmV0dXJuICfnvqTotYTmlpnkv67mlLknO1xyXG4gICAgICBjYXNlIFRJTS5UWVBFUy5HUlBfVElQX01CUl9QUk9GSUxFX1VQREFURUQ6XHJcbiAgICAgICAgZm9yIChsZXQgbWVtYmVyIG9mIG1lc3NhZ2UucGF5bG9hZC5tZW1iZXJMaXN0KSB7XHJcbiAgICAgICAgICBpZiAobWVtYmVyLm11dGVUaW1lID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYOe+pOaIkOWRmO+8miR7bWVtYmVyLnVzZXJJRH3ooqvnpoHoqIAke21lbWJlci5tdXRlVGltZX3np5JgO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGDnvqTmiJDlkZjvvJoke21lbWJlci51c2VySUR96KKr5Y+W5raI56aB6KiAYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdb576k5o+Q56S65raI5oGvXSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJncm91cC10aXAtZWxlbWVudC13cmFwcGVyXCI+e3t0ZXh0fX08L2Rpdj5cclxuIl19