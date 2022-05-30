import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { CONVERSATION_TYPE, NG_Tim_CONFIG } from '../shared.data';
import { currentConversationSelector } from '../store/selectors';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
export class TitleComponent {
    constructor(store, config) {
        this.store = store;
        this.config = config;
        this.detailBtnClick = new EventEmitter();
        this.minimizeClick = new EventEmitter();
    }
    ngOnInit() {
        this.subscription = this.store.select(currentConversationSelector).subscribe((res) => {
            this.currentConversation = res;
        });
    }
    get detailIsHidden() {
        const none = JSON.stringify(this.currentConversation) === '{}';
        return none || (!none && this.currentConversation?.conversationID.includes('SYSTEM'));
    }
    get name() {
        switch (this.currentConversation?.type) {
            case CONVERSATION_TYPE.client:
                return this.currentConversation.userProfile.nick || this.currentConversation.userProfile.userID;
            case CONVERSATION_TYPE.group:
                return this.currentConversation.groupProfile.name;
            case CONVERSATION_TYPE.system:
                return '系统通知';
            default:
                return null;
        }
    }
    handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.detailBtnClick.emit();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
TitleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TitleComponent, deps: [{ token: i1.Store }, { token: NG_Tim_CONFIG }], target: i0.ɵɵFactoryTarget.Component });
TitleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: TitleComponent, selector: "lib-title", outputs: { detailBtnClick: "detailBtnClick", minimizeClick: "minimizeClick" }, ngImport: i0, template: "<div nz-row class=\"title\">\r\n  <div nz-col nzSpan=\"12\">\r\n    <span class=\"title-name\">\r\n      {{name}}\r\n    </span>\r\n  </div>\r\n  <div nz-col nzSpan=\"12\" class=\"icon-content\">\r\n    <div class=\"minimize\">\r\n      <i [hidden]=\"!config.minimized\" nz-icon nzType=\"minus\" nzTheme=\"outline\"\r\n        (click)=\"minimizeClick.emit()\"></i>\r\n    </div>\r\n    <div>\r\n      <i [hidden]=\"detailIsHidden\" nz-icon nzType=\"small-dash\" nzTheme=\"outline\" title=\"\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\"\r\n        (click)=\"handleClick($event)\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".title{background-color:#f5f5f5}.title-name{padding:0 20px;color:#1c2438;font-size:18px;font-weight:700;line-height:50px;text-shadow:#76828c 0 0 .1em}.icon-content{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.icon-content .minimize{flex:1}i{padding:6px;cursor:pointer}i:hover{background-color:#e5e5e5}\n"], directives: [{ type: i2.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i2.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: TitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-title', template: "<div nz-row class=\"title\">\r\n  <div nz-col nzSpan=\"12\">\r\n    <span class=\"title-name\">\r\n      {{name}}\r\n    </span>\r\n  </div>\r\n  <div nz-col nzSpan=\"12\" class=\"icon-content\">\r\n    <div class=\"minimize\">\r\n      <i [hidden]=\"!config.minimized\" nz-icon nzType=\"minus\" nzTheme=\"outline\"\r\n        (click)=\"minimizeClick.emit()\"></i>\r\n    </div>\r\n    <div>\r\n      <i [hidden]=\"detailIsHidden\" nz-icon nzType=\"small-dash\" nzTheme=\"outline\" title=\"\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\"\r\n        (click)=\"handleClick($event)\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".title{background-color:#f5f5f5}.title-name{padding:0 20px;color:#1c2438;font-size:18px;font-weight:700;line-height:50px;text-shadow:#76828c 0 0 .1em}.icon-content{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.icon-content .minimize{flex:1}i{padding:6px;cursor:pointer}i:hover{background-color:#e5e5e5}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Store }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NG_Tim_CONFIG]
                }] }]; }, propDecorators: { detailBtnClick: [{
                type: Output
            }], minimizeClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy90aXRsZS90aXRsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF3QyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk5RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQVFqRSxNQUFNLE9BQU8sY0FBYztJQU96QixZQUNVLEtBQVksRUFDVSxNQUFtQjtRQUR6QyxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1UsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUx6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDMUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBSy9DLENBQUM7SUFFTCxRQUFRO1FBRU4sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQWlCLEVBQUUsRUFBRTtZQUNqRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUMvRCxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLFFBQVEsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRTtZQUN0QyxLQUFLLGlCQUFpQixDQUFDLE1BQU07Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFbEcsS0FBSyxpQkFBaUIsQ0FBQyxLQUFLO2dCQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBRXBELEtBQUssaUJBQWlCLENBQUMsTUFBTTtnQkFDM0IsT0FBTyxNQUFNLENBQUM7WUFFaEI7Z0JBQ0UsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsS0FBWTtRQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7OzJHQWxEVSxjQUFjLHVDQVNmLGFBQWE7K0ZBVFosY0FBYyxnSUNiM0IsMG1CQWlCQTsyRkRKYSxjQUFjO2tCQUwxQixTQUFTOytCQUNFLFdBQVc7OzBCQWFsQixNQUFNOzJCQUFDLGFBQWE7NENBTGIsY0FBYztzQkFBdkIsTUFBTTtnQkFDRyxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb252ZXJzYXRpb24gfSBmcm9tICd0aW0tanMtc2RrJztcclxuaW1wb3J0IHsgQ09OVkVSU0FUSU9OX1RZUEUsIE5HX1RpbV9DT05GSUcgfSBmcm9tICcuLi9zaGFyZWQuZGF0YSc7XHJcbmltcG9ydCB7IGN1cnJlbnRDb252ZXJzYXRpb25TZWxlY3RvciB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IE5nVGltQ29uZmlnIH0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi10aXRsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpdGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aXRsZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjdXJyZW50Q29udmVyc2F0aW9uOiBDb252ZXJzYXRpb247XHJcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBPdXRwdXQoKSBkZXRhaWxCdG5DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgbWluaW1pemVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIEBJbmplY3QoTkdfVGltX0NPTkZJRykgcHVibGljIGNvbmZpZzogTmdUaW1Db25maWcsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnN0b3JlLnNlbGVjdChjdXJyZW50Q29udmVyc2F0aW9uU2VsZWN0b3IpLnN1YnNjcmliZSgocmVzOiBDb252ZXJzYXRpb24pID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uID0gcmVzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGV0YWlsSXNIaWRkZW4oKSB7XHJcbiAgICBjb25zdCBub25lID0gSlNPTi5zdHJpbmdpZnkodGhpcy5jdXJyZW50Q29udmVyc2F0aW9uKSA9PT0gJ3t9JztcclxuICAgIHJldHVybiBub25lIHx8ICghbm9uZSAmJiB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24/LmNvbnZlcnNhdGlvbklELmluY2x1ZGVzKCdTWVNURU0nKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50Q29udmVyc2F0aW9uPy50eXBlKSB7XHJcbiAgICAgIGNhc2UgQ09OVkVSU0FUSU9OX1RZUEUuY2xpZW50OlxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24udXNlclByb2ZpbGUubmljayB8fCB0aGlzLmN1cnJlbnRDb252ZXJzYXRpb24udXNlclByb2ZpbGUudXNlcklEO1xyXG5cclxuICAgICAgY2FzZSBDT05WRVJTQVRJT05fVFlQRS5ncm91cDpcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Q29udmVyc2F0aW9uLmdyb3VwUHJvZmlsZS5uYW1lO1xyXG5cclxuICAgICAgY2FzZSBDT05WRVJTQVRJT05fVFlQRS5zeXN0ZW06XHJcbiAgICAgICAgcmV0dXJuICfns7vnu5/pgJrnn6UnO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5kZXRhaWxCdG5DbGljay5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IG56LXJvdyBjbGFzcz1cInRpdGxlXCI+XHJcbiAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMTJcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwidGl0bGUtbmFtZVwiPlxyXG4gICAgICB7e25hbWV9fVxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgbnotY29sIG56U3Bhbj1cIjEyXCIgY2xhc3M9XCJpY29uLWNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtaW5pbWl6ZVwiPlxyXG4gICAgICA8aSBbaGlkZGVuXT1cIiFjb25maWcubWluaW1pemVkXCIgbnotaWNvbiBuelR5cGU9XCJtaW51c1wiIG56VGhlbWU9XCJvdXRsaW5lXCJcclxuICAgICAgICAoY2xpY2spPVwibWluaW1pemVDbGljay5lbWl0KClcIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxpIFtoaWRkZW5dPVwiZGV0YWlsSXNIaWRkZW5cIiBuei1pY29uIG56VHlwZT1cInNtYWxsLWRhc2hcIiBuelRoZW1lPVwib3V0bGluZVwiIHRpdGxlPVwi5p+l55yL6K+m57uG5L+h5oGvXCJcclxuICAgICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiPjwvaT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19