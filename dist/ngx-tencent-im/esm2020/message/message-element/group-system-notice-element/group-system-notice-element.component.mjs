import { Component, Input } from '@angular/core';
import { TIM } from '../../../shared.data';
import { translateGroupSystemNotice } from '../../../util/common';
import { ApprovalJoinGroupComponent } from './approval-join-group/approval-join-group.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
import * as i2 from "../../message-bubble/message-bubble.component";
import * as i3 from "ng-zorro-antd/button";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/core/wave";
import * as i6 from "ng-zorro-antd/core/transition-patch";
export class GroupSystemNoticeElementComponent {
    constructor(modal) {
        this.modal = modal;
        this.showDialog = false;
    }
    ngOnInit() {
        this.text = translateGroupSystemNotice(this.message);
        if (this.message.type === TIM.TYPES.MSG_GRP_SYS_NOTICE) {
            this.title = '群系统通知';
        }
        else {
            this.title = '系统通知';
        }
        this.isJoinGroupRequest = (this.payload.operationType === 1);
    }
    approval() {
        this.modal.create({
            nzTitle: `处理加群申请`,
            nzContent: ApprovalJoinGroupComponent,
            nzMaskClosable: false,
            nzFooter: null,
            nzWidth: '40%',
            nzStyle: { top: '20px' },
            nzComponentParams: {
                message: this.message
            }
        });
    }
}
GroupSystemNoticeElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupSystemNoticeElementComponent, deps: [{ token: i1.NzModalService }], target: i0.ɵɵFactoryTarget.Component });
GroupSystemNoticeElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: GroupSystemNoticeElementComponent, selector: "app-group-system-notice-element", inputs: { message: "message", payload: "payload" }, ngImport: i0, template: "<app-message-bubble [message]=\"message\" [isMine]=\"false\">\r\n  <div class=\"group-system-element-wrapper\">\r\n    {{ text }}\r\n    <button nz-button *ngIf=\"isJoinGroupRequest\" type=\"text\" (click)=\"approval()\">\u5904\u7406</button>\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".card{background:#fff;padding:12px;border-radius:5px;width:300px}.card .card-header{font-size:18px}.card .card-content{font-size:14px}\n"], components: [{ type: i2.MessageBubbleComponent, selector: "app-message-bubble", inputs: ["message", "isMine", "isNew"] }, { type: i3.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i6.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: GroupSystemNoticeElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-group-system-notice-element', template: "<app-message-bubble [message]=\"message\" [isMine]=\"false\">\r\n  <div class=\"group-system-element-wrapper\">\r\n    {{ text }}\r\n    <button nz-button *ngIf=\"isJoinGroupRequest\" type=\"text\" (click)=\"approval()\">\u5904\u7406</button>\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".card{background:#fff;padding:12px;border-radius:5px;width:300px}.card .card-header{font-size:18px}.card .card-content{font-size:14px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NzModalService }]; }, propDecorators: { message: [{
                type: Input
            }], payload: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtc3lzdGVtLW5vdGljZS1lbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9tZXNzYWdlL21lc3NhZ2UtZWxlbWVudC9ncm91cC1zeXN0ZW0tbm90aWNlLWVsZW1lbnQvZ3JvdXAtc3lzdGVtLW5vdGljZS1lbGVtZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9tZXNzYWdlL21lc3NhZ2UtZWxlbWVudC9ncm91cC1zeXN0ZW0tbm90aWNlLWVsZW1lbnQvZ3JvdXAtc3lzdGVtLW5vdGljZS1lbGVtZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7Ozs7Ozs7QUFPakcsTUFBTSxPQUFPLGlDQUFpQztJQVU1QyxZQUNVLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTi9CLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFPZixDQUFDO0lBRUwsUUFBUTtRQUVOLElBQUksQ0FBQyxJQUFJLEdBQUcsMEJBQTBCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsY0FBYyxFQUFFLEtBQUs7WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsS0FBSztZQUNkLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7WUFDeEIsaUJBQWlCLEVBQUU7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzthQUN0QjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7OzhIQXZDVSxpQ0FBaUM7a0hBQWpDLGlDQUFpQywySENaOUMsNlJBTUE7MkZETWEsaUNBQWlDO2tCQUw3QyxTQUFTOytCQUNFLGlDQUFpQztxR0FNbEMsT0FBTztzQkFBZixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IE1lc3NhZ2V9IGZyb20gJ3RpbS1qcy1zZGsnO1xuaW1wb3J0IHsgVElNIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkLmRhdGEnO1xuaW1wb3J0IHsgdHJhbnNsYXRlR3JvdXBTeXN0ZW1Ob3RpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbW1vbic7XG5pbXBvcnQgeyBBcHByb3ZhbEpvaW5Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vYXBwcm92YWwtam9pbi1ncm91cC9hcHByb3ZhbC1qb2luLWdyb3VwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ncm91cC1zeXN0ZW0tbm90aWNlLWVsZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JvdXAtc3lzdGVtLW5vdGljZS1lbGVtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JvdXAtc3lzdGVtLW5vdGljZS1lbGVtZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBTeXN0ZW1Ob3RpY2VFbGVtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtZXNzYWdlOiBNZXNzYWdlO1xuICBASW5wdXQoKSBwYXlsb2FkOiBhbnk7XG5cbiAgc2hvd0RpYWxvZyA9IGZhbHNlO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGlzSm9pbkdyb3VwUmVxdWVzdDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsOiBOek1vZGFsU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy50ZXh0ID0gdHJhbnNsYXRlR3JvdXBTeXN0ZW1Ob3RpY2UodGhpcy5tZXNzYWdlKTtcblxuICAgIGlmICh0aGlzLm1lc3NhZ2UudHlwZSA9PT0gVElNLlRZUEVTLk1TR19HUlBfU1lTX05PVElDRSkge1xuICAgICAgdGhpcy50aXRsZSA9ICfnvqTns7vnu5/pgJrnn6UnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpdGxlID0gJ+ezu+e7n+mAmuefpSc7XG4gICAgfVxuXG4gICAgdGhpcy5pc0pvaW5Hcm91cFJlcXVlc3QgPSAodGhpcy5wYXlsb2FkLm9wZXJhdGlvblR5cGUgPT09IDEpO1xuICB9XG5cbiAgYXBwcm92YWwoKSB7XG4gICAgdGhpcy5tb2RhbC5jcmVhdGUoe1xuICAgICAgbnpUaXRsZTogYOWkhOeQhuWKoOe+pOeUs+ivt2AsXG4gICAgICBuekNvbnRlbnQ6IEFwcHJvdmFsSm9pbkdyb3VwQ29tcG9uZW50LFxuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICBueldpZHRoOiAnNDAlJyxcbiAgICAgIG56U3R5bGU6IHsgdG9wOiAnMjBweCcgfSxcbiAgICAgIG56Q29tcG9uZW50UGFyYW1zOiB7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiIsIjxhcHAtbWVzc2FnZS1idWJibGUgW21lc3NhZ2VdPVwibWVzc2FnZVwiIFtpc01pbmVdPVwiZmFsc2VcIj5cclxuICA8ZGl2IGNsYXNzPVwiZ3JvdXAtc3lzdGVtLWVsZW1lbnQtd3JhcHBlclwiPlxyXG4gICAge3sgdGV4dCB9fVxyXG4gICAgPGJ1dHRvbiBuei1idXR0b24gKm5nSWY9XCJpc0pvaW5Hcm91cFJlcXVlc3RcIiB0eXBlPVwidGV4dFwiIChjbGljayk9XCJhcHByb3ZhbCgpXCI+5aSE55CGPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvYXBwLW1lc3NhZ2UtYnViYmxlPlxyXG4iXX0=